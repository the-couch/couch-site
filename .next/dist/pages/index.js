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
        styleId: '1806160769',
        css: '.main.jsx-1806160769{padding-top:10px;}.contact.jsx-1806160769{position:relative;width:200px;height:200px;padding-top:40px;}.contact__email.jsx-1806160769{width:28px;}.contact__rotate.jsx-1806160769{width:133px;-webkit-animation:rotating-jsx-1806160769 8s linear infinite;animation:rotating-jsx-1806160769 8s linear infinite;left:30px;top:30%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}@media (min-width:45em){.contact.jsx-1806160769{position:fixed;width:200px;height:200px;right:80px;top:0px;}.contact__rotate.jsx-1806160769{width:165px;top:24%;left:20px;}.contact__email.jsx-1806160769{width:32px;}}.address.jsx-1806160769{max-width:40px;}.footer.jsx-1806160769{padding-top:40px;padding-bottom:50px;}.footer__ppl.jsx-1806160769{width:50%;padding-bottom:20px;}.footer__img.jsx-1806160769{min-height:30px;}@media (min-width:30em){.footer__ppl.jsx-1806160769{width:33%;}}@media (min-width:50em){.footer__ppl.jsx-1806160769{width:20%;}}@media (min-width:80em){.footer.jsx-1806160769{max-width:800px;width:100%;}.footer__ppl.jsx-1806160769{padding-bottom:0;}.footer__wrapper.jsx-1806160769{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}}@media (min-height:900px) and (min-width:700px){.footer__wrapper.jsx-1806160769{position:fixed;bottom:40px;width:calc(100% - 160px);}}.footer__ppl.jsx-1806160769 img.jsx-1806160769{max-width:23px;padding-bottom:0px;}@-webkit-keyframes rotating-jsx-1806160769{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes rotating-jsx-1806160769{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCb0IsQUFHOEIsQUFHQyxBQU1QLEFBR0MsQUFRSyxBQU9ILEFBS0QsQUFJRSxBQUdFLEFBSVAsQUFJTSxBQUlKLEFBS0EsQUFLTSxBQUlDLEFBR0osQUFPRSxBQU1GLEFBS1UsQUFHRSxVQTdDUCxBQVFwQixBQUtBLENBL0NGLEFBdUJFLENBcEJzQyxBQWU1QixHQVBJLEFBZ0JoQixBQXVDZ0IsQUFNSyxDQWxDckIsQUFjZSxDQTdEZixBQXVDc0IsQUEwQnBCLENBOURZLEVBeUJBLE9BUEcsQUF5Q2YsQUFjMkIsR0F4RWQsQUF5QmIsQUFlRixJQXNDQSxHQTFDQSxHQWxCZSxHQWpCSSxRQWtCUCxDQXNEVixPQXJEQSxDQWxCRixjQThEdUIsT0FrQnJCLE1BR0EsdUNBNUVVLFVBQ0YsUUFDd0IsdUJBc0RBLGtGQXJEbEMsaUNBc0RFIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rZXZpbmdyZWVuL1NpdGVzL2NvdWNoLXNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IFJlYWN0R0EgZnJvbSAncmVhY3QtZ2EnXG5cbmNvbnN0IGluaXRHQSA9ICgpID0+IHtcbiAgUmVhY3RHQS5pbml0aWFsaXplKCdVQS05Njk5Mjk1My0xJylcbn1cbmNvbnN0IGxvZ1BhZ2VWaWV3ID0gKCkgPT4ge1xuICBSZWFjdEdBLnNldCh7IHBhZ2U6IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSB9KVxuICBSZWFjdEdBLnBhZ2V2aWV3KHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCAoKSB7XG4gICAgaW5pdEdBKClcbiAgICBsb2dQYWdlVmlldygpXG4gIH1cbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm1haW4ge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250YWN0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhY3RfX2VtYWlsIHtcbiAgICAgICAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFjdF9fcm90YXRlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMzNweDtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcm90YXRpbmcgOHMgbGluZWFyIGluZmluaXRlO1xuICAgICAgICAgICAgbGVmdDogMzBweDtcbiAgICAgICAgICAgIHRvcDogMzAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0NWVtKSB7XG4gICAgICAgICAgICAuY29udGFjdCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICByaWdodDogODBweDtcbiAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFjdF9fcm90YXRlIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDE2NXB4O1xuICAgICAgICAgICAgICB0b3A6IDI0JTtcbiAgICAgICAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jb250YWN0X19lbWFpbCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuYWRkcmVzcyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDQwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb290ZXIge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvb3Rlcl9fcHBsIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvb3Rlcl9faW1nIHtcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDMwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiAzMGVtKSB7XG4gICAgICAgICAgICAuZm9vdGVyX19wcGwge1xuICAgICAgICAgICAgICB3aWR0aDogMzMlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNTBlbSkge1xuICAgICAgICAgICAgLmZvb3Rlcl9fcHBsIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDgwZW0pIHtcbiAgICAgICAgICAgIC5mb290ZXIge1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5mb290ZXJfX3BwbCB7XG4gICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvb3Rlcl9fd3JhcHBlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtaW4taGVpZ2h0OiA5MDBweCkgYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICAgICAgICAgICAuZm9vdGVyX193cmFwcGVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICBib3R0b206IDQwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNjBweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb290ZXJfX3BwbCBpbWcge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyM3B4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGtleWZyYW1lcyByb3RhdGluZyB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd3JhcHBlciBtYWluJz5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nY29udGVudCc+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2NhcHMnPlRoZSBDb3VjaCBpcyBhIHNtYWxsIGJyb29rbHluIGJhc2VkIGRpZ2l0YWwgc3R1ZGlvIHRoYXQgbWFrZXMgdGhpbmdzIGZvciB0aGUgaW50ZXJuZXQuPC9oMT5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nJz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdzbWFsbCc+V2Ugd2FudCB0byB3b3JrIHdpdGggeW91LjwvcD5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nY29udGFjdCBqY2MgYWljIGYgbWhhJz5cbiAgICAgICAgICAgICAgPGEgaHJlZj0nbWFpbHRvOm1lZXR1c0B0aGVjb3VjaC5ueWMnIGNsYXNzTmFtZT0nYWJzIHoxIGZpbGwtYSBmaXQtYScgLz5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2NvbnRhY3RfX3JvdGF0ZSBhYnMnIHNyYz0nL3N0YXRpYy90ZXh0LnBuZycgLz5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2NvbnRhY3RfX2VtYWlsJyBzcmM9Jy9zdGF0aWMvRW1haWwucG5nJyAvPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfX3dyYXBwZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3RlciBjYXBzIGYgZncgamNzIGZpbGwteCc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfX3BwbCc+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl9faW1nJz5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScvc3RhdGljL0tldmluLnBuZycgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwOi8vZGlzdHJpY3Rkb21haW4uY29tJyB0YXJnZXQ9J19ibGFuayc+S2V2aW4gR3JlZW48L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX19wcGwnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfX2ltZyc+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL3N0YXRpYy9TYW0ucG5nJyAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHA6Ly9zYW0tZmF1bGtuZXIuY29tJyB0YXJnZXQ9J19ibGFuayc+U2FtIEZhdWxrbmVyPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl9fcHBsJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX19pbWcnPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9zdGF0aWMvY29zdGEucG5nJyAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxhIGhyZWY9J2h0dHA6Ly96ZXVzbGl2ZXMuY29tJyB0YXJnZXQ9J19ibGFuayc+Q29zdGEgRGFtYXNrb3M8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX19wcGwnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfX2ltZyc+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL3N0YXRpYy9hYmJ5LnBuZycgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PU13MXROLXpmUjljJyB0YXJnZXQ9J19ibGFuayc+QWJieSBNdWlyPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl9fcHBsJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX19pbWcnPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9zdGF0aWMvZXJpYy5wbmcnIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cDovL2VzdHJhdHRvbmJhaWxleS5jb20vJz5FcmljIEJhaWxleTwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhZGRyZXNzX19pbmZvIGYgYWljIGpjZSBmaWxsLXgnPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYXIgY2Fwcyc+QXZhaWxhYmxlIElSTCBAPGJyIC8+ODcgUmljaGFyZHNvbiBTdC4gU3VpdGUgNlcsPGJyIC8+QnJvb2tseW4sIE5ZIDExMjExPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nYWRkcmVzcyBweDEnIHNyYz0nL3N0YXRpYy9BZGRyZXNzLnBuZycgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L0xheW91dD5cbiAgICApXG4gIH1cbn1cbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
      }), _react2.default.createElement('div', {
        className: 'jsx-1806160769',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-1806160769' + ' ' + 'wrapper main',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }, _react2.default.createElement('section', {
        className: 'jsx-1806160769' + ' ' + 'content',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-1806160769' + ' ' + 'caps',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }, 'The Couch is a small brooklyn based digital studio that makes things for the internet.')), _react2.default.createElement('section', {
        className: 'jsx-1806160769' + ' ' + '',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        }
      }, _react2.default.createElement('p', {
        className: 'jsx-1806160769' + ' ' + 'small',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, 'We want to work with you.')), _react2.default.createElement('section', {
        className: 'jsx-1806160769' + ' ' + 'contact jcc aic f mha',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, _react2.default.createElement('a', { href: 'mailto:meetus@thecouch.nyc', className: 'jsx-1806160769' + ' ' + 'abs z1 fill-a fit-a',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }), _react2.default.createElement('img', { src: '/static/text.png', className: 'jsx-1806160769' + ' ' + 'contact__rotate abs',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      }), _react2.default.createElement('img', { src: '/static/Email.png', className: 'jsx-1806160769' + ' ' + 'contact__email',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        }
      }))), _react2.default.createElement('div', {
        className: 'jsx-1806160769' + ' ' + 'footer__wrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-1806160769' + ' ' + 'footer caps f fw jcs fill-x',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-1806160769' + ' ' + 'footer__ppl',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-1806160769' + ' ' + 'footer__img',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        }
      }, _react2.default.createElement('img', { src: '/static/Kevin.png', className: 'jsx-1806160769',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      })), _react2.default.createElement('a', { href: 'http://districtdomain.com', target: '_blank', className: 'jsx-1806160769',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, 'Kevin Green')), _react2.default.createElement('div', {
        className: 'jsx-1806160769' + ' ' + 'footer__ppl',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-1806160769' + ' ' + 'footer__img',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, _react2.default.createElement('img', { src: '/static/Sam.png', className: 'jsx-1806160769',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      })), _react2.default.createElement('a', { href: 'http://sam-faulkner.com', target: '_blank', className: 'jsx-1806160769',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, 'Sam Faulkner')), _react2.default.createElement('div', {
        className: 'jsx-1806160769' + ' ' + 'footer__ppl',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-1806160769' + ' ' + 'footer__img',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }, _react2.default.createElement('img', { src: '/static/costa.png', className: 'jsx-1806160769',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      })), _react2.default.createElement('a', { href: 'http://zeuslives.com', target: '_blank', className: 'jsx-1806160769',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, 'Costa Damaskos')), _react2.default.createElement('div', {
        className: 'jsx-1806160769' + ' ' + 'footer__ppl',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-1806160769' + ' ' + 'footer__img',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }, _react2.default.createElement('img', { src: '/static/abby.png', className: 'jsx-1806160769',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      })), _react2.default.createElement('a', { href: 'https://www.youtube.com/watch?v=Mw1tN-zfR9c', target: '_blank', className: 'jsx-1806160769',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        }
      }, 'Abby Muir')), _react2.default.createElement('div', {
        className: 'jsx-1806160769' + ' ' + 'footer__ppl',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-1806160769' + ' ' + 'footer__img',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, _react2.default.createElement('img', { src: '/static/eric.png', className: 'jsx-1806160769',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      })), _react2.default.createElement('a', { href: 'http://estrattonbailey.com/', className: 'jsx-1806160769',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, 'Eric Bailey'))), _react2.default.createElement('div', {
        className: 'jsx-1806160769' + ' ' + 'address__info f aic jce fill-x',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-1806160769',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }, _react2.default.createElement('p', {
        className: 'jsx-1806160769' + ' ' + 'ar caps',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, 'Available IRL @', _react2.default.createElement('br', {
        className: 'jsx-1806160769',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }), '87 Richardson St. Suite 6W,', _react2.default.createElement('br', {
        className: 'jsx-1806160769',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }), 'Brooklyn, NY 11211')), _react2.default.createElement('div', {
        className: 'jsx-1806160769',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }, _react2.default.createElement('img', { src: '/static/Address.png', className: 'jsx-1806160769' + ' ' + 'address px1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }))))));
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkxheW91dCIsIkhlYWRlciIsIlJlYWN0R0EiLCJpbml0R0EiLCJpbml0aWFsaXplIiwibG9nUGFnZVZpZXciLCJzZXQiLCJwYWdlIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInBhZ2V2aWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTOzs7O0FBQ1QsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLFNBQVMsU0FBVCxBQUFTLFNBQU0sQUFDbkI7b0JBQUEsQUFBUSxXQUFSLEFBQW1CLEFBQ3BCO0FBRkQ7QUFHQSxJQUFNLGNBQWMsU0FBZCxBQUFjLGNBQU0sQUFDeEI7b0JBQUEsQUFBUSxJQUFJLEVBQUUsTUFBTSxPQUFBLEFBQU8sU0FBM0IsQUFBWSxBQUF3QixBQUNwQztvQkFBQSxBQUFRLFNBQVMsT0FBQSxBQUFPLFNBQXhCLEFBQWlDLEFBQ2xDO0FBSEQ7Ozs7Ozs7Ozs7Ozs7d0NBTXVCLEFBQ25CO0FBQ0E7QUFDRDs7Ozs2QkFDUyxBQUNSOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBREYsQUFDRTtBQUFBO0FBQUE7aUJBREY7YUFBQSxBQWlHRTtBQWpHRiwwQkFpR0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQW1COztvQkFBbkI7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFjOztvQkFBZDtzQkFBQTtBQUFBO0FBQUEsU0FGSixBQUNFLEFBQ0UsQUFFRiw0R0FBQSxjQUFBOzRDQUFBLEFBQW1COztvQkFBbkI7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFhOztvQkFBYjtzQkFBQTtBQUFBO0FBQUEsU0FMSixBQUlFLEFBQ0UsQUFFRiwrQ0FBQSxjQUFBOzRDQUFBLEFBQW1COztvQkFBbkI7c0JBQUEsQUFDRTtBQURGO0FBQUEsOENBQ0ssTUFBSCxBQUFRLGtFQUFSLEFBQStDOztvQkFBL0M7c0JBREYsQUFDRSxBQUNBO0FBREE7aURBQ3FDLEtBQXJDLEFBQXlDLHdEQUF6QyxBQUFlOztvQkFBZjtzQkFGRixBQUVFLEFBQ0E7QUFEQTtpREFDZ0MsS0FBaEMsQUFBb0MseURBQXBDLEFBQWU7O29CQUFmO3NCQVhOLEFBQ0UsQUFPRSxBQUdFLEFBR0o7QUFISTs0QkFHSixjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLGdEQUNPLEtBQUwsQUFBUyxnQ0FBVDs7b0JBQUE7c0JBRkosQUFDRSxBQUNFLEFBRUY7QUFGRTsyQkFFRixjQUFBLE9BQUcsTUFBSCxBQUFRLDZCQUE0QixRQUFwQyxBQUEyQyxxQkFBM0M7O29CQUFBO3NCQUFBO0FBQUE7U0FMSixBQUNFLEFBSUUsQUFFRixpQ0FBQSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEsZ0RBQ08sS0FBTCxBQUFTLDhCQUFUOztvQkFBQTtzQkFGSixBQUNFLEFBQ0UsQUFFRjtBQUZFOzJCQUVGLGNBQUEsT0FBRyxNQUFILEFBQVEsMkJBQTBCLFFBQWxDLEFBQXlDLHFCQUF6Qzs7b0JBQUE7c0JBQUE7QUFBQTtTQVhKLEFBT0UsQUFJRSxBQUVGLGtDQUFBLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSxnREFDTyxLQUFMLEFBQVMsZ0NBQVQ7O29CQUFBO3NCQUZKLEFBQ0UsQUFDRSxBQUVGO0FBRkU7MkJBRUYsY0FBQSxPQUFHLE1BQUgsQUFBUSx3QkFBdUIsUUFBL0IsQUFBc0MscUJBQXRDOztvQkFBQTtzQkFBQTtBQUFBO1NBakJKLEFBYUUsQUFJRSxBQUVGLG9DQUFBLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSxnREFDTyxLQUFMLEFBQVMsK0JBQVQ7O29CQUFBO3NCQUZKLEFBQ0UsQUFDRSxBQUVGO0FBRkU7MkJBRUYsY0FBQSxPQUFHLE1BQUgsQUFBUSwrQ0FBOEMsUUFBdEQsQUFBNkQscUJBQTdEOztvQkFBQTtzQkFBQTtBQUFBO1NBdkJKLEFBbUJFLEFBSUUsQUFFRiwrQkFBQSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEsZ0RBQ08sS0FBTCxBQUFTLCtCQUFUOztvQkFBQTtzQkFGSixBQUNFLEFBQ0UsQUFFRjtBQUZFOzJCQUVGLGNBQUEsT0FBRyxNQUFILEFBQVEsMENBQVI7O29CQUFBO3NCQUFBO0FBQUE7U0E5Qk4sQUFDRSxBQXlCRSxBQUlFLEFBR0osa0NBQUEsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWE7O29CQUFiO3NCQUFBO0FBQUE7QUFBQSxTQUFzQzttQkFBQTs7b0JBQUE7c0JBQXRDLEFBQXNDO0FBQUE7QUFBQSxVQUFpQzttQkFBQTs7b0JBQUE7c0JBQXZFLEFBQXVFO0FBQUE7QUFBQSxVQUYzRSxBQUNFLEFBQ0UsQUFFRix3Q0FBQSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSxnREFDK0IsS0FBN0IsQUFBaUMsMkRBQWpDLEFBQWU7O29CQUFmO3NCQXRKWixBQUNFLEFBaUdFLEFBY0UsQUFpQ0UsQUFJRSxBQUNFLEFBT2I7QUFQYTs7Ozs7O0FBNUphLEEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2tldmluZ3JlZW4vU2l0ZXMvY291Y2gtc2l0ZSJ9