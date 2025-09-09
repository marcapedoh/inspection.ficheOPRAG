
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
    'index.csr.html': {size: 24606, hash: '9044becfc5a3ce79459de2230e1654854ca1566e97fe880910ec6d9c6455177c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17059, hash: '2b7cb4a148e3d7b89446ec3b79bf6cf267c1c2842f83f0e354a69d9f909898c0', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'search/index.html': {size: 28217, hash: '1f6781103a891b0a7c965662f8d4398d7d7b336dadf0a090d659976b94a58748', text: () => import('./assets-chunks/search_index_html.mjs').then(m => m.default)},
    'index.html': {size: 44550, hash: 'a7a76168eb40a43b808611a0abc20603ed42b8152d233a08be4422ede9bd0567', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'sheet/index.html': {size: 39740, hash: 'd62064d9181420b48e66cfb28191b6184d111d2332f940bb50911cb1229d07da', text: () => import('./assets-chunks/sheet_index_html.mjs').then(m => m.default)},
    'styles-DTTV3AOM.css': {size: 8100, hash: 'jHWbwFO0LXY', text: () => import('./assets-chunks/styles-DTTV3AOM_css.mjs').then(m => m.default)}
  },
};
