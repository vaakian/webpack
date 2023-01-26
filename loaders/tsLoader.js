const typescript = require('typescript')

/** @type {import('webpack').RawLoaderDefinitionFunction} */
module.exports = function tsLoader(content, map, meta) {
  const js = typescript.transpile(content.toString(), {
    // specify `react.createElement` as jsx factory
    jsx: typescript.JsxEmit.React,
  })
  return js
  // this.callback(null, js, map, meta)
}