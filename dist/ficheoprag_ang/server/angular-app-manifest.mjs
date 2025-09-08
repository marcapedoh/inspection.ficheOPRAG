
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/sheet"
  },
  {
    "renderMode": 2,
    "route": "/search"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24606, hash: '48568d1440199d7baddd6342e77b6d12e78a4ae3ba0b244af5cf1cf075f3a4f3', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17059, hash: '986a94eb1e30c9196c676aabf4d4f7a379792eccddae26bf0cd517c9e8a972fb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'search/index.html': {size: 28217, hash: 'd7c5e8a2be37d764e4a6b9a2f2bed90277590192830f4bd4002482ca8639b40b', text: () => import('./assets-chunks/search_index_html.mjs').then(m => m.default)},
    'index.html': {size: 44550, hash: '5b542600d50e8edd54c21d7b868238a18a883841ac3b449f88429bd7233768f8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'sheet/index.html': {size: 39740, hash: '24c3c9f19cc62c3ba94e4c6aab4208e313050abc42c202394f3751109671983a', text: () => import('./assets-chunks/sheet_index_html.mjs').then(m => m.default)},
    'styles-DTTV3AOM.css': {size: 8100, hash: 'jHWbwFO0LXY', text: () => import('./assets-chunks/styles-DTTV3AOM_css.mjs').then(m => m.default)}
  },
};
