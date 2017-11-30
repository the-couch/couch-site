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
        styleId: '2942891144',
        css: '.main.jsx-2942891144{padding-top:10px;}.contact.jsx-2942891144{position:relative;width:200px;height:200px;padding-top:40px;}.contact__rotate.jsx-2942891144{width:133px;-webkit-animation:rotating-jsx-2942891144 8s linear infinite;animation:rotating-jsx-2942891144 8s linear infinite;}@media (min-width:45em){.contact.jsx-2942891144{position:fixed;right:80px;top:0px;}}.contact__email.jsx-2942891144{width:28px;}.address.jsx-2942891144{max-width:40px;}.footer.jsx-2942891144{padding-top:40px;padding-bottom:50px;}.footer__ppl.jsx-2942891144{width:50%;padding-bottom:20px;}.footer__img.jsx-2942891144{min-height:30px;}@media (min-width:30em){.footer__ppl.jsx-2942891144{width:33%;}}@media (min-width:50em){.footer__ppl.jsx-2942891144{width:20%;}}@media (min-width:80em){.footer.jsx-2942891144{max-width:800px;width:100%;}.footer__ppl.jsx-2942891144{padding-bottom:0;}.footer__wrapper.jsx-2942891144{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}}@media (min-height:900px){.footer__wrapper.jsx-2942891144{position:fixed;bottom:40px;width:calc(100% - 160px);}}.footer__ppl.jsx-2942891144 img.jsx-2942891144{max-width:23px;padding-bottom:0px;}@-webkit-keyframes rotating-jsx-2942891144{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes rotating-jsx-2942891144{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCb0IsQUFHOEIsQUFHQyxBQU1OLEFBS0ssQUFNTixBQUdJLEFBR0UsQUFJUCxBQUlNLEFBSUosQUFLQSxBQUtNLEFBSUMsQUFHSixBQU9FLEFBTUYsQUFLVSxBQUdFLFVBN0NQLEFBUXBCLEFBS0EsQ0F2QkYsQ0FYd0MsR0FLekIsQUFTZixBQXVDZ0IsQUFNSyxDQWxDckIsQUFjZSxDQWhEZixBQTBCc0IsQUEwQnBCLENBakRZLFFBWUYsQ0FrQ1YsQUFjMkIsR0EzRGQsQUEyQmYsSUFmRSxBQXFERixHQTFDQSxNQXRCbUIsU0EyRGpCLFFBMURGLGNBaUR1QixPQWtCckIsTUFHQSx1Q0FsRUYseUNBOENrQyxtSEFDaEMiLCJmaWxlIjoicGFnZXMvaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2tldmluZ3JlZW4vU2l0ZXMvY291Y2gtc2l0ZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInXG5pbXBvcnQgUmVhY3RHQSBmcm9tICdyZWFjdC1nYSdcblxuY29uc3QgaW5pdEdBID0gKCkgPT4ge1xuICBSZWFjdEdBLmluaXRpYWxpemUoJ1VBLTk2OTkyOTUzLTEnKVxufVxuY29uc3QgbG9nUGFnZVZpZXcgPSAoKSA9PiB7XG4gIFJlYWN0R0Euc2V0KHsgcGFnZTogd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lIH0pXG4gIFJlYWN0R0EucGFnZXZpZXcod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBpbml0R0EoKVxuICAgIGxvZ1BhZ2VWaWV3KClcbiAgfVxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8TGF5b3V0PlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICAubWFpbiB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhY3Qge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFjdF9fcm90YXRlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMzNweDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcm90YXRpbmcgOHMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNDVlbSkge1xuICAgICAgICAgICAgLmNvbnRhY3Qge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIHJpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhY3RfX2VtYWlsIHtcbiAgICAgICAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuYWRkcmVzcyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb290ZXIge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvb3Rlcl9fcHBsIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvb3Rlcl9faW1nIHtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAzMGVtKSB7XG4gICAgICAgICAgICAuZm9vdGVyX19wcGwge1xuICAgICAgICAgICAgICB3aWR0aDogMzMlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTBlbSkge1xuICAgICAgICAgICAgLmZvb3Rlcl9fcHBsIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDgwZW0pIHtcbiAgICAgICAgICAgIC5mb290ZXIge1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb290ZXJfX3BwbCB7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvb3Rlcl9fd3JhcHBlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtaW4taGVpZ2h0OiA5MDBweCkge1xuICAgICAgICAgICAgLmZvb3Rlcl9fd3JhcHBlciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTYwcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9vdGVyX19wcGwgaW1nIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjNweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBrZXlmcmFtZXMgcm90YXRpbmcge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dyYXBwZXIgbWFpbic+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRlbnQnPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdjYXBzJz5UaGUgQ291Y2ggaXMgYSBzbWFsbCBicm9va2x5biBiYXNlZCBkaWdpdGFsIHN0dWRpbyB0aGF0IG1ha2VzIHRoaW5ncyBmb3IgdGhlIGludGVybmV0LjwvaDE+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3B0Mic+XG4gICAgICAgICAgICAgIDxwPldlIHdhbnQgdG8gd29yayB3aXRoIHlvdS48L3A+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRhY3QgamNjIGFpYyBmIG1oYSc+XG4gICAgICAgICAgICAgIDxhIGhyZWY9J21haWx0bzptZWV0dXNAdGhlY291Y2gubnljJyBjbGFzc05hbWU9J2FicyB6MSBmaWxsLWEgZml0LWEnIC8+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdjb250YWN0X19yb3RhdGUgYWJzJyBzcmM9Jy9zdGF0aWMvaWNvbi90ZXh0LnBuZycgLz5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2NvbnRhY3RfX2VtYWlsJyBzcmM9Jy9zdGF0aWMvaWNvbi9FbWFpbC5wbmcnIC8+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl9fd3JhcHBlcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyIGNhcHMgZiBmdyBqY3MgZmlsbC14Jz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl9fcHBsJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX19pbWcnPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9zdGF0aWMvaWNvbi9LZXZpbi5wbmcnIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cDovL2Rpc3RyaWN0ZG9tYWluLmNvbScgdGFyZ2V0PSdfYmxhbmsnPktldmluIEdyZWVuPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl9fcHBsJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX19pbWcnPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9zdGF0aWMvaWNvbi9TYW0ucG5nJyAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHA6Ly9zYW0tZmF1bGtuZXIuY29tJyB0YXJnZXQ9J19ibGFuayc+U2FtIEZhdWxrbmVyPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl9fcHBsJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX19pbWcnPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9zdGF0aWMvaWNvbi9jb3N0YS5wbmcnIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cDovL3pldXNsaXZlcy5jb20nIHRhcmdldD0nX2JsYW5rJz5Db3N0YSBEYW1hc2tvczwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfX3BwbCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl9faW1nJz5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvc3RhdGljL2ljb24vYWJieS5wbmcnIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1NdzF0Ti16ZlI5YycgdGFyZ2V0PSdfYmxhbmsnPkFiYnkgTXVpcjwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfX3BwbCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl9faW1nJz5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvc3RhdGljL2ljb24vZXJpYy5wbmcnIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cDovL2VzdHJhdHRvbmJhaWxleS5jb20vJz5FcmljIEJhaWxleTwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhZGRyZXNzX19pbmZvIGYgYWljIGpjZSBmaWxsLXgnPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYXIgY2Fwcyc+QXZhaWxhYmxlIElSTCBAPGJyIC8+ODcgUmljaGFyZHNvbiBTdC4gU3VpdGUgNlcsPGJyIC8+QnJvb2tseW4sIE5ZIDExMjExPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nYWRkcmVzcyBweDEnIHNyYz0nL3N0YXRpYy9pY29uL0FkZHJlc3MucG5nJyAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
      }), _react2.default.createElement('div', {
        className: 'jsx-2942891144',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2942891144' + ' ' + 'wrapper main',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        }
      }, _react2.default.createElement('section', {
        className: 'jsx-2942891144' + ' ' + 'content',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-2942891144' + ' ' + 'caps',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        }
      }, 'The Couch is a small brooklyn based digital studio that makes things for the internet.')), _react2.default.createElement('section', {
        className: 'jsx-2942891144' + ' ' + 'pt2',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, _react2.default.createElement('p', {
        className: 'jsx-2942891144',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, 'We want to work with you.')), _react2.default.createElement('section', {
        className: 'jsx-2942891144' + ' ' + 'contact jcc aic f mha',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, _react2.default.createElement('a', { href: 'mailto:meetus@thecouch.nyc', className: 'jsx-2942891144' + ' ' + 'abs z1 fill-a fit-a',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        }
      }), _react2.default.createElement('img', { src: '/static/icon/text.png', className: 'jsx-2942891144' + ' ' + 'contact__rotate abs',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }), _react2.default.createElement('img', { src: '/static/icon/Email.png', className: 'jsx-2942891144' + ' ' + 'contact__email',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }))), _react2.default.createElement('div', {
        className: 'jsx-2942891144' + ' ' + 'footer__wrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2942891144' + ' ' + 'footer caps f fw jcs fill-x',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2942891144' + ' ' + 'footer__ppl',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2942891144' + ' ' + 'footer__img',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, _react2.default.createElement('img', { src: '/static/icon/Kevin.png', className: 'jsx-2942891144',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      })), _react2.default.createElement('a', { href: 'http://districtdomain.com', target: '_blank', className: 'jsx-2942891144',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, 'Kevin Green')), _react2.default.createElement('div', {
        className: 'jsx-2942891144' + ' ' + 'footer__ppl',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2942891144' + ' ' + 'footer__img',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }, _react2.default.createElement('img', { src: '/static/icon/Sam.png', className: 'jsx-2942891144',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      })), _react2.default.createElement('a', { href: 'http://sam-faulkner.com', target: '_blank', className: 'jsx-2942891144',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, 'Sam Faulkner')), _react2.default.createElement('div', {
        className: 'jsx-2942891144' + ' ' + 'footer__ppl',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2942891144' + ' ' + 'footer__img',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, _react2.default.createElement('img', { src: '/static/icon/costa.png', className: 'jsx-2942891144',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      })), _react2.default.createElement('a', { href: 'http://zeuslives.com', target: '_blank', className: 'jsx-2942891144',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, 'Costa Damaskos')), _react2.default.createElement('div', {
        className: 'jsx-2942891144' + ' ' + 'footer__ppl',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2942891144' + ' ' + 'footer__img',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, _react2.default.createElement('img', { src: '/static/icon/abby.png', className: 'jsx-2942891144',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      })), _react2.default.createElement('a', { href: 'https://www.youtube.com/watch?v=Mw1tN-zfR9c', target: '_blank', className: 'jsx-2942891144',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, 'Abby Muir')), _react2.default.createElement('div', {
        className: 'jsx-2942891144' + ' ' + 'footer__ppl',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2942891144' + ' ' + 'footer__img',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, _react2.default.createElement('img', { src: '/static/icon/eric.png', className: 'jsx-2942891144',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      })), _react2.default.createElement('a', { href: 'http://estrattonbailey.com/', className: 'jsx-2942891144',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, 'Eric Bailey'))), _react2.default.createElement('div', {
        className: 'jsx-2942891144' + ' ' + 'address__info f aic jce fill-x',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2942891144',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, _react2.default.createElement('p', {
        className: 'jsx-2942891144' + ' ' + 'ar caps',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, 'Available IRL @', _react2.default.createElement('br', {
        className: 'jsx-2942891144',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }), '87 Richardson St. Suite 6W,', _react2.default.createElement('br', {
        className: 'jsx-2942891144',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }), 'Brooklyn, NY 11211')), _react2.default.createElement('div', {
        className: 'jsx-2942891144',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, _react2.default.createElement('img', { src: '/static/icon/Address.png', className: 'jsx-2942891144' + ' ' + 'address px1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }))))));
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkxheW91dCIsIkhlYWRlciIsIlJlYWN0R0EiLCJpbml0R0EiLCJpbml0aWFsaXplIiwibG9nUGFnZVZpZXciLCJzZXQiLCJwYWdlIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInBhZ2V2aWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTOzs7O0FBQ1QsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLFNBQVMsU0FBVCxBQUFTLFNBQU0sQUFDbkI7b0JBQUEsQUFBUSxXQUFSLEFBQW1CLEFBQ3BCO0FBRkQ7QUFHQSxJQUFNLGNBQWMsU0FBZCxBQUFjLGNBQU0sQUFDeEI7b0JBQUEsQUFBUSxJQUFJLEVBQUUsTUFBTSxPQUFBLEFBQU8sU0FBM0IsQUFBWSxBQUF3QixBQUNwQztvQkFBQSxBQUFRLFNBQVMsT0FBQSxBQUFPLFNBQXhCLEFBQWlDLEFBQ2xDO0FBSEQ7Ozs7Ozs7Ozs7Ozs7d0NBTXVCLEFBQ25CO0FBQ0E7QUFDRDs7Ozs2QkFDUyxBQUNSOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBREYsQUFDRTtBQUFBO0FBQUE7aUJBREY7YUFBQSxBQW9GRTtBQXBGRiwwQkFvRkUsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQW1COztvQkFBbkI7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFjOztvQkFBZDtzQkFBQTtBQUFBO0FBQUEsU0FGSixBQUNFLEFBQ0UsQUFFRiw0R0FBQSxjQUFBOzRDQUFBLEFBQW1COztvQkFBbkI7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBTEosQUFJRSxBQUNFLEFBRUYsK0NBQUEsY0FBQTs0Q0FBQSxBQUFtQjs7b0JBQW5CO3NCQUFBLEFBQ0U7QUFERjtBQUFBLDhDQUNLLE1BQUgsQUFBUSxrRUFBUixBQUErQzs7b0JBQS9DO3NCQURGLEFBQ0UsQUFDQTtBQURBO2lEQUNxQyxLQUFyQyxBQUF5Qyw2REFBekMsQUFBZTs7b0JBQWY7c0JBRkYsQUFFRSxBQUNBO0FBREE7aURBQ2dDLEtBQWhDLEFBQW9DLDhEQUFwQyxBQUFlOztvQkFBZjtzQkFYTixBQUNFLEFBT0UsQUFHRSxBQUdKO0FBSEk7NEJBR0osY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSxnREFDTyxLQUFMLEFBQVMscUNBQVQ7O29CQUFBO3NCQUZKLEFBQ0UsQUFDRSxBQUVGO0FBRkU7MkJBRUYsY0FBQSxPQUFHLE1BQUgsQUFBUSw2QkFBNEIsUUFBcEMsQUFBMkMscUJBQTNDOztvQkFBQTtzQkFBQTtBQUFBO1NBTEosQUFDRSxBQUlFLEFBRUYsaUNBQUEsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLGdEQUNPLEtBQUwsQUFBUyxtQ0FBVDs7b0JBQUE7c0JBRkosQUFDRSxBQUNFLEFBRUY7QUFGRTsyQkFFRixjQUFBLE9BQUcsTUFBSCxBQUFRLDJCQUEwQixRQUFsQyxBQUF5QyxxQkFBekM7O29CQUFBO3NCQUFBO0FBQUE7U0FYSixBQU9FLEFBSUUsQUFFRixrQ0FBQSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEsZ0RBQ08sS0FBTCxBQUFTLHFDQUFUOztvQkFBQTtzQkFGSixBQUNFLEFBQ0UsQUFFRjtBQUZFOzJCQUVGLGNBQUEsT0FBRyxNQUFILEFBQVEsd0JBQXVCLFFBQS9CLEFBQXNDLHFCQUF0Qzs7b0JBQUE7c0JBQUE7QUFBQTtTQWpCSixBQWFFLEFBSUUsQUFFRixvQ0FBQSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEsZ0RBQ08sS0FBTCxBQUFTLG9DQUFUOztvQkFBQTtzQkFGSixBQUNFLEFBQ0UsQUFFRjtBQUZFOzJCQUVGLGNBQUEsT0FBRyxNQUFILEFBQVEsK0NBQThDLFFBQXRELEFBQTZELHFCQUE3RDs7b0JBQUE7c0JBQUE7QUFBQTtTQXZCSixBQW1CRSxBQUlFLEFBRUYsK0JBQUEsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLGdEQUNPLEtBQUwsQUFBUyxvQ0FBVDs7b0JBQUE7c0JBRkosQUFDRSxBQUNFLEFBRUY7QUFGRTsyQkFFRixjQUFBLE9BQUcsTUFBSCxBQUFRLDBDQUFSOztvQkFBQTtzQkFBQTtBQUFBO1NBOUJOLEFBQ0UsQUF5QkUsQUFJRSxBQUdKLGtDQUFBLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFhOztvQkFBYjtzQkFBQTtBQUFBO0FBQUEsU0FBc0M7bUJBQUE7O29CQUFBO3NCQUF0QyxBQUFzQztBQUFBO0FBQUEsVUFBaUM7bUJBQUE7O29CQUFBO3NCQUF2RSxBQUF1RTtBQUFBO0FBQUEsVUFGM0UsQUFDRSxBQUNFLEFBRUYsd0NBQUEsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsZ0RBQytCLEtBQTdCLEFBQWlDLGdFQUFqQyxBQUFlOztvQkFBZjtzQkF6SVosQUFDRSxBQW9GRSxBQWNFLEFBaUNFLEFBSUUsQUFDRSxBQU9iO0FBUGE7Ozs7OztBQS9JYSxBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rZXZpbmdyZWVuL1NpdGVzL2NvdWNoLXNpdGUifQ==