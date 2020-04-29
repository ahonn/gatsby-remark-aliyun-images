# gatsby-remark-aliyun-images

[English](./README.md) | 中文

处理 Markdown 里指定阿里云 OSS bucket 中的图像

## 安装

```
npm install gatsby-remark-aliyun-images --save
```

## 使用方式

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

## 默认值

| 名称                    | 默认值   | 描述                                                                                                                                                                                                                                                                                                                                                                       |
| ---------------------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bucket`               |         |  阿里云 OSS bucket 域名。支持传入多个 bucket 域名                                                                                                                                                                                                                                                                                                      |
| `maxWidth`             | `650`   | 图像最大宽度，以像素为单位，用于对图片进行缩放                                                                                                                                                                                                                                                                                                       |
| `withWebp `            | `false` | 优先使用 WebP 格式，当浏览器支持时会使用 WebP 图像                                                                                                   |
| `interlace `           | `false` | 渐进显示（使用 WebP 时无效）                                                                                                                                                                                                                                                                   |
| `quality `             | `50`    | 图片质量转换，以百分比为单位，用于对图像进行质量压缩                                                                                                                                                                                                                                                                                                |


### 许可协议

[MIT](https://github.com/Raincal/gatsby-yuque/tree/master/packages/gatsby-remark-yuque-images/LICENSE)
