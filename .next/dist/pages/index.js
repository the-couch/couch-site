'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends2 = require('babel-runtime/helpers/extends');

var _extends3 = _interopRequireDefault(_extends2);

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

var _team = require('../components/team');

var _team2 = _interopRequireDefault(_team);

var _team3 = require('../api/team');

var _team4 = _interopRequireDefault(_team3);

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
      var data = _team4.default.data;

      console.log('stuff', data);
      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        }
      }, _react2.default.createElement(_header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '2994150416',
        css: '.main.jsx-2994150416{padding-top:10px;}.contact.jsx-2994150416{position:relative;width:200px;height:200px;}.contact__email.jsx-2994150416{width:28px;}.contact__rotate.jsx-2994150416{width:133px;-webkit-animation:rotating-jsx-2994150416 8s linear infinite;animation:rotating-jsx-2994150416 8s linear infinite;left:30px;top:36px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}@media (min-width:45em){.contact.jsx-2994150416{position:fixed;width:200px;height:200px;right:80px;top:20px;}.contact__rotate.jsx-2994150416{width:165px;top:20px;left:20px;}.contact__email.jsx-2994150416{width:32px;}}.address.jsx-2994150416{max-width:40px;}.footer.jsx-2994150416{padding-top:40px;padding-bottom:50px;}@media (min-width:80em){.footer.jsx-2994150416{max-width:800px;width:100%;}.footer__wrapper.jsx-2994150416{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}}@media (min-height:900px) and (min-width:700px){.footer__wrapper.jsx-2994150416{position:fixed;bottom:40px;width:calc(100% - 160px);}}@-webkit-keyframes rotating-jsx-2994150416{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes rotating-jsx-2994150416{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCb0IsQUFHOEIsQUFHQyxBQUtQLEFBR0MsQUFRSyxBQU9ILEFBS0QsQUFJRSxBQUdFLEFBS0MsQUFJSCxBQU9FLEFBT1EsQUFHRSxXQXZEN0IsQUF1QkUsQ0FwQnNDLEFBZTNCLEdBUEcsQUFnQmhCLEFBbUJnQixDQVhELENBM0NmLEFBc0NzQixDQW5DUixHQXdCQSxNQVBHLEFBd0JmLEFBVzJCLEdBbkRkLENBd0JiLE1BV0YsR0FsQmUsR0FoQmYsUUFpQmEsQ0FrQ1gsUUFqQ0EsY0F3QnFCLE9BY3JCLE1BR0EsdUNBcERVLFVBQ0QsU0FDdUIsc0JBa0NBLG1GQWpDbEMsZ0NBa0NFIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rZXZpbmdyZWVuL1NpdGVzL2NvdWNoLXNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IFJlYWN0R0EgZnJvbSAncmVhY3QtZ2EnXG5pbXBvcnQgVGVhbSBmcm9tICcuLi9jb21wb25lbnRzL3RlYW0nXG5cbmltcG9ydCBBUEkgZnJvbSAnLi4vYXBpL3RlYW0nXG5cbmNvbnN0IGluaXRHQSA9ICgpID0+IHtcbiAgUmVhY3RHQS5pbml0aWFsaXplKCdVQS05Njk5Mjk1My0xJylcbn1cbmNvbnN0IGxvZ1BhZ2VWaWV3ID0gKCkgPT4ge1xuICBSZWFjdEdBLnNldCh7IHBhZ2U6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSB9KVxuICBSZWFjdEdBLnBhZ2V2aWV3KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgaW5pdEdBKClcbiAgICBsb2dQYWdlVmlldygpXG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IEFQSVxuICAgIGNvbnNvbGUubG9nKCdzdHVmZicsIGRhdGEpXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5tYWluIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFjdCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFjdF9fZW1haWwge1xuICAgICAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250YWN0X19yb3RhdGUge1xuICAgICAgICAgICAgd2lkdGg6IDEzM3B4O1xuICAgICAgICAgICAgYW5pbWF0aW9uOiByb3RhdGluZyA4cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgICBsZWZ0OiAzMHB4O1xuICAgICAgICAgICAgdG9wOiAzNnB4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0NWVtKSB7XG4gICAgICAgICAgICAuY29udGFjdCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICByaWdodDogODBweDtcbiAgICAgICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhY3RfX3JvdGF0ZSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxNjVweDtcbiAgICAgICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhY3RfX2VtYWlsIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hZGRyZXNzIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogNDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogODBlbSkge1xuICAgICAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvb3Rlcl9fd3JhcHBlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtaW4taGVpZ2h0OiA5MDBweCkgYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICAgICAgICAgICAuZm9vdGVyX193cmFwcGVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICBib3R0b206IDQwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNjBweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBrZXlmcmFtZXMgcm90YXRpbmcge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dyYXBwZXIgbWFpbic+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRlbnQnPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdjYXBzJz5UaGUgQ291Y2ggaXMgYSBzbWFsbCBicm9va2x5biBiYXNlZCBkaWdpdGFsIHN0dWRpbyB0aGF0IG1ha2VzIHRoaW5ncyBmb3IgdGhlIGludGVybmV0LjwvaDE+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nc21hbGwnPldlIHdhbnQgdG8gd29yayB3aXRoIHlvdS48L3A+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRhY3QgamNjIGFpYyBmIG1oYSc+XG4gICAgICAgICAgICAgIDxhIGhyZWY9J21haWx0bzptZWV0dXNAdGhlY291Y2gubnljJyBjbGFzc05hbWU9J2FicyB6MSBmaWxsLWEgZml0LWEnIC8+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdjb250YWN0X19yb3RhdGUgYWJzJyBzcmM9Jy9zdGF0aWMvdGV4dC5wbmcnIC8+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdjb250YWN0X19lbWFpbCcgc3JjPScvc3RhdGljL0VtYWlsLnBuZycgLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX193cmFwcGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXIgY2FwcyBmIGZ3IGpjcyBmaWxsLXgnPlxuICAgICAgICAgICAgICB7ZGF0YS5tYXAoKHBlcnNvbikgPT4gKFxuICAgICAgICAgICAgICAgIDxUZWFtIHsuLi5wZXJzb259IC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWRkcmVzc19faW5mbyBmIGFpYyBqY2UgZmlsbC14Jz5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2FyIGNhcHMnPkF2YWlsYWJsZSBJUkwgQDxiciAvPjg3IFJpY2hhcmRzb24gU3QuIFN1aXRlIDZXPGJyIC8+QnJvb2tseW4sIE5ZIDExMjExPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nYWRkcmVzcyBweDEnIHNyYz0nL3N0YXRpYy9BZGRyZXNzLnBuZycgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
      }), _react2.default.createElement('div', {
        className: 'jsx-2994150416',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2994150416' + ' ' + 'wrapper main',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement('section', {
        className: 'jsx-2994150416' + ' ' + 'content',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-2994150416' + ' ' + 'caps',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, 'The Couch is a small brooklyn based digital studio that makes things for the internet.')), _react2.default.createElement('section', {
        className: 'jsx-2994150416' + ' ' + '',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        }
      }, _react2.default.createElement('p', {
        className: 'jsx-2994150416' + ' ' + 'small',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, 'We want to work with you.')), _react2.default.createElement('section', {
        className: 'jsx-2994150416' + ' ' + 'contact jcc aic f mha',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, _react2.default.createElement('a', { href: 'mailto:meetus@thecouch.nyc', className: 'jsx-2994150416' + ' ' + 'abs z1 fill-a fit-a',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }), _react2.default.createElement('img', { src: '/static/text.png', className: 'jsx-2994150416' + ' ' + 'contact__rotate abs',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }), _react2.default.createElement('img', { src: '/static/Email.png', className: 'jsx-2994150416' + ' ' + 'contact__email',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }))), _react2.default.createElement('div', {
        className: 'jsx-2994150416' + ' ' + 'footer__wrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2994150416' + ' ' + 'footer caps f fw jcs fill-x',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, data.map(function (person) {
        return _react2.default.createElement(_team2.default, (0, _extends3.default)({}, person, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 115
          }
        }));
      })), _react2.default.createElement('div', {
        className: 'jsx-2994150416' + ' ' + 'address__info f aic jce fill-x',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2994150416',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, _react2.default.createElement('p', {
        className: 'jsx-2994150416' + ' ' + 'ar caps',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, 'Available IRL @', _react2.default.createElement('br', {
        className: 'jsx-2994150416',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }), '87 Richardson St. Suite 6W', _react2.default.createElement('br', {
        className: 'jsx-2994150416',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }), 'Brooklyn, NY 11211')), _react2.default.createElement('div', {
        className: 'jsx-2994150416',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, _react2.default.createElement('img', { src: '/static/Address.png', className: 'jsx-2994150416' + ' ' + 'address px1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }))))));
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkxheW91dCIsIkhlYWRlciIsIlJlYWN0R0EiLCJUZWFtIiwiQVBJIiwiaW5pdEdBIiwiaW5pdGlhbGl6ZSIsImxvZ1BhZ2VWaWV3Iiwic2V0IiwicGFnZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJwYWdldmlldyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibWFwIiwicGVyc29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7OztBQUNULEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQU8sQUFBVTs7OztBQUVqQixBQUFPLEFBQVM7Ozs7Ozs7OztBQUVoQixJQUFNLFNBQVMsU0FBVCxBQUFTLFNBQU0sQUFDbkI7b0JBQUEsQUFBUSxXQUFSLEFBQW1CLEFBQ3BCO0FBRkQ7QUFHQSxJQUFNLGNBQWMsU0FBZCxBQUFjLGNBQU0sQUFDeEI7b0JBQUEsQUFBUSxJQUFJLEVBQUUsTUFBTSxPQUFBLEFBQU8sU0FBM0IsQUFBWSxBQUF3QixBQUNwQztvQkFBQSxBQUFRLFNBQVMsT0FBQSxBQUFPLFNBQXhCLEFBQWlDLEFBQ2xDO0FBSEQ7Ozs7Ozs7Ozs7Ozs7d0NBTXVCLEFBQ25CO0FBQ0E7QUFDRDs7Ozs2QkFDUztVQUFBLEFBQ0EsT0FEQSxBQUNTLGVBRFQsQUFDQSxBQUNSOztjQUFBLEFBQVEsSUFBUixBQUFZLFNBQVosQUFBcUIsQUFDckI7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFERixBQUNFO0FBQUE7QUFBQTtpQkFERjthQUFBLEFBd0VFO0FBeEVGLDBCQXdFRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBbUI7O29CQUFuQjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWM7O29CQUFkO3NCQUFBO0FBQUE7QUFBQSxTQUZKLEFBQ0UsQUFDRSxBQUVGLDRHQUFBLGNBQUE7NENBQUEsQUFBbUI7O29CQUFuQjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWE7O29CQUFiO3NCQUFBO0FBQUE7QUFBQSxTQUxKLEFBSUUsQUFDRSxBQUVGLCtDQUFBLGNBQUE7NENBQUEsQUFBbUI7O29CQUFuQjtzQkFBQSxBQUNFO0FBREY7QUFBQSw4Q0FDSyxNQUFILEFBQVEsa0VBQVIsQUFBK0M7O29CQUEvQztzQkFERixBQUNFLEFBQ0E7QUFEQTtpREFDcUMsS0FBckMsQUFBeUMsd0RBQXpDLEFBQWU7O29CQUFmO3NCQUZGLEFBRUUsQUFDQTtBQURBO2lEQUNnQyxLQUFoQyxBQUFvQyx5REFBcEMsQUFBZTs7b0JBQWY7c0JBWE4sQUFDRSxBQU9FLEFBR0UsQUFHSjtBQUhJOzRCQUdKLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNHO0FBREg7QUFBQSxjQUNHLEFBQUssSUFBSSxVQUFBLEFBQUMsUUFBRDsrQkFDUixBQUFDLHlEQUFELEFBQVU7O3NCQUFWO3dCQURRLEFBQ1I7QUFBQTtBQUFBLFVBQUE7QUFITixBQUNFLEFBQ0csQUFJSCwyQkFBQSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBYTs7b0JBQWI7c0JBQUE7QUFBQTtBQUFBLFNBQXNDO21CQUFBOztvQkFBQTtzQkFBdEMsQUFBc0M7QUFBQTtBQUFBLFVBQWdDO21CQUFBOztvQkFBQTtzQkFBdEUsQUFBc0U7QUFBQTtBQUFBLFVBRjFFLEFBQ0UsQUFDRSxBQUVGLHdDQUFBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLGdEQUMrQixLQUE3QixBQUFpQywyREFBakMsQUFBZTs7b0JBQWY7c0JBbEdaLEFBQ0UsQUF3RUUsQUFjRSxBQU1FLEFBSUUsQUFDRSxBQU9iO0FBUGE7Ozs7OztBQTFHYSxBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rZXZpbmdyZWVuL1NpdGVzL2NvdWNoLXNpdGUifQ==