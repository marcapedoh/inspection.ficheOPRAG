
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
    'index.csr.html': {size: 24606, hash: 'a8e2a7b57fbbe1870a7d9b6e835dcf57ba583b20ec2d6e957548036871b2d39c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17059, hash: 'ff45ed64732d8e6fa720c3437a0c81e18af17c7ec5752016ed5a60649f70b7da', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'search/index.html': {size: 28217, hash: '3e01039f1156f19db4351995293c878480d481773962b40bcd91397290fb7316', text: () => import('./assets-chunks/search_index_html.mjs').then(m => m.default)},
    'index.html': {size: 44550, hash: '4ba871ded2286cb74f2f11f0b7d51e4024d477ae022676ec8e019ca19f5d6a00', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'sheet/index.html': {size: 39740, hash: '3232b2cc36c5d19bcad3db6f80fe4b2f0fddb278b4b9361c73bff2a13f357c03', text: () => import('./assets-chunks/sheet_index_html.mjs').then(m => m.default)},
    'styles-DTTV3AOM.css': {size: 8100, hash: 'jHWbwFO0LXY', text: () => import('./assets-chunks/styles-DTTV3AOM_css.mjs').then(m => m.default)}
  },
};
