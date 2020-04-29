# gatsby-remark-aliyun-images

English | [中文](./README_zh.md)

Processing images from the specified aliyun OSS bucket in Markdown

## Installation

````
npm install gatsby-remark-aliyun-images ---save
````

## Usage

```javascript
// gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-aliyun-images`,
          options: {
            bucket: 'xxx.oss-cn-beijing.aliyuncs.com' // OR ['xxx.oss-cn-beijing.aliyuncs.com']
            maxWidth: 650,
          },
        },
      ],
    },
  },
];
```

## Options

| Name                   | Default | Description                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  |
| `bucket`               |         |  Aliyun OSS bucket domain. Support for incoming multiple bucket domains                                                                                                                                                                                                                                                                                                      |
| `maxWidth`             | `650`   | maximum image width, in pixels, for scaling the image                                                                                                                                                                                                                                                                                                       |
| `withWebp `            | `false` | prefer WebP format, use WebP image when browser is supported                                                                                                   |
| `interlace `           | `false` | progressive display (invalid when using WebP)                                                                                                                                                                                                                                                                   |
| `quality `             | `50`    | image quality conversion, in percentages, for quality compression of images                                                                                                                                                                                                                                                                                                |

## LICENSE

[MIT](https://github.com/Raincal/gatsby-yuque/tree/master/packages/gatsby-remark-yuque-images/LICENSE)

