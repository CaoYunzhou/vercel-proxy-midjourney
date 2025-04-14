const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (req, res) => {
  const target = 'https://media.discordapp.net';

  // 创建代理并转发所有请求
  createProxyMiddleware({
    target,
    changeOrigin: true,
    pathRewrite: {
      '^/': '/', // 保持路径不变（可选，也可删除这行）
    }
  })(req, res);
};
