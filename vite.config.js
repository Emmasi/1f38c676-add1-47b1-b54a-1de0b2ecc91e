import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

const logProxyMiddleware = (proxy, options) => {
  proxy.on('proxyReq', (proxyReq, req, res) => {
    console.log(`[Proxy Request] ${req.method} ${req.originalUrl}`);
    console.log(`[Original Proxy Request Headers]`, req.headers);

    proxyReq.removeHeader('accept-language');
  });

  proxy.on('proxyRes', (proxyRes, req, res) => {
    console.log(
      `[Proxy Response] ${req.method} ${req.originalUrl} -> ${proxyRes.statusCode}`
    );
    console.log(`[Proxy Response Headers]`, proxyRes.headers);
  });
};

export default defineConfig({
  plugins: [vue()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
  server: {
    proxy: {
      '/api/forlustanmalan': {
        target: 'https://www1.minuc.se',
        changeOrigin: true,
        configure: logProxyMiddleware,
        rewrite: (path) =>
          path.replace(/^\/api\/forlustanmalan/, '/forlustanmalan'),
      },
      '/api/content': {
        target: 'https://www1.minuc.se',
        changeOrigin: true,
        configure: logProxyMiddleware,
        rewrite: (path) =>
          path.replace(/^\/api\/content/, '/api/episerver/v2.0/content'),
      },
      '/api': {
        target: 'https://www1.minuc.se',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        configure: logProxyMiddleware,

      },
    },
  },
});


