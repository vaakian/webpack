# webpack knowledge

## Loader
> Performed at `import` statement.

Purely transform the source file, and return the result. 

### Well-known loaders
- **css-loader**: Load the css file(raw), resolve `@imports` and `url()`.
- **style-loader**: Inject the style into the `head` tag.
- **file-loader**: Load the file as raw.
- **url-loader**: Load the file as base64 or relative url.
- **babel-loader**: Load the js file and transform it using `babel` for `es6` support.
- **ts-loader**: Load the ts file and transform it using `typescript`.
- ...

## Plugin
> Performed at `webpack` build process.

Can do anything during the webpack build process using [compiler hooks](https://webpack.js.org/api/compiler-hooks/).

### Well-known plugins

- **html-webpack-plugin**: Generate `html` file that loads the entry file.

## manifest

> Store the module mapping in a `json` file.

Chunk manifest is a mapping of chunk ids to chunk files. It is used by the runtime to load chunks by id when using [dynamic imports](https://webpack.js.org/guides/code-splitting/#dynamic-imports).

```shell
# dynamic import process
import => __webpack_require__ => manifest => load chunk
```


## Other things

1. **ts-loader**: resolve suffix
2. **ProviderPlugin**: provide global variable
3. **html-webpack-plugin**: generate html file that loads the entry file
4. ***live-server**: serve the dist folder, `webpack --watch` will auto build to the dist folder
5. **webpack-dev-server**: does the same as `4`, but does NOT generate the dist folder, serve the memory file instead