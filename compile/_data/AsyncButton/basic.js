module.exports = function bishengPluginReactPreviewer() {
  var React = require("react");

  var ReactDOM = require("react-dom");

  var _rcui = require("rcui");

  function Demo() {
    var handleClick = function handleClick() {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve();
        }, 2000);
      });
    };

    return /*#__PURE__*/React.createElement(_rcui.AsyncButton, {
      onClick: handleClick
    }, "\u70B9\u51FB");
  }

  return /*#__PURE__*/React.createElement(Demo, null);
}