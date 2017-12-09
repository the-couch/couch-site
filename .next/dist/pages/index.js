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

var _window = require('../components/window');

var _window2 = _interopRequireDefault(_window);

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

  function _class(props) {
    (0, _classCallCheck3.default)(this, _class);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));

    _this.state = {
      plantOne: false,
      plantTwo: false
    };
    return _this;
  }

  (0, _createClass3.default)(_class, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      initGA();
      logPageView();
    }
  }, {
    key: 'toggleOffice',
    value: function toggleOffice() {
      this.setState({
        plantOne: true,
        plantTwo: true
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var data = _team4.default.data;

      console.info("%c We're using Next.js for this because we got bored", 'background: #021993; color: #fff');
      console.info("%c The code's up on our git: https://github.com/the-couch/couch-site", 'background: #021993; color: #fff');
      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42
        }
      }, _react2.default.createElement(_header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '290849518',
        css: '.main.jsx-290849518{padding-top:10px;}.contact.jsx-290849518{position:relative;width:200px;height:200px;}.contact__email.jsx-290849518{width:28px;}.contact__rotate.jsx-290849518{width:133px;-webkit-animation:rotating-jsx-290849518 8s linear infinite;animation:rotating-jsx-290849518 8s linear infinite;left:30px;top:36px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}@media (min-width:45em){.contact.jsx-290849518{position:fixed;width:200px;height:200px;right:80px;top:20px;}.contact__rotate.jsx-290849518{width:165px;top:20px;left:20px;}.contact__email.jsx-290849518{width:32px;}}.address.jsx-290849518{max-width:70px;}.footer.jsx-290849518{padding-top:40px;padding-bottom:50px;}@media (min-width:80em){.footer.jsx-290849518{max-width:800px;width:100%;}.footer__wrapper.jsx-290849518{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}}@media (min-height:900px) and (min-width:700px){.footer__wrapper.jsx-290849518{position:fixed;bottom:40px;width:calc(100% - 160px);}}@-webkit-keyframes rotating-jsx-290849518{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes rotating-jsx-290849518{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJDb0IsQUFHOEIsQUFHQyxBQUtQLEFBR0MsQUFRSyxBQU9ILEFBS0QsQUFJRSxBQUdFLEFBS0MsQUFJSCxBQU9FLEFBT1EsQUFHRSxXQXZEN0IsQUF1QkUsQ0FwQnNDLEFBZTNCLEdBUEcsQUFnQmhCLEFBbUJnQixDQVhELENBM0NmLEFBc0NzQixDQW5DUixHQXdCQSxNQVBHLEFBd0JmLEFBVzJCLEdBbkRkLENBd0JiLE1BV0YsR0FsQmUsR0FoQmYsUUFpQmEsQ0FrQ1gsUUFqQ0EsY0F3QnFCLE9BY3JCLE1BR0EscUNBcERVLFVBQ0QsU0FDdUIsd0JBa0NBLGlGQWpDbEMsa0NBa0NFIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rZXZpbmdyZWVuL1NpdGVzL2NvdWNoLXNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IFdpbmRvdyBmcm9tICcuLi9jb21wb25lbnRzL3dpbmRvdydcbmltcG9ydCBSZWFjdEdBIGZyb20gJ3JlYWN0LWdhJ1xuaW1wb3J0IFRlYW0gZnJvbSAnLi4vY29tcG9uZW50cy90ZWFtJ1xuXG5pbXBvcnQgQVBJIGZyb20gJy4uL2FwaS90ZWFtJ1xuXG5jb25zdCBpbml0R0EgPSAoKSA9PiB7XG4gIFJlYWN0R0EuaW5pdGlhbGl6ZSgnVUEtOTY5OTI5NTMtMScpXG59XG5jb25zdCBsb2dQYWdlVmlldyA9ICgpID0+IHtcbiAgUmVhY3RHQS5zZXQoeyBwYWdlOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgfSlcbiAgUmVhY3RHQS5wYWdldmlldyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGxhbnRPbmU6IGZhbHNlLFxuICAgICAgcGxhbnRUd286IGZhbHNlXG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBpbml0R0EoKVxuICAgIGxvZ1BhZ2VWaWV3KClcbiAgfVxuICB0b2dnbGVPZmZpY2UgKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcGxhbnRPbmU6IHRydWUsXG4gICAgICBwbGFudFR3bzogdHJ1ZVxuICAgIH0pXG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGRhdGEgfSA9IEFQSVxuICAgIGNvbnNvbGUuaW5mbyhcIiVjIFdlJ3JlIHVzaW5nIE5leHQuanMgZm9yIHRoaXMgYmVjYXVzZSB3ZSBnb3QgYm9yZWRcIiwgJ2JhY2tncm91bmQ6ICMwMjE5OTM7IGNvbG9yOiAjZmZmJylcbiAgICBjb25zb2xlLmluZm8oXCIlYyBUaGUgY29kZSdzIHVwIG9uIG91ciBnaXQ6IGh0dHBzOi8vZ2l0aHViLmNvbS90aGUtY291Y2gvY291Y2gtc2l0ZVwiLCAnYmFja2dyb3VuZDogIzAyMTk5MzsgY29sb3I6ICNmZmYnKVxuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubWFpbiB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhY3Qge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhY3RfX2VtYWlsIHtcbiAgICAgICAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFjdF9fcm90YXRlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMzNweDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcm90YXRpbmcgOHMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgbGVmdDogMzBweDtcbiAgICAgICAgICAgIHRvcDogMzZweDtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDVlbSkge1xuICAgICAgICAgICAgLmNvbnRhY3Qge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgICAgcmlnaHQ6IDgwcHg7XG4gICAgICAgICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWN0X19yb3RhdGUge1xuICAgICAgICAgICAgICB3aWR0aDogMTY1cHg7XG4gICAgICAgICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWN0X19lbWFpbCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuYWRkcmVzcyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDcwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb290ZXIge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDgwZW0pIHtcbiAgICAgICAgICAgIC5mb290ZXIge1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb290ZXJfX3dyYXBwZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWluLWhlaWdodDogOTAwcHgpIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xuICAgICAgICAgICAgLmZvb3Rlcl9fd3JhcHBlciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTYwcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAa2V5ZnJhbWVzIHJvdGF0aW5nIHtcbiAgICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAxMDAlIHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHt0aGlzLnN0YXRlLnBsYW50T25lICYmICg8V2luZG93IGNsb3NlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtwbGFudE9uZTogZmFsc2V9KX0+PGltZyBzdHlsZT17e3dpZHRoOiAnMTAwJSd9fSBzcmM9Jy9zdGF0aWMvcGFsbS5wbmcnIC8+PC9XaW5kb3c+KX1cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5wbGFudFR3byAmJiAoPFdpbmRvdyBjbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7cGxhbnRUd286IGZhbHNlfSl9PjxpbWcgc3R5bGU9e3t3aWR0aDogJzEwMCUnfX0gc3JjPScvc3RhdGljL3BhcmFkaXNlLnBuZycgLz48L1dpbmRvdz4pfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyIG1haW4nPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdjb250ZW50Jz5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nY2Fwcyc+VGhlIENvdWNoIGlzIGEgc21hbGwgYnJvb2tseW4gYmFzZWQgZGlnaXRhbCBzdHVkaW8gdGhhdCBtYWtlcyB0aGluZ3MgZm9yIHRoZSBpbnRlcm5ldC48L2gxPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPScnPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3NtYWxsJz5XZSB3YW50IHRvIHdvcmsgd2l0aCB5b3UuPC9wPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdjb250YWN0IGpjYyBhaWMgZiBtaGEnPlxuICAgICAgICAgICAgICA8YSBocmVmPSdtYWlsdG86bWVldHVzQHRoZWNvdWNoLm55YycgY2xhc3NOYW1lPSdhYnMgejEgZmlsbC1hIGZpdC1hJyAvPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nY29udGFjdF9fcm90YXRlIGFicycgc3JjPScvc3RhdGljL3RleHQucG5nJyAvPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nY29udGFjdF9fZW1haWwnIHNyYz0nL3N0YXRpYy9FbWFpbC5wbmcnIC8+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl9fd3JhcHBlcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyIGNhcHMgZiBmdyBqY3MgZmlsbC14Jz5cbiAgICAgICAgICAgICAge2RhdGEubWFwKChwZXJzb24sIGkpID0+IChcbiAgICAgICAgICAgICAgICA8VGVhbSBrZXk9e2l9IHsuLi5wZXJzb259IC8+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWRkcmVzc19faW5mbyBmIGFpYyBqY2UgZmlsbC14Jz5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2FyIGNhcHMnPkF2YWlsYWJsZSBJUkwgQDxiciAvPjg3IFJpY2hhcmRzb24gU3QuIFN1aXRlIDZXPGJyIC8+QnJvb2tseW4sIE5ZIDExMjExPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB0aGlzLnRvZ2dsZU9mZmljZSgpfT5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nYWRkcmVzcyBweDEnIHNyYz0nL3N0YXRpYy9BZGRyZXNzLnBuZycgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
      }), _react2.default.createElement('div', {
        className: 'jsx-290849518',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }, this.state.plantOne && _react2.default.createElement(_window2.default, { close: function close() {
          return _this2.setState({ plantOne: false });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, _react2.default.createElement('img', { style: { width: '100%' }, src: '/static/palm.png', className: 'jsx-290849518',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      })), this.state.plantTwo && _react2.default.createElement(_window2.default, { close: function close() {
          return _this2.setState({ plantTwo: false });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, _react2.default.createElement('img', { style: { width: '100%' }, src: '/static/paradise.png', className: 'jsx-290849518',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-290849518' + ' ' + 'wrapper main',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, _react2.default.createElement('section', {
        className: 'jsx-290849518' + ' ' + 'content',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-290849518' + ' ' + 'caps',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, 'The Couch is a small brooklyn based digital studio that makes things for the internet.')), _react2.default.createElement('section', {
        className: 'jsx-290849518' + ' ' + '',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react2.default.createElement('p', {
        className: 'jsx-290849518' + ' ' + 'small',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, 'We want to work with you.')), _react2.default.createElement('section', {
        className: 'jsx-290849518' + ' ' + 'contact jcc aic f mha',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, _react2.default.createElement('a', { href: 'mailto:meetus@thecouch.nyc', className: 'jsx-290849518' + ' ' + 'abs z1 fill-a fit-a',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }), _react2.default.createElement('img', { src: '/static/text.png', className: 'jsx-290849518' + ' ' + 'contact__rotate abs',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }), _react2.default.createElement('img', { src: '/static/Email.png', className: 'jsx-290849518' + ' ' + 'contact__email',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }))), _react2.default.createElement('div', {
        className: 'jsx-290849518' + ' ' + 'footer__wrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-290849518' + ' ' + 'footer caps f fw jcs fill-x',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, data.map(function (person, i) {
        return _react2.default.createElement(_team2.default, (0, _extends3.default)({ key: i }, person, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          }
        }));
      })), _react2.default.createElement('div', {
        className: 'jsx-290849518' + ' ' + 'address__info f aic jce fill-x',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-290849518',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, _react2.default.createElement('p', {
        className: 'jsx-290849518' + ' ' + 'ar caps',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, 'Available IRL @', _react2.default.createElement('br', {
        className: 'jsx-290849518',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }), '87 Richardson St. Suite 6W', _react2.default.createElement('br', {
        className: 'jsx-290849518',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }), 'Brooklyn, NY 11211')), _react2.default.createElement('div', { onClick: function onClick() {
          return _this2.toggleOffice();
        }, className: 'jsx-290849518',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, _react2.default.createElement('img', { src: '/static/Address.png', className: 'jsx-290849518' + ' ' + 'address px1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }))))));
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkxheW91dCIsIkhlYWRlciIsIldpbmRvdyIsIlJlYWN0R0EiLCJUZWFtIiwiQVBJIiwiaW5pdEdBIiwiaW5pdGlhbGl6ZSIsImxvZ1BhZ2VWaWV3Iiwic2V0IiwicGFnZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJwYWdldmlldyIsInByb3BzIiwic3RhdGUiLCJwbGFudE9uZSIsInBsYW50VHdvIiwic2V0U3RhdGUiLCJkYXRhIiwiY29uc29sZSIsImluZm8iLCJ3aWR0aCIsIm1hcCIsInBlcnNvbiIsImkiLCJ0b2dnbGVPZmZpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTOzs7O0FBQ1QsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQU8sQUFBVTs7OztBQUVqQixBQUFPLEFBQVM7Ozs7Ozs7OztBQUVoQixJQUFNLFNBQVMsU0FBVCxBQUFTLFNBQU0sQUFDbkI7b0JBQUEsQUFBUSxXQUFSLEFBQW1CLEFBQ3BCO0FBRkQ7QUFHQSxJQUFNLGNBQWMsU0FBZCxBQUFjLGNBQU0sQUFDeEI7b0JBQUEsQUFBUSxJQUFJLEVBQUUsTUFBTSxPQUFBLEFBQU8sU0FBM0IsQUFBWSxBQUF3QixBQUNwQztvQkFBQSxBQUFRLFNBQVMsT0FBQSxBQUFPLFNBQXhCLEFBQWlDLEFBQ2xDO0FBSEQ7OztrQ0FNRTs7a0JBQUEsQUFBYSxPQUFPO3dDQUFBOztzSUFBQSxBQUNaLEFBRU47O1VBQUEsQUFBSztnQkFBUSxBQUNELEFBQ1Y7Z0JBTGdCLEFBR2xCLEFBQWEsQUFFRDtBQUZDLEFBQ1g7V0FHSDs7Ozs7d0NBQ29CLEFBQ25CO0FBQ0E7QUFDRDs7OzttQ0FDZSxBQUNkO1dBQUEsQUFBSztrQkFBUyxBQUNGLEFBQ1Y7a0JBRkYsQUFBYyxBQUVGLEFBRWI7QUFKZSxBQUNaOzs7OzZCQUlNO21CQUFBOztVQUFBLEFBQ0EsT0FEQSxBQUNTLGVBRFQsQUFDQSxBQUNSOztjQUFBLEFBQVEsS0FBUixBQUFhLHdEQUFiLEFBQXFFLEFBQ3JFO2NBQUEsQUFBUSxLQUFSLEFBQWEsd0VBQWIsQUFBcUYsQUFDckY7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFERixBQUNFO0FBQUE7QUFBQTtpQkFERjthQUFBLEFBd0VFO0FBeEVGLDBCQXdFRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxjQUNHLEFBQUssTUFBTCxBQUFXLDRCQUFhLEFBQUMsa0NBQU8sT0FBTyxpQkFBQTtpQkFBTSxPQUFBLEFBQUssU0FBUyxFQUFDLFVBQXJCLEFBQU0sQUFBYyxBQUFXO0FBQTlDO29CQUFBO3NCQUFBLEFBQXVEO0FBQXZEO09BQUEseUNBQTRELE9BQU8sRUFBQyxPQUFiLEFBQVksQUFBUSxVQUFTLEtBQTdCLEFBQWlDLCtCQUFqQzs7b0JBQUE7c0JBRGxGLEFBQzJCLEFBQXVELEFBQy9FO0FBRCtFO2dCQUMvRSxBQUFLLE1BQUwsQUFBVyw0QkFBYSxBQUFDLGtDQUFPLE9BQU8saUJBQUE7aUJBQU0sT0FBQSxBQUFLLFNBQVMsRUFBQyxVQUFyQixBQUFNLEFBQWMsQUFBVztBQUE5QztvQkFBQTtzQkFBQSxBQUF1RDtBQUF2RDtPQUFBLHlDQUE0RCxPQUFPLEVBQUMsT0FBYixBQUFZLEFBQVEsVUFBUyxLQUE3QixBQUFpQyxtQ0FBakM7O29CQUFBO3NCQUZsRixBQUUyQixBQUF1RCxBQUNoRjtBQURnRjsyQkFDaEYsY0FBQTsyQ0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzJDQUFBLEFBQW1COztvQkFBbkI7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTsyQ0FBQSxBQUFjOztvQkFBZDtzQkFBQTtBQUFBO0FBQUEsU0FGSixBQUNFLEFBQ0UsQUFFRiw0R0FBQSxjQUFBOzJDQUFBLEFBQW1COztvQkFBbkI7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTsyQ0FBQSxBQUFhOztvQkFBYjtzQkFBQTtBQUFBO0FBQUEsU0FMSixBQUlFLEFBQ0UsQUFFRiwrQ0FBQSxjQUFBOzJDQUFBLEFBQW1COztvQkFBbkI7c0JBQUEsQUFDRTtBQURGO0FBQUEsOENBQ0ssTUFBSCxBQUFRLGlFQUFSLEFBQStDOztvQkFBL0M7c0JBREYsQUFDRSxBQUNBO0FBREE7aURBQ3FDLEtBQXJDLEFBQXlDLHVEQUF6QyxBQUFlOztvQkFBZjtzQkFGRixBQUVFLEFBQ0E7QUFEQTtpREFDZ0MsS0FBaEMsQUFBb0Msd0RBQXBDLEFBQWU7O29CQUFmO3NCQWJOLEFBR0UsQUFPRSxBQUdFLEFBR0o7QUFISTs0QkFHSixjQUFBOzJDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7MkNBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRztBQURIO0FBQUEsY0FDRyxBQUFLLElBQUksVUFBQSxBQUFDLFFBQUQsQUFBUyxHQUFUOytCQUNSLEFBQUMsdURBQUssS0FBTixBQUFXLEtBQVgsQUFBa0I7O3NCQUFsQjt3QkFEUSxBQUNSO0FBQUE7QUFBQSxVQUFBO0FBSE4sQUFDRSxBQUNHLEFBSUgsMkJBQUEsY0FBQTsyQ0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzJDQUFBLEFBQWE7O29CQUFiO3NCQUFBO0FBQUE7QUFBQSxTQUFzQzttQkFBQTs7b0JBQUE7c0JBQXRDLEFBQXNDO0FBQUE7QUFBQSxVQUFnQzttQkFBQTs7b0JBQUE7c0JBQXRFLEFBQXNFO0FBQUE7QUFBQSxVQUYxRSxBQUNFLEFBQ0UsQUFFRix3Q0FBQSxjQUFBLFNBQUssU0FBUyxtQkFBQTtpQkFBTSxPQUFOLEFBQU0sQUFBSztBQUF6QixzQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO2dEQUMrQixLQUE3QixBQUFpQywwREFBakMsQUFBZTs7b0JBQWY7c0JBcEdaLEFBQ0UsQUF3RUUsQUFnQkUsQUFNRSxBQUlFLEFBQ0UsQUFPYjtBQVBhOzs7Ozs7QUEzSGEsQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2V2aW5ncmVlbi9TaXRlcy9jb3VjaC1zaXRlIn0=