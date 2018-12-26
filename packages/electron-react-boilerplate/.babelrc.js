const babelConfigFn = require('../../babel.config');
module.exports = api => {
  const {babelrcRoots, ...babelConfig} = babelConfigFn(api);
  return babelConfig;
}

