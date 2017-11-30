'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _layout = require('../components/layout');

var _layout2 = _interopRequireDefault(_layout);

var _header = require('../components/header');

var _header2 = _interopRequireDefault(_header);

var _reactGa = require('react-ga');

var _reactGa2 = _interopRequireDefault(_reactGa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/kevingreen/Sites/couch-site/pages/index.js?entry';


var initGA = function initGA() {
  _reactGa2.default.initialize('UA-96992953-1');
};
var logPageView = function logPageView() {
  _reactGa2.default.set({ page: window.location.pathname });
  _reactGa2.default.pageview(window.location.pathname);
};

var _class = function (_Component) {
  (0, _inherits3.default)(_class, _Component);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);

    return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).apply(this, arguments));
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      initGA();
      logPageView();
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        }
      }, _react2.default.createElement(_header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 22
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '2646257837',
        css: '.main.jsx-2646257837{padding-top:10px;}.contact.jsx-2646257837{position:relative;width:200px;height:200px;padding-top:40px;}.contact__rotate.jsx-2646257837{width:133px;-webkit-animation:rotating-jsx-2646257837 8s linear infinite;animation:rotating-jsx-2646257837 8s linear infinite;}@media (min-width:45em){.contact.jsx-2646257837{position:fixed;right:20px;top:0px;}}.contact__email.jsx-2646257837{width:23px;}.footer.jsx-2646257837{padding-top:40px;}@-webkit-keyframes rotating-jsx-2646257837{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes rotating-jsx-2646257837{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCb0IsQUFHOEIsQUFHQyxBQU1OLEFBS0ssQUFNTixBQUdNLEFBSVEsQUFHRSxXQVQ3QixDQVh3QyxHQUt6QixFQWRmLEFBdUJBLENBcEJjLFFBWUYsSUFYRyxJQVliLFNBWGlCLGlCQUNuQixxQkFxQkUsTUFHQSx1Q0FwQkYiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2tldmluZ3JlZW4vU2l0ZXMvY291Y2gtc2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInXG5pbXBvcnQgUmVhY3RHQSBmcm9tICdyZWFjdC1nYSdcblxuY29uc3QgaW5pdEdBID0gKCkgPT4ge1xuICBSZWFjdEdBLmluaXRpYWxpemUoJ1VBLTk2OTkyOTUzLTEnKVxufVxuY29uc3QgbG9nUGFnZVZpZXcgPSAoKSA9PiB7XG4gIFJlYWN0R0Euc2V0KHsgcGFnZTogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lIH0pXG4gIFJlYWN0R0EucGFnZXZpZXcod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBpbml0R0EoKVxuICAgIGxvZ1BhZ2VWaWV3KClcbiAgfVxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubWFpbiB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhY3Qge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFjdF9fcm90YXRlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMzNweDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcm90YXRpbmcgOHMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDVlbSkge1xuICAgICAgICAgICAgLmNvbnRhY3Qge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhY3RfX2VtYWlsIHtcbiAgICAgICAgICAgIHdpZHRoOiAyM3B4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAa2V5ZnJhbWVzIHJvdGF0aW5nIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd3JhcHBlciBtYWluJz5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRlbnQnPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nY2Fwcyc+VGhlIENvdWNoIGlzIGEgc21hbGwgYnJvb2tseW4gYmFzZWQgZGlnaXRhbCBzdHVkaW8gdGhhdCBtYWtlcyB0aGluZ3MgZm9yIHRoZSBpbnRlcm5ldC48L2gxPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3B0Mic+XG4gICAgICAgICAgICA8cD5XZSB3YW50IHRvIHdvcmsgd2l0aCB5b3UuPC9wPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRhY3QgamNjIGFpYyBmIG1oYSc+XG4gICAgICAgICAgICA8YSBocmVmPSdtYWlsdG86bWVldHVzQHRoZWNvdWNoLm55YycgY2xhc3NOYW1lPSdhYnMgejEgZmlsbC1hIGZpdC1hJyAvPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2NvbnRhY3RfX3JvdGF0ZSBhYnMnIHNyYz0nL3N0YXRpYy9pY29uL3RleHQucG5nJyAvPlxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2NvbnRhY3RfX2VtYWlsJyBzcmM9Jy9zdGF0aWMvaWNvbi9FbWFpbC5wbmcnIC8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nZm9vdGVyJz5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nc21hbGwnPjxhIGhyZWY9J2h0dHA6Ly9kaXN0cmljdGRvbWFpbi5jb20nIHRhcmdldD0nX2JsYW5rJz5LZXZpbiBHcmVlbiDwn42dPC9hPiAtIDxhIGhyZWY9J2h0dHA6Ly9zYW0tZmF1bGtuZXIuY29tJyB0YXJnZXQ9J19ibGFuayc+U2FtIEZhdWxrbmVyIPCflK48L2E+IC0gPGEgaHJlZj0naHR0cDovL3pldXNsaXZlcy5jb20nIHRhcmdldD0nX2JsYW5rJz5Db3N0YSBEYW1hc2tvcyDwn6SUPC9hPiAtIDxhIGhyZWY9J2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9TXcxdE4temZSOWMnPkFiYnkgTXVpciDwn5KAPC9hPiAtIDxhIGhyZWY9J2h0dHA6Ly9lc3RyYXR0b25iYWlsZXkuY29tLyc+RXJpYyBCYWlsZXkg8J+NujwvYT48L3A+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
      }), _react2.default.createElement('div', {
        className: 'jsx-2646257837' + ' ' + 'wrapper main',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        }
      }, _react2.default.createElement('section', {
        className: 'jsx-2646257837' + ' ' + 'content',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-2646257837' + ' ' + 'caps',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        }
      }, 'The Couch is a small brooklyn based digital studio that makes things for the internet.')), _react2.default.createElement('section', {
        className: 'jsx-2646257837' + ' ' + 'pt2',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        }
      }, _react2.default.createElement('p', {
        className: 'jsx-2646257837',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        }
      }, 'We want to work with you.')), _react2.default.createElement('section', {
        className: 'jsx-2646257837' + ' ' + 'contact jcc aic f mha',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement('a', { href: 'mailto:meetus@thecouch.nyc', className: 'jsx-2646257837' + ' ' + 'abs z1 fill-a fit-a',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), _react2.default.createElement('img', { src: '/static/icon/text.png', className: 'jsx-2646257837' + ' ' + 'contact__rotate abs',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        }
      }), _react2.default.createElement('img', { src: '/static/icon/Email.png', className: 'jsx-2646257837' + ' ' + 'contact__email',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69
        }
      })), _react2.default.createElement('section', {
        className: 'jsx-2646257837' + ' ' + 'footer',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement('p', {
        className: 'jsx-2646257837' + ' ' + 'small',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, _react2.default.createElement('a', { href: 'http://districtdomain.com', target: '_blank', className: 'jsx-2646257837',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, 'Kevin Green \uD83C\uDF5D'), ' - ', _react2.default.createElement('a', { href: 'http://sam-faulkner.com', target: '_blank', className: 'jsx-2646257837',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, 'Sam Faulkner \uD83D\uDD2E'), ' - ', _react2.default.createElement('a', { href: 'http://zeuslives.com', target: '_blank', className: 'jsx-2646257837',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, 'Costa Damaskos \uD83E\uDD14'), ' - ', _react2.default.createElement('a', { href: 'https://www.youtube.com/watch?v=Mw1tN-zfR9c', className: 'jsx-2646257837',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, 'Abby Muir \uD83D\uDC80'), ' - ', _react2.default.createElement('a', { href: 'http://estrattonbailey.com/', className: 'jsx-2646257837',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, 'Eric Bailey \uD83C\uDF7A')))));
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkxheW91dCIsIkhlYWRlciIsIlJlYWN0R0EiLCJpbml0R0EiLCJpbml0aWFsaXplIiwibG9nUGFnZVZpZXciLCJzZXQiLCJwYWdlIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInBhZ2V2aWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTOzs7O0FBQ1QsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLFNBQVMsU0FBVCxBQUFTLFNBQU0sQUFDbkI7b0JBQUEsQUFBUSxXQUFSLEFBQW1CLEFBQ3BCO0FBRkQ7QUFHQSxJQUFNLGNBQWMsU0FBZCxBQUFjLGNBQU0sQUFDeEI7b0JBQUEsQUFBUSxJQUFJLEVBQUUsTUFBTSxPQUFBLEFBQU8sU0FBM0IsQUFBWSxBQUF3QixBQUNwQztvQkFBQSxBQUFRLFNBQVMsT0FBQSxBQUFPLFNBQXhCLEFBQWlDLEFBQ2xDO0FBSEQ7Ozs7Ozs7Ozs7Ozs7d0NBTXVCLEFBQ25CO0FBQ0E7QUFDRDs7Ozs2QkFDUyxBQUNSOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBREYsQUFDRTtBQUFBO0FBQUE7aUJBREY7YUFBQSxBQXNDRTtBQXRDRiwwQkFzQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQW1COztvQkFBbkI7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFjOztvQkFBZDtzQkFBQTtBQUFBO0FBQUEsU0FGSixBQUNFLEFBQ0UsQUFFRiw0R0FBQSxjQUFBOzRDQUFBLEFBQW1COztvQkFBbkI7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBTEosQUFJRSxBQUNFLEFBRUYsK0NBQUEsY0FBQTs0Q0FBQSxBQUFtQjs7b0JBQW5CO3NCQUFBLEFBQ0U7QUFERjtBQUFBLDhDQUNLLE1BQUgsQUFBUSxrRUFBUixBQUErQzs7b0JBQS9DO3NCQURGLEFBQ0UsQUFDQTtBQURBO2lEQUNxQyxLQUFyQyxBQUF5Qyw2REFBekMsQUFBZTs7b0JBQWY7c0JBRkYsQUFFRSxBQUNBO0FBREE7aURBQ2dDLEtBQWhDLEFBQW9DLDhEQUFwQyxBQUFlOztvQkFBZjtzQkFWSixBQU9FLEFBR0UsQUFFRjtBQUZFOzJCQUVGLGNBQUE7NENBQUEsQUFBbUI7O29CQUFuQjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWE7O29CQUFiO3NCQUFBLEFBQXFCO0FBQXJCO0FBQUEseUJBQXFCLGNBQUEsT0FBRyxNQUFILEFBQVEsNkJBQTRCLFFBQXBDLEFBQTJDLHFCQUEzQzs7b0JBQUE7c0JBQUE7QUFBQTtTQUFyQixBQUFxQiw2QkFBeUUsdUJBQUEsY0FBQSxPQUFHLE1BQUgsQUFBUSwyQkFBMEIsUUFBbEMsQUFBeUMscUJBQXpDOztvQkFBQTtzQkFBQTtBQUFBO1NBQTlGLEFBQThGLDhCQUF3RSx1QkFBQSxjQUFBLE9BQUcsTUFBSCxBQUFRLHdCQUF1QixRQUEvQixBQUFzQyxxQkFBdEM7O29CQUFBO3NCQUFBO0FBQUE7U0FBdEssQUFBc0ssZ0NBQXVFLHVCQUFBLGNBQUEsT0FBRyxNQUFILEFBQVEsMERBQVI7O29CQUFBO3NCQUFBO0FBQUE7U0FBN08sQUFBNk8sMkJBQXlFLHVCQUFBLGNBQUEsT0FBRyxNQUFILEFBQVEsMENBQVI7O29CQUFBO3NCQUFBO0FBQUE7U0FwRDlULEFBQ0UsQUFzQ0UsQUFZRSxBQUNFLEFBQXNULEFBSy9UOzs7OztBQS9EMEIsQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2V2aW5ncmVlbi9TaXRlcy9jb3VjaC1zaXRlIn0=