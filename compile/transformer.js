const fs = require('fs');
const path = require('path');
const babel = require('@babel/core');
const types = require('@babel/types');
const traverse = require('@babel/traverse').default;
const generator = require('@babel/generator').default;
const JsonML = require('jsonml.js/lib/utils.js');
const getCode = require('./getCode');

const errorBoxStyle = {
  padding: 10,
  background: 'rgb(204, 0, 0)',
  color: 'white',
  fontFamily: 'sans-serif',
  fontSize: '16px',
  fontWeight: 'bold',
  overflow: 'auto',
};

function requireGenerator(varName, moduleName) {
  return types.variableDeclaration('var', [
    types.variableDeclarator(
      types.identifier(varName),
      types.callExpression(types.identifier('require'), [
        types.stringLiteral(moduleName),
      ]),
    ),
  ]);
}
const defaultBabelConfig = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: [
            'last 2 versions',
            'Firefox ESR',
            '> 1%',
            'ie >= 8',
            'iOS >= 8',
            'Android >= 4',
          ],
        },
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    [
      '@babel/plugin-transform-typescript',
      { isTSX: true },
    ],
    [
      '@babel/plugin-proposal-decorators',
      { decoratorsBeforeExport: true },
    ],
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread',
  ],
};

function transformer(code, babelConfig = {}, noreact) {
  let codeAst = null;

  try {
    const parserOpts = Object.assign({
      ast: true,
      babelrc: false,
      configFile: false,
    }, defaultBabelConfig, babelConfig);
    //  parseSync
    const { ast } = babel.transformSync(
      code,
      parserOpts,
    );
    codeAst = ast;
  } catch (e) {
    console.error(e);
    return (
      'function() { '
      + "  var React = require('react');"
      + "  return React.createElement('pre', {"
      + `    style: ${JSON.stringify(errorBoxStyle)}`
      + `  }, '${e.toString()}'); `
      + '}'
    );
  }

  let renderReturn = null;
  traverse(codeAst, {
    CallExpression(callPath) {
      const callPathNode = callPath.node;
      if (
        callPathNode.callee
        && callPathNode.callee.object
        && callPathNode.callee.object.name === 'ReactDOM'
        && callPathNode.callee.property
        && callPathNode.callee.property.name === 'render'
      ) {
        renderReturn = types.returnStatement(callPathNode.arguments[0]);

        callPath.remove();
      }
    },
  });

  const astProgramBody = codeAst.program.body;
  if (!noreact) {
    astProgramBody.unshift(requireGenerator('ReactDOM', 'react-dom'));
    astProgramBody.unshift(requireGenerator('React', 'react'));
  }
  // ReactDOM.render always at the last of preview method
  if (renderReturn) {
    astProgramBody.push(renderReturn);
  }

  const codeBlock = types.BlockStatement(astProgramBody);
  const previewFunction = types.functionDeclaration(
    types.Identifier('bishengPluginReactPreviewer'),
    [],
    codeBlock,
  );

  return generator(types.program([previewFunction]), {}, code).code;
};


module.exports = (md, fileName, filePath) => getCode(md, (code, node) => callBack(code, node, fileName, filePath));

function callBack(code, node, fileName, filePath) {
  fnCode = transformer(code);
  const catalog = path.resolve(__dirname, './_data/', filePath.match(/(?<=.*components\/)[^\/]*\//)[0]);
  const fileLoc = path.resolve(catalog, fileName.replace(/\..*$/, '.js'));
  if (!fs.existsSync(catalog)) {
    fs.mkdirSync(catalog);
  }
  fs.writeFileSync(fileLoc, `module.exports = ${fnCode}`)
  JsonML.getAttributes(node).realCode = fnCode;

}

// function aaa() {
//   return {
//     visitor: {
//       ImportDeclaration: replacePath,
//       ExportNamedDeclaration: replacePath,
//     },
//   };
// }

// const replacePath = (nodePath) => {
//   nodePath.traverse({
//     enter(_path) {
//       if (_path.type === "StringLiteral") {
//         const val = _path.node.value;
//         if (val === 'rcui') {
//           _path.node.value = path.resolve(__dirname, '../components');
//         } else {
//           console.log(_path, val, 999)
//           _path.node.value = path.resolve(__dirname, '../node_modules/', val);
//         }
//       }
//     }
//   })
// }