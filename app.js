require('babel-register');
//Babel默认只转换新的JavaScript句法（syntax），而不转换新的API，使用babel-polyfill扩展新的ES6 API
require('babel-polyfill');
// require('./server/test.js');
require('./server/service.js');
