module.exports = function bishengPluginReactPreviewer() {
  var React = require("react");

  var ReactDOM = require("react-dom");

  var _react = require("react");

  var _antd = require("antd");

  var _icons = require("@ant-design/icons");

  var _rcui = require("rcui");

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function Demo() {
    var _useState = (0, _react.useState)('可以是个React.Node'),
        _useState2 = _slicedToArray(_useState, 2),
        text = _useState2[0],
        setText = _useState2[1];

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        width: 70,
        backgroundColor: '#ddd',
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement(_icons.DeleteOutlined, null), /*#__PURE__*/React.createElement(_rcui.Ellipsis, {
      content: text
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 100,
        backgroundColor: '#ddd'
      }
    }, /*#__PURE__*/React.createElement(_rcui.Ellipsis, {
      content: /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(_icons.DeleteOutlined, {
        style: {
          "float": 'left'
        }
      }), text)
    })), /*#__PURE__*/React.createElement(_antd.Button, {
      onClick: function onClick() {
        return setText('哈哈哈');
      }
    }, "\u77ED\u6587\u672C"), /*#__PURE__*/React.createElement(_antd.Button, {
      type: "primary",
      onClick: function onClick() {
        return setText('我好长哈哈哈哈哈哈哈哈哈哈哈哈哈哈');
      }
    }, "\u957F\u6587\u672C"));
  }

  return /*#__PURE__*/React.createElement(Demo, null);
}