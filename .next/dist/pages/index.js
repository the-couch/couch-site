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
        styleId: '2117182496',
        css: '.main.jsx-2117182496{padding-top:10px;}.contact.jsx-2117182496{position:relative;width:200px;height:200px;}.contact__email.jsx-2117182496{width:28px;}.contact__rotate.jsx-2117182496{width:133px;-webkit-animation:rotating-jsx-2117182496 8s linear infinite;animation:rotating-jsx-2117182496 8s linear infinite;left:30px;top:36px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}@media (min-width:45em){.contact.jsx-2117182496{position:fixed;width:200px;height:200px;right:80px;top:20px;}.contact__rotate.jsx-2117182496{width:165px;top:20px;left:20px;}.contact__email.jsx-2117182496{width:32px;}}.address.jsx-2117182496{max-width:40px;}.footer.jsx-2117182496{padding-top:40px;padding-bottom:50px;}.footer__ppl.jsx-2117182496{width:50%;padding-bottom:20px;}.footer__img.jsx-2117182496{min-height:30px;}@media (min-width:30em){.footer__ppl.jsx-2117182496{width:33%;}}@media (min-width:50em){.footer__ppl.jsx-2117182496{width:20%;}}@media (min-width:80em){.footer.jsx-2117182496{max-width:800px;width:100%;}.footer__ppl.jsx-2117182496{padding-bottom:0;}.footer__wrapper.jsx-2117182496{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}}@media (min-height:900px) and (min-width:700px){.footer__wrapper.jsx-2117182496{position:fixed;bottom:40px;width:calc(100% - 160px);}}.footer__ppl.jsx-2117182496 img.jsx-2117182496{max-width:23px;padding-bottom:0px;}@-webkit-keyframes rotating-jsx-2117182496{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes rotating-jsx-2117182496{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCb0IsQUFHOEIsQUFHQyxBQUtQLEFBR0MsQUFRSyxBQU9ILEFBS0QsQUFJRSxBQUdFLEFBSVAsQUFJTSxBQUlKLEFBS0EsQUFLTSxBQUlDLEFBR0osQUFPRSxBQU1GLEFBS1UsQUFHRSxVQTdDUCxBQVFwQixBQUtBLENBL0NGLEFBdUJFLENBcEJzQyxBQWUzQixHQVBHLEFBZ0JoQixBQXVDZ0IsQUFNSyxDQWxDckIsQUFjZSxDQTVEZixBQXNDc0IsQUEwQnBCLENBN0RZLEdBd0JBLE1BUEcsQUF5Q2YsQUFjMkIsR0F2RWQsQUF1Q2YsQ0FmRSxHQXFERixHQTFDQSxHQWxCZSxHQWhCZixRQWlCYSxDQXNEWCxRQXJEQSxjQTRDcUIsT0FrQnJCLE1BR0EsdUNBNUVVLFVBQ0QsU0FDdUIsc0JBc0RBLG1GQXJEbEMsZ0NBc0RFIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rZXZpbmdyZWVuL1NpdGVzL2NvdWNoLXNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IFJlYWN0R0EgZnJvbSAncmVhY3QtZ2EnXG5cbmNvbnN0IGluaXRHQSA9ICgpID0+IHtcbiAgUmVhY3RHQS5pbml0aWFsaXplKCdVQS05Njk5Mjk1My0xJylcbn1cbmNvbnN0IGxvZ1BhZ2VWaWV3ID0gKCkgPT4ge1xuICBSZWFjdEdBLnNldCh7IHBhZ2U6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSB9KVxuICBSZWFjdEdBLnBhZ2V2aWV3KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgaW5pdEdBKClcbiAgICBsb2dQYWdlVmlldygpXG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm1haW4ge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250YWN0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250YWN0X19lbWFpbCB7XG4gICAgICAgICAgICB3aWR0aDogMjhweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhY3RfX3JvdGF0ZSB7XG4gICAgICAgICAgICB3aWR0aDogMTMzcHg7XG4gICAgICAgICAgICBhbmltYXRpb246IHJvdGF0aW5nIDhzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDMwcHg7XG4gICAgICAgICAgICB0b3A6IDM2cHg7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDQ1ZW0pIHtcbiAgICAgICAgICAgIC5jb250YWN0IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgIHJpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFjdF9fcm90YXRlIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDE2NXB4O1xuICAgICAgICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgICAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFjdF9fZW1haWwge1xuICAgICAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmFkZHJlc3Mge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA0MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb290ZXJfX3BwbCB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb290ZXJfX2ltZyB7XG4gICAgICAgICAgICBtaW4taGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogMzBlbSkge1xuICAgICAgICAgICAgLmZvb3Rlcl9fcHBsIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDMzJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDUwZW0pIHtcbiAgICAgICAgICAgIC5mb290ZXJfX3BwbCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA4MGVtKSB7XG4gICAgICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9vdGVyX19wcGwge1xuICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb290ZXJfX3dyYXBwZXIge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWluLWhlaWdodDogOTAwcHgpIGFuZCAobWluLXdpZHRoOiA3MDBweCkge1xuICAgICAgICAgICAgLmZvb3Rlcl9fd3JhcHBlciB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgYm90dG9tOiA0MHB4O1xuICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTYwcHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9vdGVyX19wcGwgaW1nIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjNweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBrZXlmcmFtZXMgcm90YXRpbmcge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBgfTwvc3R5bGU+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3dyYXBwZXIgbWFpbic+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRlbnQnPlxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSdjYXBzJz5UaGUgQ291Y2ggaXMgYSBzbWFsbCBicm9va2x5biBiYXNlZCBkaWdpdGFsIHN0dWRpbyB0aGF0IG1ha2VzIHRoaW5ncyBmb3IgdGhlIGludGVybmV0LjwvaDE+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nc21hbGwnPldlIHdhbnQgdG8gd29yayB3aXRoIHlvdS48L3A+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRhY3QgamNjIGFpYyBmIG1oYSc+XG4gICAgICAgICAgICAgIDxhIGhyZWY9J21haWx0bzptZWV0dXNAdGhlY291Y2gubnljJyBjbGFzc05hbWU9J2FicyB6MSBmaWxsLWEgZml0LWEnIC8+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdjb250YWN0X19yb3RhdGUgYWJzJyBzcmM9Jy9zdGF0aWMvdGV4dC5wbmcnIC8+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdjb250YWN0X19lbWFpbCcgc3JjPScvc3RhdGljL0VtYWlsLnBuZycgLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX193cmFwcGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXIgY2FwcyBmIGZ3IGpjcyBmaWxsLXgnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX19wcGwnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfX2ltZyc+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL3N0YXRpYy9LZXZpbi5wbmcnIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cDovL2Rpc3RyaWN0ZG9tYWluLmNvbScgdGFyZ2V0PSdfYmxhbmsnPktldmluIEdyZWVuPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl9fcHBsJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX19pbWcnPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9zdGF0aWMvU2FtLnBuZycgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwOi8vc2FtLWZhdWxrbmVyLmNvbScgdGFyZ2V0PSdfYmxhbmsnPlNhbSBGYXVsa25lcjwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfX3BwbCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl9faW1nJz5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvc3RhdGljL2Nvc3RhLnBuZycgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwOi8vemV1c2xpdmVzLmNvbScgdGFyZ2V0PSdfYmxhbmsnPkNvc3RhIERhbWFza29zPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl9fcHBsJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX19pbWcnPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9zdGF0aWMvYWJieS5wbmcnIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cHM6Ly93d3cueW91dHViZS5jb20vd2F0Y2g/dj1NdzF0Ti16ZlI5YycgdGFyZ2V0PSdfYmxhbmsnPkFiYnkgTXVpcjwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfX3BwbCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl9faW1nJz5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvc3RhdGljL2VyaWMucG5nJyAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHA6Ly9lc3RyYXR0b25iYWlsZXkuY29tLyc+RXJpYyBCYWlsZXk8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nYWRkcmVzc19faW5mbyBmIGFpYyBqY2UgZmlsbC14Jz5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J2FyIGNhcHMnPkF2YWlsYWJsZSBJUkwgQDxiciAvPjg3IFJpY2hhcmRzb24gU3QuIFN1aXRlIDZXLDxiciAvPkJyb29rbHluLCBOWSAxMTIxMTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2FkZHJlc3MgcHgxJyBzcmM9Jy9zdGF0aWMvQWRkcmVzcy5wbmcnIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=pages/index.js?entry */'
      }), _react2.default.createElement('div', {
        className: 'jsx-2117182496',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2117182496' + ' ' + 'wrapper main',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, _react2.default.createElement('section', {
        className: 'jsx-2117182496' + ' ' + 'content',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-2117182496' + ' ' + 'caps',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, 'The Couch is a small brooklyn based digital studio that makes things for the internet.')), _react2.default.createElement('section', {
        className: 'jsx-2117182496' + ' ' + '',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 122
        }
      }, _react2.default.createElement('p', {
        className: 'jsx-2117182496' + ' ' + 'small',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, 'We want to work with you.')), _react2.default.createElement('section', {
        className: 'jsx-2117182496' + ' ' + 'contact jcc aic f mha',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, _react2.default.createElement('a', { href: 'mailto:meetus@thecouch.nyc', className: 'jsx-2117182496' + ' ' + 'abs z1 fill-a fit-a',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }), _react2.default.createElement('img', { src: '/static/text.png', className: 'jsx-2117182496' + ' ' + 'contact__rotate abs',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }), _react2.default.createElement('img', { src: '/static/Email.png', className: 'jsx-2117182496' + ' ' + 'contact__email',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }))), _react2.default.createElement('div', {
        className: 'jsx-2117182496' + ' ' + 'footer__wrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2117182496' + ' ' + 'footer caps f fw jcs fill-x',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2117182496' + ' ' + 'footer__ppl',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2117182496' + ' ' + 'footer__img',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, _react2.default.createElement('img', { src: '/static/Kevin.png', className: 'jsx-2117182496',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      })), _react2.default.createElement('a', { href: 'http://districtdomain.com', target: '_blank', className: 'jsx-2117182496',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        }
      }, 'Kevin Green')), _react2.default.createElement('div', {
        className: 'jsx-2117182496' + ' ' + 'footer__ppl',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2117182496' + ' ' + 'footer__img',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, _react2.default.createElement('img', { src: '/static/Sam.png', className: 'jsx-2117182496',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      })), _react2.default.createElement('a', { href: 'http://sam-faulkner.com', target: '_blank', className: 'jsx-2117182496',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, 'Sam Faulkner')), _react2.default.createElement('div', {
        className: 'jsx-2117182496' + ' ' + 'footer__ppl',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2117182496' + ' ' + 'footer__img',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, _react2.default.createElement('img', { src: '/static/costa.png', className: 'jsx-2117182496',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      })), _react2.default.createElement('a', { href: 'http://zeuslives.com', target: '_blank', className: 'jsx-2117182496',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, 'Costa Damaskos')), _react2.default.createElement('div', {
        className: 'jsx-2117182496' + ' ' + 'footer__ppl',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2117182496' + ' ' + 'footer__img',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, _react2.default.createElement('img', { src: '/static/abby.png', className: 'jsx-2117182496',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      })), _react2.default.createElement('a', { href: 'https://www.youtube.com/watch?v=Mw1tN-zfR9c', target: '_blank', className: 'jsx-2117182496',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        }
      }, 'Abby Muir')), _react2.default.createElement('div', {
        className: 'jsx-2117182496' + ' ' + 'footer__ppl',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2117182496' + ' ' + 'footer__img',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, _react2.default.createElement('img', { src: '/static/eric.png', className: 'jsx-2117182496',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      })), _react2.default.createElement('a', { href: 'http://estrattonbailey.com/', className: 'jsx-2117182496',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, 'Eric Bailey'))), _react2.default.createElement('div', {
        className: 'jsx-2117182496' + ' ' + 'address__info f aic jce fill-x',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2117182496',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, _react2.default.createElement('p', {
        className: 'jsx-2117182496' + ' ' + 'ar caps',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, 'Available IRL @', _react2.default.createElement('br', {
        className: 'jsx-2117182496',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }), '87 Richardson St. Suite 6W,', _react2.default.createElement('br', {
        className: 'jsx-2117182496',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }), 'Brooklyn, NY 11211')), _react2.default.createElement('div', {
        className: 'jsx-2117182496',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, _react2.default.createElement('img', { src: '/static/Address.png', className: 'jsx-2117182496' + ' ' + 'address px1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }))))));
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkxheW91dCIsIkhlYWRlciIsIlJlYWN0R0EiLCJpbml0R0EiLCJpbml0aWFsaXplIiwibG9nUGFnZVZpZXciLCJzZXQiLCJwYWdlIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInBhZ2V2aWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTOzs7O0FBQ1QsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLFNBQVMsU0FBVCxBQUFTLFNBQU0sQUFDbkI7b0JBQUEsQUFBUSxXQUFSLEFBQW1CLEFBQ3BCO0FBRkQ7QUFHQSxJQUFNLGNBQWMsU0FBZCxBQUFjLGNBQU0sQUFDeEI7b0JBQUEsQUFBUSxJQUFJLEVBQUUsTUFBTSxPQUFBLEFBQU8sU0FBM0IsQUFBWSxBQUF3QixBQUNwQztvQkFBQSxBQUFRLFNBQVMsT0FBQSxBQUFPLFNBQXhCLEFBQWlDLEFBQ2xDO0FBSEQ7Ozs7Ozs7Ozs7Ozs7d0NBTXVCLEFBQ25CO0FBQ0E7QUFDRDs7Ozs2QkFDUyxBQUNSOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBREYsQUFDRTtBQUFBO0FBQUE7aUJBREY7YUFBQSxBQWdHRTtBQWhHRiwwQkFnR0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQW1COztvQkFBbkI7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFjOztvQkFBZDtzQkFBQTtBQUFBO0FBQUEsU0FGSixBQUNFLEFBQ0UsQUFFRiw0R0FBQSxjQUFBOzRDQUFBLEFBQW1COztvQkFBbkI7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFhOztvQkFBYjtzQkFBQTtBQUFBO0FBQUEsU0FMSixBQUlFLEFBQ0UsQUFFRiwrQ0FBQSxjQUFBOzRDQUFBLEFBQW1COztvQkFBbkI7c0JBQUEsQUFDRTtBQURGO0FBQUEsOENBQ0ssTUFBSCxBQUFRLGtFQUFSLEFBQStDOztvQkFBL0M7c0JBREYsQUFDRSxBQUNBO0FBREE7aURBQ3FDLEtBQXJDLEFBQXlDLHdEQUF6QyxBQUFlOztvQkFBZjtzQkFGRixBQUVFLEFBQ0E7QUFEQTtpREFDZ0MsS0FBaEMsQUFBb0MseURBQXBDLEFBQWU7O29CQUFmO3NCQVhOLEFBQ0UsQUFPRSxBQUdFLEFBR0o7QUFISTs0QkFHSixjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLGdEQUNPLEtBQUwsQUFBUyxnQ0FBVDs7b0JBQUE7c0JBRkosQUFDRSxBQUNFLEFBRUY7QUFGRTsyQkFFRixjQUFBLE9BQUcsTUFBSCxBQUFRLDZCQUE0QixRQUFwQyxBQUEyQyxxQkFBM0M7O29CQUFBO3NCQUFBO0FBQUE7U0FMSixBQUNFLEFBSUUsQUFFRixpQ0FBQSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEsZ0RBQ08sS0FBTCxBQUFTLDhCQUFUOztvQkFBQTtzQkFGSixBQUNFLEFBQ0UsQUFFRjtBQUZFOzJCQUVGLGNBQUEsT0FBRyxNQUFILEFBQVEsMkJBQTBCLFFBQWxDLEFBQXlDLHFCQUF6Qzs7b0JBQUE7c0JBQUE7QUFBQTtTQVhKLEFBT0UsQUFJRSxBQUVGLGtDQUFBLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSxnREFDTyxLQUFMLEFBQVMsZ0NBQVQ7O29CQUFBO3NCQUZKLEFBQ0UsQUFDRSxBQUVGO0FBRkU7MkJBRUYsY0FBQSxPQUFHLE1BQUgsQUFBUSx3QkFBdUIsUUFBL0IsQUFBc0MscUJBQXRDOztvQkFBQTtzQkFBQTtBQUFBO1NBakJKLEFBYUUsQUFJRSxBQUVGLG9DQUFBLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSxnREFDTyxLQUFMLEFBQVMsK0JBQVQ7O29CQUFBO3NCQUZKLEFBQ0UsQUFDRSxBQUVGO0FBRkU7MkJBRUYsY0FBQSxPQUFHLE1BQUgsQUFBUSwrQ0FBOEMsUUFBdEQsQUFBNkQscUJBQTdEOztvQkFBQTtzQkFBQTtBQUFBO1NBdkJKLEFBbUJFLEFBSUUsQUFFRiwrQkFBQSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEsZ0RBQ08sS0FBTCxBQUFTLCtCQUFUOztvQkFBQTtzQkFGSixBQUNFLEFBQ0UsQUFFRjtBQUZFOzJCQUVGLGNBQUEsT0FBRyxNQUFILEFBQVEsMENBQVI7O29CQUFBO3NCQUFBO0FBQUE7U0E5Qk4sQUFDRSxBQXlCRSxBQUlFLEFBR0osa0NBQUEsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWE7O29CQUFiO3NCQUFBO0FBQUE7QUFBQSxTQUFzQzttQkFBQTs7b0JBQUE7c0JBQXRDLEFBQXNDO0FBQUE7QUFBQSxVQUFpQzttQkFBQTs7b0JBQUE7c0JBQXZFLEFBQXVFO0FBQUE7QUFBQSxVQUYzRSxBQUNFLEFBQ0UsQUFFRix3Q0FBQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxnREFDK0IsS0FBN0IsQUFBaUMsMkRBQWpDLEFBQWU7O29CQUFmO3NCQXJKWixBQUNFLEFBZ0dFLEFBY0UsQUFpQ0UsQUFJRSxBQUNFLEFBT2I7QUFQYTs7Ozs7O0FBM0phLEEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2tldmluZ3JlZW4vU2l0ZXMvY291Y2gtc2l0ZSJ9