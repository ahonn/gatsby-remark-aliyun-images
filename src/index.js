const htm = require('htm');
const vhtml = require('vhtml');
const urlparse = require('url-parse');
const visitWithParents = require(`unist-util-visit-parents`);

const { DEFAULT_OPTIONS, imageClass } = require('./constants');

const html = htm.bind(vhtml);

function generateAliyunImageUrl(url, options) {
  const transformations = {
    format: options.withWebp ? 'webp' : 'jpg',
    quality: `q_${options.quality}`,
    resize: `w_${options.maxWidth}`,
  };
  if (!options.withWebp) {
    if (options.interlace) {
      transformations.interlace = 1;
    }
  }

  const actions = Object.keys(transformations)
    .map((action) => `${action},${transformations[action]}`)
    .join('/');
  const processedUrl = `${url}?x-oss-process=image/${actions}`;

  return processedUrl;
}

module.exports = ({ markdownAST }, pluginOptions) => {
  const options = Object.assign({}, DEFAULT_OPTIONS, pluginOptions);

  const { bucket } = options;
  const buckets = Array.isArray(bucket) ? bucket : [bucket];

  visitWithParents(markdownAST, [`image`, `imageReference`], (node) => {
    const { host } = urlparse(node.url);

    if (buckets.includes(host)) {
      const { url: originUrl, alt } = node;
      const jpgUrl = generateAliyunImageUrl(originUrl, {
        ...options,
        withWebp: false,
      });

      node.type = `html`;
      node.value = html`
        <img class="${imageClass}" src="${jpgUrl}" alt="${alt}" />
      `;

      if (options.withWebp) {
        const webpUrl = generateAliyunImageUrl(originUrl, options);
        node.value = html`
          <picture>
            <source srcset="${webpUrl}" type="image/webp" />
            <source srcset="${jpgUrl}" type="image/jpeg" />
            <img class="${imageClass}" src="${jpgUrl}" alt="${alt}" />
          </picture>
        `;
      }
    }
  });

  return markdownAST;
};
