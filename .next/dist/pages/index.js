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

      console.info("%c We're using Next.js for this because we got bored", 'background: #021993; color: #fff');
      console.info("%c The code's up on our git: https://github.com/the-couch/couch-site", 'background: #021993; color: #fff');
      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        }
      }, _react2.default.createElement(_header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '2994150416',
        css: '.main.jsx-2994150416{padding-top:10px;}.contact.jsx-2994150416{position:relative;width:200px;height:200px;}.contact__email.jsx-2994150416{width:28px;}.contact__rotate.jsx-2994150416{width:133px;-webkit-animation:rotating-jsx-2994150416 8s linear infinite;animation:rotating-jsx-2994150416 8s linear infinite;left:30px;top:36px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}@media (min-width:45em){.contact.jsx-2994150416{position:fixed;width:200px;height:200px;right:80px;top:20px;}.contact__rotate.jsx-2994150416{width:165px;top:20px;left:20px;}.contact__email.jsx-2994150416{width:32px;}}.address.jsx-2994150416{max-width:40px;}.footer.jsx-2994150416{padding-top:40px;padding-bottom:50px;}@media (min-width:80em){.footer.jsx-2994150416{max-width:800px;width:100%;}.footer__wrapper.jsx-2994150416{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}}@media (min-height:900px) and (min-width:700px){.footer__wrapper.jsx-2994150416{position:fixed;bottom:40px;width:calc(100% - 160px);}}@-webkit-keyframes rotating-jsx-2994150416{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes rotating-jsx-2994150416{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTRCb0IsQUFHOEIsQUFHQyxBQUtQLEFBR0MsQUFRSyxBQU9ILEFBS0QsQUFJRSxBQUdFLEFBS0MsQUFJSCxBQU9FLEFBT1EsQUFHRSxXQXZEN0IsQUF1QkUsQ0FwQnNDLEFBZTNCLEdBUEcsQUFnQmhCLEFBbUJnQixDQVhELENBM0NmLEFBc0NzQixDQW5DUixHQXdCQSxNQVBHLEFBd0JmLEFBVzJCLEdBbkRkLENBd0JiLE1BV0YsR0FsQmUsR0FoQmYsUUFpQmEsQ0FrQ1gsUUFqQ0EsY0F3QnFCLE9BY3JCLE1BR0EsdUNBcERVLFVBQ0QsU0FDdUIsc0JBa0NBLG1GQWpDbEMsZ0NBa0NFIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rZXZpbmdyZWVuL1NpdGVzL2NvdWNoLXNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IFJlYWN0R0EgZnJvbSAncmVhY3QtZ2EnXG5pbXBvcnQgVGVhbSBmcm9tICcuLi9jb21wb25lbnRzL3RlYW0nXG5cbmltcG9ydCBBUEkgZnJvbSAnLi4vYXBpL3RlYW0nXG5cbmNvbnN0IGluaXRHQSA9ICgpID0+IHtcbiAgUmVhY3RHQS5pbml0aWFsaXplKCdVQS05Njk5Mjk1My0xJylcbn1cbmNvbnN0IGxvZ1BhZ2VWaWV3ID0gKCkgPT4ge1xuICBSZWFjdEdBLnNldCh7IHBhZ2U6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSB9KVxuICBSZWFjdEdBLnBhZ2V2aWV3KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgaW5pdEdBKClcbiAgICBsb2dQYWdlVmlldygpXG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IEFQSVxuICAgIGNvbnNvbGUuaW5mbyhcIiVjIFdlJ3JlIHVzaW5nIE5leHQuanMgZm9yIHRoaXMgYmVjYXVzZSB3ZSBnb3QgYm9yZWRcIiwgJ2JhY2tncm91bmQ6ICMwMjE5OTM7IGNvbG9yOiAjZmZmJylcbiAgICBjb25zb2xlLmluZm8oXCIlYyBUaGUgY29kZSdzIHVwIG9uIG91ciBnaXQ6IGh0dHBzOi8vZ2l0aHViLmNvbS90aGUtY291Y2gvY291Y2gtc2l0ZVwiLCAnYmFja2dyb3VuZDogIzAyMTk5MzsgY29sb3I6ICNmZmYnKVxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubWFpbiB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhY3Qge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhY3RfX2VtYWlsIHtcbiAgICAgICAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFjdF9fcm90YXRlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMzNweDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcm90YXRpbmcgOHMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgbGVmdDogMzBweDtcbiAgICAgICAgICAgIHRvcDogMzZweDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDVlbSkge1xuICAgICAgICAgICAgLmNvbnRhY3Qge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgICAgcmlnaHQ6IDgwcHg7XG4gICAgICAgICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWN0X19yb3RhdGUge1xuICAgICAgICAgICAgICB3aWR0aDogMTY1cHg7XG4gICAgICAgICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWN0X19lbWFpbCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuYWRkcmVzcyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb290ZXIge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDgwZW0pIHtcbiAgICAgICAgICAgIC5mb290ZXIge1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb290ZXJfX3dyYXBwZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWluLWhlaWdodDogOTAwcHgpIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xuICAgICAgICAgICAgLmZvb3Rlcl9fd3JhcHBlciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTYwcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAa2V5ZnJhbWVzIHJvdGF0aW5nIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyIG1haW4nPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdjb250ZW50Jz5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nY2Fwcyc+VGhlIENvdWNoIGlzIGEgc21hbGwgYnJvb2tseW4gYmFzZWQgZGlnaXRhbCBzdHVkaW8gdGhhdCBtYWtlcyB0aGluZ3MgZm9yIHRoZSBpbnRlcm5ldC48L2gxPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPScnPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3NtYWxsJz5XZSB3YW50IHRvIHdvcmsgd2l0aCB5b3UuPC9wPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdjb250YWN0IGpjYyBhaWMgZiBtaGEnPlxuICAgICAgICAgICAgICA8YSBocmVmPSdtYWlsdG86bWVldHVzQHRoZWNvdWNoLm55YycgY2xhc3NOYW1lPSdhYnMgejEgZmlsbC1hIGZpdC1hJyAvPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nY29udGFjdF9fcm90YXRlIGFicycgc3JjPScvc3RhdGljL3RleHQucG5nJyAvPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nY29udGFjdF9fZW1haWwnIHNyYz0nL3N0YXRpYy9FbWFpbC5wbmcnIC8+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl9fd3JhcHBlcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyIGNhcHMgZiBmdyBqY3MgZmlsbC14Jz5cbiAgICAgICAgICAgICAge2RhdGEubWFwKChwZXJzb24sIGkpID0+IChcbiAgICAgICAgICAgICAgICA8VGVhbSBrZXk9e2l9IHsuLi5wZXJzb259IC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWRkcmVzc19faW5mbyBmIGFpYyBqY2UgZmlsbC14Jz5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2FyIGNhcHMnPkF2YWlsYWJsZSBJUkwgQDxiciAvPjg3IFJpY2hhcmRzb24gU3QuIFN1aXRlIDZXPGJyIC8+QnJvb2tseW4sIE5ZIDExMjExPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nYWRkcmVzcyBweDEnIHNyYz0nL3N0YXRpYy9BZGRyZXNzLnBuZycgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
      }), _react2.default.createElement('div', {
        className: 'jsx-2994150416',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2994150416' + ' ' + 'wrapper main',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        }
      }, _react2.default.createElement('section', {
        className: 'jsx-2994150416' + ' ' + 'content',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-2994150416' + ' ' + 'caps',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        }
      }, 'The Couch is a small brooklyn based digital studio that makes things for the internet.')), _react2.default.createElement('section', {
        className: 'jsx-2994150416' + ' ' + '',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        }
      }, _react2.default.createElement('p', {
        className: 'jsx-2994150416' + ' ' + 'small',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, 'We want to work with you.')), _react2.default.createElement('section', {
        className: 'jsx-2994150416' + ' ' + 'contact jcc aic f mha',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, _react2.default.createElement('a', { href: 'mailto:meetus@thecouch.nyc', className: 'jsx-2994150416' + ' ' + 'abs z1 fill-a fit-a',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }), _react2.default.createElement('img', { src: '/static/text.png', className: 'jsx-2994150416' + ' ' + 'contact__rotate abs',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        }
      }), _react2.default.createElement('img', { src: '/static/Email.png', className: 'jsx-2994150416' + ' ' + 'contact__email',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }))), _react2.default.createElement('div', {
        className: 'jsx-2994150416' + ' ' + 'footer__wrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2994150416' + ' ' + 'footer caps f fw jcs fill-x',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, data.map(function (person, i) {
        return _react2.default.createElement(_team2.default, (0, _extends3.default)({ key: i }, person, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 116
          }
        }));
      })), _react2.default.createElement('div', {
        className: 'jsx-2994150416' + ' ' + 'address__info f aic jce fill-x',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2994150416',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react2.default.createElement('p', {
        className: 'jsx-2994150416' + ' ' + 'ar caps',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, 'Available IRL @', _react2.default.createElement('br', {
        className: 'jsx-2994150416',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }), '87 Richardson St. Suite 6W', _react2.default.createElement('br', {
        className: 'jsx-2994150416',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }), 'Brooklyn, NY 11211')), _react2.default.createElement('div', {
        className: 'jsx-2994150416',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, _react2.default.createElement('img', { src: '/static/Address.png', className: 'jsx-2994150416' + ' ' + 'address px1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }))))));
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkxheW91dCIsIkhlYWRlciIsIlJlYWN0R0EiLCJUZWFtIiwiQVBJIiwiaW5pdEdBIiwiaW5pdGlhbGl6ZSIsImxvZ1BhZ2VWaWV3Iiwic2V0IiwicGFnZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJwYWdldmlldyIsImRhdGEiLCJjb25zb2xlIiwiaW5mbyIsIm1hcCIsInBlcnNvbiIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTOzs7O0FBQ1QsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFVOzs7O0FBRWpCLEFBQU8sQUFBUzs7Ozs7Ozs7O0FBRWhCLElBQU0sU0FBUyxTQUFULEFBQVMsU0FBTSxBQUNuQjtvQkFBQSxBQUFRLFdBQVIsQUFBbUIsQUFDcEI7QUFGRDtBQUdBLElBQU0sY0FBYyxTQUFkLEFBQWMsY0FBTSxBQUN4QjtvQkFBQSxBQUFRLElBQUksRUFBRSxNQUFNLE9BQUEsQUFBTyxTQUEzQixBQUFZLEFBQXdCLEFBQ3BDO29CQUFBLEFBQVEsU0FBUyxPQUFBLEFBQU8sU0FBeEIsQUFBaUMsQUFDbEM7QUFIRDs7Ozs7Ozs7Ozs7Ozt3Q0FNdUIsQUFDbkI7QUFDQTtBQUNEOzs7OzZCQUNTO1VBQUEsQUFDQSxPQURBLEFBQ1MsZUFEVCxBQUNBLEFBQ1I7O2NBQUEsQUFBUSxLQUFSLEFBQWEsd0RBQWIsQUFBcUUsQUFDckU7Y0FBQSxBQUFRLEtBQVIsQUFBYSx3RUFBYixBQUFxRixBQUNyRjs2QkFDRSxBQUFDOztvQkFBRDtzQkFBQSxBQUNFO0FBREY7QUFBQSxPQUFBLGtCQUNFLEFBQUM7O29CQUFEO3NCQURGLEFBQ0U7QUFBQTtBQUFBO2lCQURGO2FBQUEsQUF3RUU7QUF4RUYsMEJBd0VFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFtQjs7b0JBQW5CO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBYzs7b0JBQWQ7c0JBQUE7QUFBQTtBQUFBLFNBRkosQUFDRSxBQUNFLEFBRUYsNEdBQUEsY0FBQTs0Q0FBQSxBQUFtQjs7b0JBQW5CO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBYTs7b0JBQWI7c0JBQUE7QUFBQTtBQUFBLFNBTEosQUFJRSxBQUNFLEFBRUYsK0NBQUEsY0FBQTs0Q0FBQSxBQUFtQjs7b0JBQW5CO3NCQUFBLEFBQ0U7QUFERjtBQUFBLDhDQUNLLE1BQUgsQUFBUSxrRUFBUixBQUErQzs7b0JBQS9DO3NCQURGLEFBQ0UsQUFDQTtBQURBO2lEQUNxQyxLQUFyQyxBQUF5Qyx3REFBekMsQUFBZTs7b0JBQWY7c0JBRkYsQUFFRSxBQUNBO0FBREE7aURBQ2dDLEtBQWhDLEFBQW9DLHlEQUFwQyxBQUFlOztvQkFBZjtzQkFYTixBQUNFLEFBT0UsQUFHRSxBQUdKO0FBSEk7NEJBR0osY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0c7QUFESDtBQUFBLGNBQ0csQUFBSyxJQUFJLFVBQUEsQUFBQyxRQUFELEFBQVMsR0FBVDsrQkFDUixBQUFDLHVEQUFLLEtBQU4sQUFBVyxLQUFYLEFBQWtCOztzQkFBbEI7d0JBRFEsQUFDUjtBQUFBO0FBQUEsVUFBQTtBQUhOLEFBQ0UsQUFDRyxBQUlILDJCQUFBLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFhOztvQkFBYjtzQkFBQTtBQUFBO0FBQUEsU0FBc0M7bUJBQUE7O29CQUFBO3NCQUF0QyxBQUFzQztBQUFBO0FBQUEsVUFBZ0M7bUJBQUE7O29CQUFBO3NCQUF0RSxBQUFzRTtBQUFBO0FBQUEsVUFGMUUsQUFDRSxBQUNFLEFBRUYsd0NBQUEsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsZ0RBQytCLEtBQTdCLEFBQWlDLDJEQUFqQyxBQUFlOztvQkFBZjtzQkFsR1osQUFDRSxBQXdFRSxBQWNFLEFBTUUsQUFJRSxBQUNFLEFBT2I7QUFQYTs7Ozs7O0FBM0dhLEEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2tldmluZ3JlZW4vU2l0ZXMvY291Y2gtc2l0ZSJ9