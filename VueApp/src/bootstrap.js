window._       = require('lodash');
window.moment  = require('moment');
window.collect = require('collect.js');

try {
    window.$ = window.jQuery = require('jquery');

    require('bootstrap-sass');
} catch (e) {
}

window.axios                                             = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';



