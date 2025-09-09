
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
    'index.csr.html': {size: 24606, hash: 'ac324e226e9a17a11d276347f88e9a6796c866b3a8107322de806cb68198720e', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17059, hash: 'd81511d5afa82be139619df63acdf7b61793a3dc814191c42e74c4df576efb8d', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'search/index.html': {size: 28217, hash: '561a5d0042012b10eb697c64e4a777c61f8bd9b93b91b86122b8f44ad670a4bb', text: () => import('./assets-chunks/search_index_html.mjs').then(m => m.default)},
    'index.html': {size: 44550, hash: 'a4fc080cc1993b4f2ef2135b32fac457bbac60e13b3ef949b8e4e6c746238334', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'sheet/index.html': {size: 39740, hash: '57e4e86812c564ac3e723bf357b84030f91cb4b9056e954190c4a0a7492ae191', text: () => import('./assets-chunks/sheet_index_html.mjs').then(m => m.default)},
    'styles-DTTV3AOM.css': {size: 8100, hash: 'jHWbwFO0LXY', text: () => import('./assets-chunks/styles-DTTV3AOM_css.mjs').then(m => m.default)}
  },
};
