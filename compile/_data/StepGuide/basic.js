module.exports = function bishengPluginReactPreviewer() {
  var React = require("react");

  var ReactDOM = require("react-dom");

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports["default"] = Demo;

  var _react = require("react");

  var _rcui = require("rcui");

  var _antd = require("antd");

  function Demo() {
    var tour = (0, _react.useRef)(null);
    (0, _react.useEffect)(function () {
      setTimeout(function () {
        startTour();
      }, 2000);
      return exit;
    }, []);

    var startTour = function startTour() {
      tour.current = (0, _rcui.stepGuide)([{
        element: '#topLeft',
        title: '第1步',
        content: '这是topLeft',
        placement: 'topLeft'
      }, {
        element: '#out',
        title: '我在视野之外',
        content: '这都被你找到了，哈哈哈'
      }, {
        element: '#top',
        title: '第2步',
        content: '这是top',
        placement: 'top'
      }, {
        element: '#topRight',
        title: '第3步',
        content: '这是topRight',
        placement: 'topRight'
      }, {
        element: '#rightTop',
        title: '第4步',
        content: '这是rightTop',
        placement: 'rightTop'
      }, {
        element: '#right',
        title: '第5步',
        content: '这是right',
        placement: 'right'
      }, {
        element: '#rightBottom',
        title: '第6步',
        content: '这是rightBottom',
        placement: 'rightBottom'
      }, {
        element: '#bottomRight',
        title: '第7步',
        content: '这是bottomRight',
        placement: 'bottomRight'
      }, {
        element: '#bottom',
        title: '第8步',
        content: '这是bottom',
        placement: 'bottom'
      }, {
        element: '#bottomLeft',
        title: '第9步',
        content: '这是bottomLeft',
        placement: 'bottomLeft'
      }, {
        element: '#leftBottom',
        title: '第10步',
        content: '这是leftBottom',
        placement: 'leftBottom'
      }, {
        element: '#left',
        title: '第11步',
        content: '这是left',
        placement: 'left'
      }, {
        element: '#leftTop',
        title: '第12步',
        content: '这是leftTop',
        placement: 'leftTop'
      }], {
        onNext: function onNext(s) {
          console.log(s);
        }
      });
    };

    var exit = function exit() {
      var current = tour.current;
      if (!current) return;
      current.exit();
    };

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: 50
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: 100,
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement(_antd.Button, {
      id: "topLeft"
    }, "topLeft"), /*#__PURE__*/React.createElement(_antd.Button, {
      id: "top"
    }, "top"), /*#__PURE__*/React.createElement(_antd.Button, {
      id: "topRight"
    }, "topRight")), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 100,
        "float": 'left'
      }
    }, /*#__PURE__*/React.createElement(_antd.Button, {
      id: "leftTop"
    }, "leftTop"), /*#__PURE__*/React.createElement(_antd.Button, {
      id: "left"
    }, "left"), /*#__PURE__*/React.createElement(_antd.Button, {
      id: "leftBottom"
    }, "leftBottom")), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 100,
        marginLeft: 100 * 4 + 24
      }
    }, /*#__PURE__*/React.createElement(_antd.Button, {
      id: "rightTop"
    }, "rightTop"), /*#__PURE__*/React.createElement(_antd.Button, {
      id: "right"
    }, "right"), /*#__PURE__*/React.createElement(_antd.Button, {
      id: "rightBottom"
    }, "rightBottom")), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: 100,
        clear: 'both',
        whiteSpace: 'nowrap'
      }
    }, /*#__PURE__*/React.createElement(_antd.Button, {
      id: "bottomLeft"
    }, "bottomLeft"), /*#__PURE__*/React.createElement(_antd.Button, {
      id: "bottom"
    }, "bottom"), /*#__PURE__*/React.createElement(_antd.Button, {
      id: "bottomRight"
    }, "bottomRight"))));
  }

  return /*#__PURE__*/React.createElement(Demo, null);
}