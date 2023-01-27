const typescript = require('typescript');

/** @type {import('webpack').RawLoaderDefinitionFunction} */
module.exports = function tsLoader(content, map, meta) {
  const js = typescript.transpile(content.toString(), {
    // let compiler decide the jsx emit instead importing react in the code
    jsx: typescript.JsxEmit.ReactJSX,
    // sourceMap: true,
    // inlineSourceMap: true,
  });

  return js;
};
