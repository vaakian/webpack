/** @type {import('webpack').RawLoaderDefinitionFunction} */
module.exports = function styleLoader(content, map, meta) {
  return `
  const styleTag = document.createElement('style');
  styleTag.innerHTML = ${JSON.stringify(content)};
  document.head.appendChild(styleTag);
  `;
};
