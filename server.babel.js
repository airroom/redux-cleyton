const config = JSON.parse(require('fs').readFileSync('./.babelrc'));

require('babel-core/register')(config);
require('babel-polyfill');
