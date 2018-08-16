
import Vue from 'vue';

Vue.filter('from', (e) => {
    let local = moment(e).utc(e).local();
    return moment(local).fromNow();
});

Vue.filter('number', (e) => {
    return e.toFixed(2);
});

Vue.filter('commaNumber', (v) => {
    v         = v.toString();
    const end = v.lastIndexOf('.');
    for (let i = (end >= 0 ? end - 3 : v.length - 3); i > 0; i -= 3)
        v = v.slice(0, i) + ',' + v.slice(i, v.length);
    return v;
});

Vue.filter('numberShorten', (value, shouldFormat) => {
    if (shouldFormat !== undefined && shouldFormat === false)
        return value;

    let n = (value).toString();
    let f = ['', 'K', 'M', 'B', 'T'][Math.ceil(n.length / 3) - 1];
    while (n.length > 3) n = n.substr(0, n.length - 3);
    return n + f;
});

Vue.filter('capitalize', (value) => {
    if (!value && value !== 0) return '';
    value = value.toString();
    return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.filter ( "ucfirst" , function ( value ) {
    if ( value )
    {
        return value.charAt (0).toUpperCase () + value.slice (1);
    } else {
        return value;
    }
});