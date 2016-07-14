const $ = require('jquery');
const handlebars = require('handlebars');

$.ajax({
    url: '/server/list',
    type: 'GET',
    dataType: 'JSON'
}).then(function(res) {
    console.log('res:', res);
}, function(a, b, c) {
    console.log(a, b);
});
