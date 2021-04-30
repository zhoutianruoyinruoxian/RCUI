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
      return exit;
    }, []);

    var startTour = function startTour() {
      tour.current = (0, _rcui.stepGuide)([{
        element: '#step1',
        title: '第1步',
        content: '这是第1步',
        useEffect: function useEffect(next, dom) {
          dom.parentNode.style.cssText += 'left:-50px';
          setTimeout(next, 300);
          return function () {
            dom.parentNode.style.cssText += 'left:0px';
          };
        }
      }, {
        element: '#step2',
        title: '第2步',
        content: '这是第2步',
        placement: 'right'
      }, {
        element: '#step3',
        title: '第3步',
        content: '这是第3步',
        placement: 'right',
        useEffect: function useEffect(next, dom) {
          dom.parentNode.style.cssText += 'left:-50px';
          setTimeout(next, 300);
          return function () {
            dom.parentNode.style.cssText += 'left:0px';
          };
        }
      }, {
        element: '#step4',
        title: '第4步',
        content: '这是第4步,这一步没什么特别的'
      }]);
    };

    var exit = function exit() {
      var current = tour.current;
      if (!current) return;
      current.exit();
    };

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_antd.Button, {
      onClick: function onClick() {
        return startTour();
      },
      type: "primary"
    }, "\u70B9\u6211"), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: 200
      }
    }, /*#__PURE__*/React.createElement(_antd.Button, {
      id: "step2"
    }, "\u563F\u563F"), /*#__PURE__*/React.createElement("div", {
      id: "step4",
      style: {
        marginLeft: 100,
        whiteSpace: 'nowrap',
        width: 300,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        position: 'relative',
        top: 0,
        left: 0,
        transition: 'left 0.3s'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        width: '100%',
        backgroundColor: '#fff',
        padding: 10
      }
    }, "\u54C8\u54C8\u54C8"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        width: 50,
        backgroundColor: '#f20',
        padding: 10,
        color: '#fff'
      },
      id: "step1"
    }, "\u5220\u9664"))), /*#__PURE__*/React.createElement("div", {
      style: {
        marginLeft: 100,
        whiteSpace: 'nowrap',
        width: 300,
        overflow: 'hidden'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: '100%',
        position: 'relative',
        top: 0,
        left: 0,
        transition: 'left 0.3s'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        width: '100%',
        backgroundColor: '#fff',
        padding: 10
      }
    }, "\u54C8\u54C8\u54C82"), /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'inline-block',
        width: 50,
        backgroundColor: '#f20',
        padding: 10,
        color: '#fff'
      },
      id: "step3"
    }, "\u5220\u9664")))));
  }

  return /*#__PURE__*/React.createElement(Demo, null);
}