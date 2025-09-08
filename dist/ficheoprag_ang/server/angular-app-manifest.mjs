
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
    'index.csr.html': {size: 24606, hash: 'da0bd2b515d22b77fc6023c07b2e38871cf625565b1d0b6039735378bc425776', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17059, hash: '4629b1696850a7452f92995587de430160c99392693621f93dbef3865befe242', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'search/index.html': {size: 28217, hash: '3d7c103cff3aa3dde85769591b7f6d25ffc4af7f1e48b25da4adde3a326f71f1', text: () => import('./assets-chunks/search_index_html.mjs').then(m => m.default)},
    'index.html': {size: 45384, hash: '1aad227f20057ef0d5c0933c03d288974b6ce33fb63806da2238a5c262b92e00', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'sheet/index.html': {size: 49479, hash: '464538b3902782a5f0e40ddc32410246dcab1deccb715fb49593659f3f0aa685', text: () => import('./assets-chunks/sheet_index_html.mjs').then(m => m.default)},
    'styles-DTTV3AOM.css': {size: 8100, hash: 'jHWbwFO0LXY', text: () => import('./assets-chunks/styles-DTTV3AOM_css.mjs').then(m => m.default)}
  },
};
