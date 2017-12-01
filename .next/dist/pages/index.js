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
    key: 'audio',
    value: function audio(playing) {
      var audio = document.getElementById('Audio');
      playing ? audio.play() : audio.pause();
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
          lineNumber: 31
        }
      }, _react2.default.createElement(_header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '1757983749',
        css: '.main.jsx-1757983749{padding-top:10px;}.contact.jsx-1757983749{position:relative;width:200px;height:200px;}.contact__email.jsx-1757983749{width:28px;}.contact__rotate.jsx-1757983749{width:133px;-webkit-animation:rotating-jsx-1757983749 8s linear infinite;animation:rotating-jsx-1757983749 8s linear infinite;left:30px;top:36px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}@media (min-width:45em){.contact.jsx-1757983749{position:fixed;width:200px;height:200px;right:80px;top:20px;}.contact__rotate.jsx-1757983749{width:165px;top:20px;left:20px;}.contact__email.jsx-1757983749{width:32px;}}.address.jsx-1757983749{max-width:40px;}.footer.jsx-1757983749{padding-top:40px;padding-bottom:50px;}@media (min-width:80em){.footer.jsx-1757983749{max-width:800px;width:100%;}.footer__wrapper.jsx-1757983749{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}}@media (min-height:900px) and (min-width:700px){.footer__wrapper.jsx-1757983749{position:fixed;bottom:40px;width:calc(100% - 160px);}}@-webkit-keyframes rotating-jsx-1757983749{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes rotating-jsx-1757983749{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}.period.jsx-1757983749{max-width:8px;}.period.jsx-1757983749:hover{-webkit-animation:rotating-jsx-1757983749 0.5s linear infinite;animation:rotating-jsx-1757983749 0.5s linear infinite;}@media (min-width:40em){.period.jsx-1757983749{max-width:14px;}}@media (min-width:60em){.period.jsx-1757983749{max-width:18px;}}@media (min-width:80em){.period.jsx-1757983749{max-width:22px;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdDb0IsQUFHOEIsQUFHQyxBQUtQLEFBR0MsQUFRSyxBQU9ILEFBS0QsQUFJRSxBQUdFLEFBS0MsQUFJSCxBQU9FLEFBT1EsQUFHRSxBQUliLEFBRzBCLEFBSXZCLEFBS0EsQUFLQSxXQTVFbkIsQUF1QkUsQ0FwQnNDLEFBZTNCLEVBMENiLENBakRnQixBQWdCaEIsQUFtQmdCLEFBcUJkLEFBS0EsQUFLQSxDQTFDYSxDQTNDZixBQXNDc0IsQ0FuQ1IsR0F3QkEsTUFQRyxBQXdCZixBQVcyQixHQW5EZCxDQXdCYixNQVdGLEdBbEJlLEdBaEJmLFFBaUJhLENBa0NYLFFBakNBLGNBd0JxQixPQWNyQixNQUdBLCtCQU9GLFFBM0RZLFVBQ0QsU0FDdUIsc0JBa0NBLG1GQWpDbEMsZ0NBa0NFIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rZXZpbmdyZWVuL1NpdGVzL2NvdWNoLXNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IFJlYWN0R0EgZnJvbSAncmVhY3QtZ2EnXG5pbXBvcnQgVGVhbSBmcm9tICcuLi9jb21wb25lbnRzL3RlYW0nXG5cbmltcG9ydCBBUEkgZnJvbSAnLi4vYXBpL3RlYW0nXG5cbmNvbnN0IGluaXRHQSA9ICgpID0+IHtcbiAgUmVhY3RHQS5pbml0aWFsaXplKCdVQS05Njk5Mjk1My0xJylcbn1cbmNvbnN0IGxvZ1BhZ2VWaWV3ID0gKCkgPT4ge1xuICBSZWFjdEdBLnNldCh7IHBhZ2U6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSB9KVxuICBSZWFjdEdBLnBhZ2V2aWV3KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgaW5pdEdBKClcbiAgICBsb2dQYWdlVmlldygpXG4gIH1cbiAgYXVkaW8gKHBsYXlpbmcpIHtcbiAgICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBdWRpbycpXG4gICAgcGxheWluZyA/IGF1ZGlvLnBsYXkoKSA6IGF1ZGlvLnBhdXNlKClcbiAgfVxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gQVBJXG4gICAgY29uc29sZS5pbmZvKFwiJWMgV2UncmUgdXNpbmcgTmV4dC5qcyBmb3IgdGhpcyBiZWNhdXNlIHdlIGdvdCBib3JlZFwiLCAnYmFja2dyb3VuZDogIzAyMTk5MzsgY29sb3I6ICNmZmYnKVxuICAgIGNvbnNvbGUuaW5mbyhcIiVjIFRoZSBjb2RlJ3MgdXAgb24gb3VyIGdpdDogaHR0cHM6Ly9naXRodWIuY29tL3RoZS1jb3VjaC9jb3VjaC1zaXRlXCIsICdiYWNrZ3JvdW5kOiAjMDIxOTkzOyBjb2xvcjogI2ZmZicpXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5tYWluIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFjdCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFjdF9fZW1haWwge1xuICAgICAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250YWN0X19yb3RhdGUge1xuICAgICAgICAgICAgd2lkdGg6IDEzM3B4O1xuICAgICAgICAgICAgYW5pbWF0aW9uOiByb3RhdGluZyA4cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgICBsZWZ0OiAzMHB4O1xuICAgICAgICAgICAgdG9wOiAzNnB4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0NWVtKSB7XG4gICAgICAgICAgICAuY29udGFjdCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICByaWdodDogODBweDtcbiAgICAgICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhY3RfX3JvdGF0ZSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxNjVweDtcbiAgICAgICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhY3RfX2VtYWlsIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hZGRyZXNzIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogNDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogODBlbSkge1xuICAgICAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvb3Rlcl9fd3JhcHBlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtaW4taGVpZ2h0OiA5MDBweCkgYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICAgICAgICAgICAuZm9vdGVyX193cmFwcGVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICBib3R0b206IDQwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNjBweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBrZXlmcmFtZXMgcm90YXRpbmcge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAucGVyaW9kIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucGVyaW9kOmhvdmVyIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcm90YXRpbmcgMC41cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0MGVtKSB7XG4gICAgICAgICAgICAucGVyaW9kIHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjBlbSkge1xuICAgICAgICAgICAgLnBlcmlvZCB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDgwZW0pIHtcbiAgICAgICAgICAgIC5wZXJpb2Qge1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd3JhcHBlciBtYWluJz5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nY29udGVudCc+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2NhcHMnPlRoZSBDb3VjaCBpcyBhIHNtYWxsIGJyb29rbHluIGJhc2VkIGRpZ2l0YWwgc3R1ZGlvIHRoYXQgbWFrZXMgdGhpbmdzIGZvciB0aGUgaW50ZXJuZXRcbiAgICAgICAgICAgICAgPGltZyBvbk1vdXNlT3Zlcj17KCkgPT4gdGhpcy5hdWRpbyh0cnVlKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiB0aGlzLmF1ZGlvKGZhbHNlKX0gY2xhc3NOYW1lPSdwZXJpb2QnIHNyYz0nL3N0YXRpYy9DRC5wbmcnIC8+PC9oMT5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxhdWRpbyBpZD0nQXVkaW8nIHNyYz0nL3N0YXRpYy84X2JpdC5tcDMnIC8+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nc21hbGwnPldlIHdhbnQgdG8gd29yayB3aXRoIHlvdS48L3A+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRhY3QgamNjIGFpYyBmIG1oYSc+XG4gICAgICAgICAgICAgIDxhIGhyZWY9J21haWx0bzptZWV0dXNAdGhlY291Y2gubnljJyBjbGFzc05hbWU9J2FicyB6MSBmaWxsLWEgZml0LWEnIC8+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdjb250YWN0X19yb3RhdGUgYWJzJyBzcmM9Jy9zdGF0aWMvdGV4dC5wbmcnIC8+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdjb250YWN0X19lbWFpbCcgc3JjPScvc3RhdGljL0VtYWlsLnBuZycgLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX193cmFwcGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXIgY2FwcyBmIGZ3IGpjcyBmaWxsLXgnPlxuICAgICAgICAgICAgICB7ZGF0YS5tYXAoKHBlcnNvbiwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxUZWFtIGtleT17aX0gey4uLnBlcnNvbn0gLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhZGRyZXNzX19pbmZvIGYgYWljIGpjZSBmaWxsLXgnPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYXIgY2Fwcyc+QXZhaWxhYmxlIElSTCBAPGJyIC8+ODcgUmljaGFyZHNvbiBTdC4gU3VpdGUgNlc8YnIgLz5Ccm9va2x5biwgTlkgMTEyMTE8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdhZGRyZXNzIHB4MScgc3JjPScvc3RhdGljL0FkZHJlc3MucG5nJyAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
      }), _react2.default.createElement('div', {
        className: 'jsx-1757983749',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-1757983749' + ' ' + 'wrapper main',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, _react2.default.createElement('section', {
        className: 'jsx-1757983749' + ' ' + 'content',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-1757983749' + ' ' + 'caps',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, 'The Couch is a small brooklyn based digital studio that makes things for the internet', _react2.default.createElement('img', { onMouseOver: function onMouseOver() {
          return _this2.audio(true);
        }, onMouseLeave: function onMouseLeave() {
          return _this2.audio(false);
        }, src: '/static/CD.png', className: 'jsx-1757983749' + ' ' + 'period',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }))), _react2.default.createElement('audio', { id: 'Audio', src: '/static/8_bit.mp3', className: 'jsx-1757983749',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }), _react2.default.createElement('section', {
        className: 'jsx-1757983749' + ' ' + '',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, _react2.default.createElement('p', {
        className: 'jsx-1757983749' + ' ' + 'small',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, 'We want to work with you.')), _react2.default.createElement('section', {
        className: 'jsx-1757983749' + ' ' + 'contact jcc aic f mha',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, _react2.default.createElement('a', { href: 'mailto:meetus@thecouch.nyc', className: 'jsx-1757983749' + ' ' + 'abs z1 fill-a fit-a',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }), _react2.default.createElement('img', { src: '/static/text.png', className: 'jsx-1757983749' + ' ' + 'contact__rotate abs',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }), _react2.default.createElement('img', { src: '/static/Email.png', className: 'jsx-1757983749' + ' ' + 'contact__email',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }))), _react2.default.createElement('div', {
        className: 'jsx-1757983749' + ' ' + 'footer__wrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-1757983749' + ' ' + 'footer caps f fw jcs fill-x',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, data.map(function (person, i) {
        return _react2.default.createElement(_team2.default, (0, _extends3.default)({ key: i }, person, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 143
          }
        }));
      })), _react2.default.createElement('div', {
        className: 'jsx-1757983749' + ' ' + 'address__info f aic jce fill-x',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-1757983749',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, _react2.default.createElement('p', {
        className: 'jsx-1757983749' + ' ' + 'ar caps',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, 'Available IRL @', _react2.default.createElement('br', {
        className: 'jsx-1757983749',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }), '87 Richardson St. Suite 6W', _react2.default.createElement('br', {
        className: 'jsx-1757983749',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }), 'Brooklyn, NY 11211')), _react2.default.createElement('div', {
        className: 'jsx-1757983749',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, _react2.default.createElement('img', { src: '/static/Address.png', className: 'jsx-1757983749' + ' ' + 'address px1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }))))));
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkxheW91dCIsIkhlYWRlciIsIlJlYWN0R0EiLCJUZWFtIiwiQVBJIiwiaW5pdEdBIiwiaW5pdGlhbGl6ZSIsImxvZ1BhZ2VWaWV3Iiwic2V0IiwicGFnZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJwYWdldmlldyIsInBsYXlpbmciLCJhdWRpbyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwbGF5IiwicGF1c2UiLCJkYXRhIiwiY29uc29sZSIsImluZm8iLCJtYXAiLCJwZXJzb24iLCJpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7OztBQUNULEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQU8sQUFBVTs7OztBQUVqQixBQUFPLEFBQVM7Ozs7Ozs7OztBQUVoQixJQUFNLFNBQVMsU0FBVCxBQUFTLFNBQU0sQUFDbkI7b0JBQUEsQUFBUSxXQUFSLEFBQW1CLEFBQ3BCO0FBRkQ7QUFHQSxJQUFNLGNBQWMsU0FBZCxBQUFjLGNBQU0sQUFDeEI7b0JBQUEsQUFBUSxJQUFJLEVBQUUsTUFBTSxPQUFBLEFBQU8sU0FBM0IsQUFBWSxBQUF3QixBQUNwQztvQkFBQSxBQUFRLFNBQVMsT0FBQSxBQUFPLFNBQXhCLEFBQWlDLEFBQ2xDO0FBSEQ7Ozs7Ozs7Ozs7Ozs7d0NBTXVCLEFBQ25CO0FBQ0E7QUFDRDs7OzswQixBQUNNLFNBQVMsQUFDZDtVQUFNLFFBQVEsU0FBQSxBQUFTLGVBQXZCLEFBQWMsQUFBd0IsQUFDdEM7Z0JBQVUsTUFBVixBQUFVLEFBQU0sU0FBUyxNQUF6QixBQUF5QixBQUFNLEFBQ2hDOzs7OzZCQUNTO21CQUFBOztVQUFBLEFBQ0EsT0FEQSxBQUNTLGVBRFQsQUFDQSxBQUNSOztjQUFBLEFBQVEsS0FBUixBQUFhLHdEQUFiLEFBQXFFLEFBQ3JFO2NBQUEsQUFBUSxLQUFSLEFBQWEsd0VBQWIsQUFBcUYsQUFDckY7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFERixBQUNFO0FBQUE7QUFBQTtpQkFERjthQUFBLEFBNkZFO0FBN0ZGLDBCQTZGRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBbUI7O29CQUFuQjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWM7O29CQUFkO3NCQUFBO0FBQUE7QUFBQSxTQUNBLGdJQUFLLGFBQWEsdUJBQUE7aUJBQU0sT0FBQSxBQUFLLE1BQVgsQUFBTSxBQUFXO0FBQW5DLFdBQTBDLGNBQWMsd0JBQUE7aUJBQU0sT0FBQSxBQUFLLE1BQVgsQUFBTSxBQUFXO0FBQXpFLFdBQW9HLEtBQXBHLEFBQXdHLHNEQUF4RyxBQUEyRjs7b0JBQTNGO3NCQUhKLEFBQ0UsQUFDRSxBQUNBLEFBRUY7QUFGRTtxREFFSyxJQUFQLEFBQVUsU0FBUSxLQUFsQixBQUFzQixnQ0FBdEI7O29CQUFBO3NCQUxGLEFBS0UsQUFDQTtBQURBOzBCQUNBLGNBQUE7NENBQUEsQUFBbUI7O29CQUFuQjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWE7O29CQUFiO3NCQUFBO0FBQUE7QUFBQSxTQVBKLEFBTUUsQUFDRSxBQUVGLCtDQUFBLGNBQUE7NENBQUEsQUFBbUI7O29CQUFuQjtzQkFBQSxBQUNFO0FBREY7QUFBQSw4Q0FDSyxNQUFILEFBQVEsa0VBQVIsQUFBK0M7O29CQUEvQztzQkFERixBQUNFLEFBQ0E7QUFEQTtpREFDcUMsS0FBckMsQUFBeUMsd0RBQXpDLEFBQWU7O29CQUFmO3NCQUZGLEFBRUUsQUFDQTtBQURBO2lEQUNnQyxLQUFoQyxBQUFvQyx5REFBcEMsQUFBZTs7b0JBQWY7c0JBYk4sQUFDRSxBQVNFLEFBR0UsQUFHSjtBQUhJOzRCQUdKLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNHO0FBREg7QUFBQSxjQUNHLEFBQUssSUFBSSxVQUFBLEFBQUMsUUFBRCxBQUFTLEdBQVQ7K0JBQ1IsQUFBQyx1REFBSyxLQUFOLEFBQVcsS0FBWCxBQUFrQjs7c0JBQWxCO3dCQURRLEFBQ1I7QUFBQTtBQUFBLFVBQUE7QUFITixBQUNFLEFBQ0csQUFJSCwyQkFBQSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBYTs7b0JBQWI7c0JBQUE7QUFBQTtBQUFBLFNBQXNDO21CQUFBOztvQkFBQTtzQkFBdEMsQUFBc0M7QUFBQTtBQUFBLFVBQWdDO21CQUFBOztvQkFBQTtzQkFBdEUsQUFBc0U7QUFBQTtBQUFBLFVBRjFFLEFBQ0UsQUFDRSxBQUVGLHdDQUFBLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLGdEQUMrQixLQUE3QixBQUFpQywyREFBakMsQUFBZTs7b0JBQWY7c0JBekhaLEFBQ0UsQUE2RkUsQUFnQkUsQUFNRSxBQUlFLEFBQ0UsQUFPYjtBQVBhOzs7Ozs7QUF0SWEsQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2V2aW5ncmVlbi9TaXRlcy9jb3VjaC1zaXRlIn0=