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
        styleId: '2165118760',
        css: '.main.jsx-2165118760{padding-top:10px;}.contact.jsx-2165118760{position:relative;width:200px;height:200px;padding-top:40px;}.contact__rotate.jsx-2165118760{width:133px;-webkit-animation:rotating-jsx-2165118760 8s linear infinite;animation:rotating-jsx-2165118760 8s linear infinite;}@media (min-width:45em){.contact.jsx-2165118760{position:fixed;width:200px;height:200px;right:80px;top:0px;}.contact__rotate.jsx-2165118760{width:165px;}}.contact__email.jsx-2165118760{width:28px;}.address.jsx-2165118760{max-width:40px;}.footer.jsx-2165118760{padding-top:40px;padding-bottom:50px;}.footer__ppl.jsx-2165118760{width:50%;padding-bottom:20px;}.footer__img.jsx-2165118760{min-height:30px;}@media (min-width:30em){.footer__ppl.jsx-2165118760{width:33%;}}@media (min-width:50em){.footer__ppl.jsx-2165118760{width:20%;}}@media (min-width:80em){.footer.jsx-2165118760{max-width:800px;width:100%;}.footer__ppl.jsx-2165118760{padding-bottom:0;}.footer__wrapper.jsx-2165118760{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}}@media (min-height:900px){.footer__wrapper.jsx-2165118760{position:fixed;bottom:40px;width:calc(100% - 160px);}}.footer__ppl.jsx-2165118760 img.jsx-2165118760{max-width:23px;padding-bottom:0px;}@-webkit-keyframes rotating-jsx-2165118760{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes rotating-jsx-2165118760{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNCb0IsQUFHOEIsQUFHQyxBQU1OLEFBS0ssQUFPSCxBQUlILEFBR0ksQUFHRSxBQUlQLEFBSU0sQUFJSixBQUtBLEFBS00sQUFJQyxBQUdKLEFBT0UsQUFNRixBQUtVLEFBR0UsVUE3Q1AsQUFRcEIsQUFLQSxDQXZCRixDQWhCd0MsQUFZdEMsR0FQYyxBQWNoQixBQXVDZ0IsQUFNSyxDQWxDckIsQUFjZSxDQXJEZixBQStCc0IsQUEwQnBCLENBdERZLFNBWUcsQUF1Q2YsQUFjMkIsR0FoRWQsQUFnQ2YsSUFzQ0EsR0ExQ0EsR0FoQmUsR0FYSSxRQVlQLENBb0RWLE9BbkRBLENBWkYsY0FzRHVCLE9Ba0JyQixNQUdBLHVDQXZFRix5Q0FtRGtDLG1IQUNoQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2V2aW5ncmVlbi9TaXRlcy9jb3VjaC1zaXRlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCBSZWFjdEdBIGZyb20gJ3JlYWN0LWdhJ1xuXG5jb25zdCBpbml0R0EgPSAoKSA9PiB7XG4gIFJlYWN0R0EuaW5pdGlhbGl6ZSgnVUEtOTY5OTI5NTMtMScpXG59XG5jb25zdCBsb2dQYWdlVmlldyA9ICgpID0+IHtcbiAgUmVhY3RHQS5zZXQoeyBwYWdlOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgfSlcbiAgUmVhY3RHQS5wYWdldmlldyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGluaXRHQSgpXG4gICAgbG9nUGFnZVZpZXcoKVxuICB9XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5tYWluIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFjdCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250YWN0X19yb3RhdGUge1xuICAgICAgICAgICAgd2lkdGg6IDEzM3B4O1xuICAgICAgICAgICAgYW5pbWF0aW9uOiByb3RhdGluZyA4cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0NWVtKSB7XG4gICAgICAgICAgICAuY29udGFjdCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICByaWdodDogODBweDtcbiAgICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFjdF9fcm90YXRlIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDE2NXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFjdF9fZW1haWwge1xuICAgICAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hZGRyZXNzIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogNDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9vdGVyX19wcGwge1xuICAgICAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9vdGVyX19pbWcge1xuICAgICAgICAgICAgbWluLWhlaWdodDogMzBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDMwZW0pIHtcbiAgICAgICAgICAgIC5mb290ZXJfX3BwbCB7XG4gICAgICAgICAgICAgIHdpZHRoOiAzMyU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1MGVtKSB7XG4gICAgICAgICAgICAuZm9vdGVyX19wcGwge1xuICAgICAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogODBlbSkge1xuICAgICAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvb3Rlcl9fcHBsIHtcbiAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9vdGVyX193cmFwcGVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1pbi1oZWlnaHQ6IDkwMHB4KSB7XG4gICAgICAgICAgICAuZm9vdGVyX193cmFwcGVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICBib3R0b206IDQwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNjBweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5mb290ZXJfX3BwbCBpbWcge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyM3B4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgQGtleWZyYW1lcyByb3RhdGluZyB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd3JhcHBlciBtYWluJz5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nY29udGVudCc+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2NhcHMnPlRoZSBDb3VjaCBpcyBhIHNtYWxsIGJyb29rbHluIGJhc2VkIGRpZ2l0YWwgc3R1ZGlvIHRoYXQgbWFrZXMgdGhpbmdzIGZvciB0aGUgaW50ZXJuZXQuPC9oMT5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ncHQyJz5cbiAgICAgICAgICAgICAgPHA+V2Ugd2FudCB0byB3b3JrIHdpdGggeW91LjwvcD5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nY29udGFjdCBqY2MgYWljIGYgbWhhJz5cbiAgICAgICAgICAgICAgPGEgaHJlZj0nbWFpbHRvOm1lZXR1c0B0aGVjb3VjaC5ueWMnIGNsYXNzTmFtZT0nYWJzIHoxIGZpbGwtYSBmaXQtYScgLz5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2NvbnRhY3RfX3JvdGF0ZSBhYnMnIHNyYz0nL3N0YXRpYy9pY29uL3RleHQucG5nJyAvPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0nY29udGFjdF9fZW1haWwnIHNyYz0nL3N0YXRpYy9pY29uL0VtYWlsLnBuZycgLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX193cmFwcGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXIgY2FwcyBmIGZ3IGpjcyBmaWxsLXgnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX19wcGwnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfX2ltZyc+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL3N0YXRpYy9pY29uL0tldmluLnBuZycgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwOi8vZGlzdHJpY3Rkb21haW4uY29tJyB0YXJnZXQ9J19ibGFuayc+S2V2aW4gR3JlZW48L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX19wcGwnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfX2ltZyc+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL3N0YXRpYy9pY29uL1NhbS5wbmcnIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGEgaHJlZj0naHR0cDovL3NhbS1mYXVsa25lci5jb20nIHRhcmdldD0nX2JsYW5rJz5TYW0gRmF1bGtuZXI8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX19wcGwnPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfX2ltZyc+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nL3N0YXRpYy9pY29uL2Nvc3RhLnBuZycgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwOi8vemV1c2xpdmVzLmNvbScgdGFyZ2V0PSdfYmxhbmsnPkNvc3RhIERhbWFza29zPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl9fcHBsJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX19pbWcnPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9zdGF0aWMvaWNvbi9hYmJ5LnBuZycgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PU13MXROLXpmUjljJyB0YXJnZXQ9J19ibGFuayc+QWJieSBNdWlyPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3Rlcl9fcHBsJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX19pbWcnPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Jy9zdGF0aWMvaWNvbi9lcmljLnBuZycgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YSBocmVmPSdodHRwOi8vZXN0cmF0dG9uYmFpbGV5LmNvbS8nPkVyaWMgQmFpbGV5PC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2FkZHJlc3NfX2luZm8gZiBhaWMgamNlIGZpbGwteCc+XG4gICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdhciBjYXBzJz5BdmFpbGFibGUgSVJMIEA8YnIgLz44NyBSaWNoYXJkc29uIFN0LiBTdWl0ZSA2Vyw8YnIgLz5Ccm9va2x5biwgTlkgMTEyMTE8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdhZGRyZXNzIHB4MScgc3JjPScvc3RhdGljL2ljb24vQWRkcmVzcy5wbmcnIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MYXlvdXQ+XG4gICAgKVxuICB9XG59XG4iXX0= */\n/*@ sourceURL=pages/index.js?entry */'
      }), _react2.default.createElement('div', {
        className: 'jsx-2165118760',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2165118760' + ' ' + 'wrapper main',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        }
      }, _react2.default.createElement('section', {
        className: 'jsx-2165118760' + ' ' + 'content',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-2165118760' + ' ' + 'caps',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        }
      }, 'The Couch is a small brooklyn based digital studio that makes things for the internet.')), _react2.default.createElement('section', {
        className: 'jsx-2165118760' + ' ' + 'pt2',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        }
      }, _react2.default.createElement('p', {
        className: 'jsx-2165118760',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        }
      }, 'We want to work with you.')), _react2.default.createElement('section', {
        className: 'jsx-2165118760' + ' ' + 'contact jcc aic f mha',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        }
      }, _react2.default.createElement('a', { href: 'mailto:meetus@thecouch.nyc', className: 'jsx-2165118760' + ' ' + 'abs z1 fill-a fit-a',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        }
      }), _react2.default.createElement('img', { src: '/static/icon/text.png', className: 'jsx-2165118760' + ' ' + 'contact__rotate abs',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 120
        }
      }), _react2.default.createElement('img', { src: '/static/icon/Email.png', className: 'jsx-2165118760' + ' ' + 'contact__email',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        }
      }))), _react2.default.createElement('div', {
        className: 'jsx-2165118760' + ' ' + 'footer__wrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 124
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2165118760' + ' ' + 'footer caps f fw jcs fill-x',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2165118760' + ' ' + 'footer__ppl',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 126
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2165118760' + ' ' + 'footer__img',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        }
      }, _react2.default.createElement('img', { src: '/static/icon/Kevin.png', className: 'jsx-2165118760',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        }
      })), _react2.default.createElement('a', { href: 'http://districtdomain.com', target: '_blank', className: 'jsx-2165118760',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        }
      }, 'Kevin Green')), _react2.default.createElement('div', {
        className: 'jsx-2165118760' + ' ' + 'footer__ppl',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2165118760' + ' ' + 'footer__img',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        }
      }, _react2.default.createElement('img', { src: '/static/icon/Sam.png', className: 'jsx-2165118760',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134
        }
      })), _react2.default.createElement('a', { href: 'http://sam-faulkner.com', target: '_blank', className: 'jsx-2165118760',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        }
      }, 'Sam Faulkner')), _react2.default.createElement('div', {
        className: 'jsx-2165118760' + ' ' + 'footer__ppl',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 138
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2165118760' + ' ' + 'footer__img',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, _react2.default.createElement('img', { src: '/static/icon/costa.png', className: 'jsx-2165118760',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      })), _react2.default.createElement('a', { href: 'http://zeuslives.com', target: '_blank', className: 'jsx-2165118760',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, 'Costa Damaskos')), _react2.default.createElement('div', {
        className: 'jsx-2165118760' + ' ' + 'footer__ppl',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2165118760' + ' ' + 'footer__img',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }, _react2.default.createElement('img', { src: '/static/icon/abby.png', className: 'jsx-2165118760',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        }
      })), _react2.default.createElement('a', { href: 'https://www.youtube.com/watch?v=Mw1tN-zfR9c', target: '_blank', className: 'jsx-2165118760',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, 'Abby Muir')), _react2.default.createElement('div', {
        className: 'jsx-2165118760' + ' ' + 'footer__ppl',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2165118760' + ' ' + 'footer__img',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, _react2.default.createElement('img', { src: '/static/icon/eric.png', className: 'jsx-2165118760',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      })), _react2.default.createElement('a', { href: 'http://estrattonbailey.com/', className: 'jsx-2165118760',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }, 'Eric Bailey'))), _react2.default.createElement('div', {
        className: 'jsx-2165118760' + ' ' + 'address__info f aic jce fill-x',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-2165118760',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, _react2.default.createElement('p', {
        className: 'jsx-2165118760' + ' ' + 'ar caps',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, 'Available IRL @', _react2.default.createElement('br', {
        className: 'jsx-2165118760',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }), '87 Richardson St. Suite 6W,', _react2.default.createElement('br', {
        className: 'jsx-2165118760',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }), 'Brooklyn, NY 11211')), _react2.default.createElement('div', {
        className: 'jsx-2165118760',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, _react2.default.createElement('img', { src: '/static/icon/Address.png', className: 'jsx-2165118760' + ' ' + 'address px1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }))))));
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkxheW91dCIsIkhlYWRlciIsIlJlYWN0R0EiLCJpbml0R0EiLCJpbml0aWFsaXplIiwibG9nUGFnZVZpZXciLCJzZXQiLCJwYWdlIiwid2luZG93IiwibG9jYXRpb24iLCJwYXRobmFtZSIsInBhZ2V2aWV3Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFTOzs7O0FBQ1QsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPOzs7Ozs7Ozs7QUFFUCxJQUFNLFNBQVMsU0FBVCxBQUFTLFNBQU0sQUFDbkI7b0JBQUEsQUFBUSxXQUFSLEFBQW1CLEFBQ3BCO0FBRkQ7QUFHQSxJQUFNLGNBQWMsU0FBZCxBQUFjLGNBQU0sQUFDeEI7b0JBQUEsQUFBUSxJQUFJLEVBQUUsTUFBTSxPQUFBLEFBQU8sU0FBM0IsQUFBWSxBQUF3QixBQUNwQztvQkFBQSxBQUFRLFNBQVMsT0FBQSxBQUFPLFNBQXhCLEFBQWlDLEFBQ2xDO0FBSEQ7Ozs7Ozs7Ozs7Ozs7d0NBTXVCLEFBQ25CO0FBQ0E7QUFDRDs7Ozs2QkFDUyxBQUNSOzZCQUNFLEFBQUM7O29CQUFEO3NCQUFBLEFBQ0U7QUFERjtBQUFBLE9BQUEsa0JBQ0UsQUFBQzs7b0JBQUQ7c0JBREYsQUFDRTtBQUFBO0FBQUE7aUJBREY7YUFBQSxBQXlGRTtBQXpGRiwwQkF5RkUsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQW1COztvQkFBbkI7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFjOztvQkFBZDtzQkFBQTtBQUFBO0FBQUEsU0FGSixBQUNFLEFBQ0UsQUFFRiw0R0FBQSxjQUFBOzRDQUFBLEFBQW1COztvQkFBbkI7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUE7QUFBQTtBQUFBLFNBTEosQUFJRSxBQUNFLEFBRUYsK0NBQUEsY0FBQTs0Q0FBQSxBQUFtQjs7b0JBQW5CO3NCQUFBLEFBQ0U7QUFERjtBQUFBLDhDQUNLLE1BQUgsQUFBUSxrRUFBUixBQUErQzs7b0JBQS9DO3NCQURGLEFBQ0UsQUFDQTtBQURBO2lEQUNxQyxLQUFyQyxBQUF5Qyw2REFBekMsQUFBZTs7b0JBQWY7c0JBRkYsQUFFRSxBQUNBO0FBREE7aURBQ2dDLEtBQWhDLEFBQW9DLDhEQUFwQyxBQUFlOztvQkFBZjtzQkFYTixBQUNFLEFBT0UsQUFHRSxBQUdKO0FBSEk7NEJBR0osY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSxnREFDTyxLQUFMLEFBQVMscUNBQVQ7O29CQUFBO3NCQUZKLEFBQ0UsQUFDRSxBQUVGO0FBRkU7MkJBRUYsY0FBQSxPQUFHLE1BQUgsQUFBUSw2QkFBNEIsUUFBcEMsQUFBMkMscUJBQTNDOztvQkFBQTtzQkFBQTtBQUFBO1NBTEosQUFDRSxBQUlFLEFBRUYsaUNBQUEsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLGdEQUNPLEtBQUwsQUFBUyxtQ0FBVDs7b0JBQUE7c0JBRkosQUFDRSxBQUNFLEFBRUY7QUFGRTsyQkFFRixjQUFBLE9BQUcsTUFBSCxBQUFRLDJCQUEwQixRQUFsQyxBQUF5QyxxQkFBekM7O29CQUFBO3NCQUFBO0FBQUE7U0FYSixBQU9FLEFBSUUsQUFFRixrQ0FBQSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEsZ0RBQ08sS0FBTCxBQUFTLHFDQUFUOztvQkFBQTtzQkFGSixBQUNFLEFBQ0UsQUFFRjtBQUZFOzJCQUVGLGNBQUEsT0FBRyxNQUFILEFBQVEsd0JBQXVCLFFBQS9CLEFBQXNDLHFCQUF0Qzs7b0JBQUE7c0JBQUE7QUFBQTtTQWpCSixBQWFFLEFBSUUsQUFFRixvQ0FBQSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEsZ0RBQ08sS0FBTCxBQUFTLG9DQUFUOztvQkFBQTtzQkFGSixBQUNFLEFBQ0UsQUFFRjtBQUZFOzJCQUVGLGNBQUEsT0FBRyxNQUFILEFBQVEsK0NBQThDLFFBQXRELEFBQTZELHFCQUE3RDs7b0JBQUE7c0JBQUE7QUFBQTtTQXZCSixBQW1CRSxBQUlFLEFBRUYsK0JBQUEsY0FBQTs0Q0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzRDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLGdEQUNPLEtBQUwsQUFBUyxvQ0FBVDs7b0JBQUE7c0JBRkosQUFDRSxBQUNFLEFBRUY7QUFGRTsyQkFFRixjQUFBLE9BQUcsTUFBSCxBQUFRLDBDQUFSOztvQkFBQTtzQkFBQTtBQUFBO1NBOUJOLEFBQ0UsQUF5QkUsQUFJRSxBQUdKLGtDQUFBLGNBQUE7NENBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTs0Q0FBQSxBQUFhOztvQkFBYjtzQkFBQTtBQUFBO0FBQUEsU0FBc0M7bUJBQUE7O29CQUFBO3NCQUF0QyxBQUFzQztBQUFBO0FBQUEsVUFBaUM7bUJBQUE7O29CQUFBO3NCQUF2RSxBQUF1RTtBQUFBO0FBQUEsVUFGM0UsQUFDRSxBQUNFLEFBRUYsd0NBQUEsY0FBQTttQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO0FBQUEsZ0RBQytCLEtBQTdCLEFBQWlDLGdFQUFqQyxBQUFlOztvQkFBZjtzQkE5SVosQUFDRSxBQXlGRSxBQWNFLEFBaUNFLEFBSUUsQUFDRSxBQU9iO0FBUGE7Ozs7OztBQXBKYSxBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rZXZpbmdyZWVuL1NpdGVzL2NvdWNoLXNpdGUifQ==