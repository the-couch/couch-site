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
          lineNumber: 46
        }
      }, _react2.default.createElement(_header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '290268616',
        css: '.main.jsx-290268616{padding-top:10px;}.contact.jsx-290268616{position:relative;width:200px;height:200px;}.contact__email.jsx-290268616{width:28px;}.contact__rotate.jsx-290268616{width:133px;-webkit-animation:rotating-jsx-290268616 8s linear infinite;animation:rotating-jsx-290268616 8s linear infinite;left:30px;top:36px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}@media (min-width:45em){.contact.jsx-290268616{position:fixed;width:200px;height:200px;right:80px;top:20px;}.contact__rotate.jsx-290268616{width:165px;top:20px;left:20px;}.contact__email.jsx-290268616{width:32px;}}.address.jsx-290268616{max-width:70px;}.footer.jsx-290268616{padding-top:40px;padding-bottom:50px;}@media (min-width:80em){.footer.jsx-290268616{max-width:800px;width:100%;}.footer__wrapper.jsx-290268616{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}}@media (min-height:900px) and (min-width:700px){.footer__wrapper.jsx-290268616{position:fixed;bottom:40px;width:calc(100% - 160px);}}@-webkit-keyframes rotating-jsx-290268616{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes rotating-jsx-290268616{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}.period.jsx-290268616{max-width:8px;}.period.jsx-290268616:hover{-webkit-animation:rotating-jsx-290268616 0.5s linear infinite;animation:rotating-jsx-290268616 0.5s linear infinite;}@media (min-width:40em){.period.jsx-290268616{max-width:14px;}}@media (min-width:60em){.period.jsx-290268616{max-width:18px;}}@media (min-width:80em){.period.jsx-290268616{max-width:22px;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStDb0IsQUFHOEIsQUFHQyxBQUtQLEFBR0MsQUFRSyxBQU9ILEFBS0QsQUFJRSxBQUdFLEFBS0MsQUFJSCxBQU9FLEFBT1EsQUFHRSxBQUliLEFBRzBCLEFBSXZCLEFBS0EsQUFLQSxXQTVFbkIsQUF1QkUsQ0FwQnNDLEFBZTNCLEVBMENiLENBakRnQixBQWdCaEIsQUFtQmdCLEFBcUJkLEFBS0EsQUFLQSxDQTFDYSxDQTNDZixBQXNDc0IsQ0FuQ1IsR0F3QkEsTUFQRyxBQXdCZixBQVcyQixHQW5EZCxDQXdCYixNQVdGLEdBbEJlLEdBaEJmLFFBaUJhLENBa0NYLFFBakNBLGNBd0JxQixPQWNyQixNQUdBLDZCQU9GLFFBM0RZLFVBQ0QsU0FDdUIsd0JBa0NBLGlGQWpDbEMsa0NBa0NFIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rZXZpbmdyZWVuL1NpdGVzL2NvdWNoLXNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IFdpbmRvdyBmcm9tICcuLi9jb21wb25lbnRzL3dpbmRvdydcbmltcG9ydCBSZWFjdEdBIGZyb20gJ3JlYWN0LWdhJ1xuaW1wb3J0IFRlYW0gZnJvbSAnLi4vY29tcG9uZW50cy90ZWFtJ1xuXG5pbXBvcnQgQVBJIGZyb20gJy4uL2FwaS90ZWFtJ1xuXG5jb25zdCBpbml0R0EgPSAoKSA9PiB7XG4gIFJlYWN0R0EuaW5pdGlhbGl6ZSgnVUEtOTY5OTI5NTMtMScpXG59XG5jb25zdCBsb2dQYWdlVmlldyA9ICgpID0+IHtcbiAgUmVhY3RHQS5zZXQoeyBwYWdlOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgfSlcbiAgUmVhY3RHQS5wYWdldmlldyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IgKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGxhbnRPbmU6IGZhbHNlLFxuICAgICAgcGxhbnRUd286IGZhbHNlXG4gICAgfVxuICB9XG4gIGNvbXBvbmVudERpZE1vdW50ICgpIHtcbiAgICBpbml0R0EoKVxuICAgIGxvZ1BhZ2VWaWV3KClcbiAgfVxuICB0b2dnbGVPZmZpY2UgKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgcGxhbnRPbmU6IHRydWUsXG4gICAgICBwbGFudFR3bzogdHJ1ZVxuICAgIH0pXG4gIH1cbiAgYXVkaW8gKHBsYXlpbmcpIHtcbiAgICBjb25zdCBhdWRpbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdBdWRpbycpXG4gICAgcGxheWluZyA/IGF1ZGlvLnBsYXkoKSA6IGF1ZGlvLnBhdXNlKClcbiAgfVxuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgZGF0YSB9ID0gQVBJXG4gICAgY29uc29sZS5pbmZvKFwiJWMgV2UncmUgdXNpbmcgTmV4dC5qcyBmb3IgdGhpcyBiZWNhdXNlIHdlIGdvdCBib3JlZFwiLCAnYmFja2dyb3VuZDogIzAyMTk5MzsgY29sb3I6ICNmZmYnKVxuICAgIGNvbnNvbGUuaW5mbyhcIiVjIFRoZSBjb2RlJ3MgdXAgb24gb3VyIGdpdDogaHR0cHM6Ly9naXRodWIuY29tL3RoZS1jb3VjaC9jb3VjaC1zaXRlXCIsICdiYWNrZ3JvdW5kOiAjMDIxOTkzOyBjb2xvcjogI2ZmZicpXG4gICAgcmV0dXJuIChcbiAgICAgIDxMYXlvdXQ+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIC5tYWluIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFjdCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY29udGFjdF9fZW1haWwge1xuICAgICAgICAgICAgd2lkdGg6IDI4cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250YWN0X19yb3RhdGUge1xuICAgICAgICAgICAgd2lkdGg6IDEzM3B4O1xuICAgICAgICAgICAgYW5pbWF0aW9uOiByb3RhdGluZyA4cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgICBsZWZ0OiAzMHB4O1xuICAgICAgICAgICAgdG9wOiAzNnB4O1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0NWVtKSB7XG4gICAgICAgICAgICAuY29udGFjdCB7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xuICAgICAgICAgICAgICByaWdodDogODBweDtcbiAgICAgICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhY3RfX3JvdGF0ZSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxNjVweDtcbiAgICAgICAgICAgICAgdG9wOiAyMHB4O1xuICAgICAgICAgICAgICBsZWZ0OiAyMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNvbnRhY3RfX2VtYWlsIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5hZGRyZXNzIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogNzBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogODBlbSkge1xuICAgICAgICAgICAgLmZvb3RlciB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmZvb3Rlcl9fd3JhcHBlciB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtaW4taGVpZ2h0OiA5MDBweCkgYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICAgICAgICAgICAuZm9vdGVyX193cmFwcGVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICBib3R0b206IDQwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNjBweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBrZXlmcmFtZXMgcm90YXRpbmcge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAucGVyaW9kIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucGVyaW9kOmhvdmVyIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcm90YXRpbmcgMC41cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0MGVtKSB7XG4gICAgICAgICAgICAucGVyaW9kIHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjBlbSkge1xuICAgICAgICAgICAgLnBlcmlvZCB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDgwZW0pIHtcbiAgICAgICAgICAgIC5wZXJpb2Qge1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5wbGFudE9uZSAmJiAoPFdpbmRvdyBjbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7cGxhbnRPbmU6IGZhbHNlfSl9PjxpbWcgc3R5bGU9e3t3aWR0aDogJzEwMCUnfX0gc3JjPScvc3RhdGljL3BhbG0ucG5nJyAvPjwvV2luZG93Pil9XG4gICAgICAgICAge3RoaXMuc3RhdGUucGxhbnRUd28gJiYgKDxXaW5kb3cgY2xvc2U9eygpID0+IHRoaXMuc2V0U3RhdGUoe3BsYW50VHdvOiBmYWxzZX0pfT48aW1nIHN0eWxlPXt7d2lkdGg6ICcxMDAlJ319IHNyYz0nL3N0YXRpYy9wYXJhZGlzZS5wbmcnIC8+PC9XaW5kb3c+KX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd3JhcHBlciBtYWluJz5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nY29udGVudCc+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2NhcHMnPlRoZSBDb3VjaCBpcyBhIHNtYWxsIGJyb29rbHluIGJhc2VkIGRpZ2l0YWwgc3R1ZGlvIHRoYXQgbWFrZXMgdGhpbmdzIGZvciB0aGUgaW50ZXJuZXRcbiAgICAgICAgICAgICAgPGltZyBvbk1vdXNlT3Zlcj17KCkgPT4gdGhpcy5hdWRpbyh0cnVlKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiB0aGlzLmF1ZGlvKGZhbHNlKX0gY2xhc3NOYW1lPSdwZXJpb2QnIHNyYz0nL3N0YXRpYy9DRC5wbmcnIC8+PC9oMT5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxhdWRpbyBpZD0nQXVkaW8nIHNyYz0nL3N0YXRpYy84X2JpdC5tcDMnIC8+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nc21hbGwnPldlIHdhbnQgdG8gd29yayB3aXRoIHlvdS48L3A+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRhY3QgamNjIGFpYyBmIG1oYSc+XG4gICAgICAgICAgICAgIDxhIGhyZWY9J21haWx0bzptZWV0dXNAdGhlY291Y2gubnljJyBjbGFzc05hbWU9J2FicyB6MSBmaWxsLWEgZml0LWEnIC8+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdjb250YWN0X19yb3RhdGUgYWJzJyBzcmM9Jy9zdGF0aWMvdGV4dC5wbmcnIC8+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdjb250YWN0X19lbWFpbCcgc3JjPScvc3RhdGljL0VtYWlsLnBuZycgLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX193cmFwcGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXIgY2FwcyBmIGZ3IGpjcyBmaWxsLXgnPlxuICAgICAgICAgICAgICB7ZGF0YS5tYXAoKHBlcnNvbiwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxUZWFtIGtleT17aX0gey4uLnBlcnNvbn0gLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhZGRyZXNzX19pbmZvIGYgYWljIGpjZSBmaWxsLXgnPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYXIgY2Fwcyc+QXZhaWxhYmxlIElSTCBAPGJyIC8+ODcgUmljaGFyZHNvbiBTdC4gU3VpdGUgNlc8YnIgLz5Ccm9va2x5biwgTlkgMTEyMTE8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHRoaXMudG9nZ2xlT2ZmaWNlKCl9PlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdhZGRyZXNzIHB4MScgc3JjPScvc3RhdGljL0FkZHJlc3MucG5nJyAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
      }), _react2.default.createElement('div', {
        className: 'jsx-290268616',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 139
        }
      }, this.state.plantOne && _react2.default.createElement(_window2.default, { close: function close() {
          return _this2.setState({ plantOne: false });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      }, _react2.default.createElement('img', { style: { width: '100%' }, src: '/static/palm.png', className: 'jsx-290268616',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 140
        }
      })), this.state.plantTwo && _react2.default.createElement(_window2.default, { close: function close() {
          return _this2.setState({ plantTwo: false });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      }, _react2.default.createElement('img', { style: { width: '100%' }, src: '/static/paradise.png', className: 'jsx-290268616',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-290268616' + ' ' + 'wrapper main',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        }
      }, _react2.default.createElement('section', {
        className: 'jsx-290268616' + ' ' + 'content',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-290268616' + ' ' + 'caps',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        }
      }, 'The Couch is a small brooklyn based digital studio that makes things for the internet', _react2.default.createElement('img', { onMouseOver: function onMouseOver() {
          return _this2.audio(true);
        }, onMouseLeave: function onMouseLeave() {
          return _this2.audio(false);
        }, src: '/static/CD.png', className: 'jsx-290268616' + ' ' + 'period',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        }
      }))), _react2.default.createElement('audio', { id: 'Audio', src: '/static/8_bit.mp3', className: 'jsx-290268616',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147
        }
      }), _react2.default.createElement('section', {
        className: 'jsx-290268616' + ' ' + '',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        }
      }, _react2.default.createElement('p', {
        className: 'jsx-290268616' + ' ' + 'small',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        }
      }, 'We want to work with you.')), _react2.default.createElement('section', {
        className: 'jsx-290268616' + ' ' + 'contact jcc aic f mha',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        }
      }, _react2.default.createElement('a', { href: 'mailto:meetus@thecouch.nyc', className: 'jsx-290268616' + ' ' + 'abs z1 fill-a fit-a',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        }
      }), _react2.default.createElement('img', { src: '/static/text.png', className: 'jsx-290268616' + ' ' + 'contact__rotate abs',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        }
      }), _react2.default.createElement('img', { src: '/static/Email.png', className: 'jsx-290268616' + ' ' + 'contact__email',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        }
      }))), _react2.default.createElement('div', {
        className: 'jsx-290268616' + ' ' + 'footer__wrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-290268616' + ' ' + 'footer caps f fw jcs fill-x',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, data.map(function (person, i) {
        return _react2.default.createElement(_team2.default, (0, _extends3.default)({ key: i }, person, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          }
        }));
      })), _react2.default.createElement('div', {
        className: 'jsx-290268616' + ' ' + 'address__info f aic jce fill-x',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-290268616',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, _react2.default.createElement('p', {
        className: 'jsx-290268616' + ' ' + 'ar caps',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }, 'Available IRL @', _react2.default.createElement('br', {
        className: 'jsx-290268616',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }), '87 Richardson St. Suite 6W', _react2.default.createElement('br', {
        className: 'jsx-290268616',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }), 'Brooklyn, NY 11211')), _react2.default.createElement('div', { onClick: function onClick() {
          return _this2.toggleOffice();
        }, className: 'jsx-290268616',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, _react2.default.createElement('img', { src: '/static/Address.png', className: 'jsx-290268616' + ' ' + 'address px1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }))))));
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkxheW91dCIsIkhlYWRlciIsIldpbmRvdyIsIlJlYWN0R0EiLCJUZWFtIiwiQVBJIiwiaW5pdEdBIiwiaW5pdGlhbGl6ZSIsImxvZ1BhZ2VWaWV3Iiwic2V0IiwicGFnZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJwYWdldmlldyIsInByb3BzIiwic3RhdGUiLCJwbGFudE9uZSIsInBsYW50VHdvIiwic2V0U3RhdGUiLCJwbGF5aW5nIiwiYXVkaW8iLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwicGxheSIsInBhdXNlIiwiZGF0YSIsImNvbnNvbGUiLCJpbmZvIiwid2lkdGgiLCJtYXAiLCJwZXJzb24iLCJpIiwidG9nZ2xlT2ZmaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7OztBQUNULEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVU7Ozs7QUFFakIsQUFBTyxBQUFTOzs7Ozs7Ozs7QUFFaEIsSUFBTSxTQUFTLFNBQVQsQUFBUyxTQUFNLEFBQ25CO29CQUFBLEFBQVEsV0FBUixBQUFtQixBQUNwQjtBQUZEO0FBR0EsSUFBTSxjQUFjLFNBQWQsQUFBYyxjQUFNLEFBQ3hCO29CQUFBLEFBQVEsSUFBSSxFQUFFLE1BQU0sT0FBQSxBQUFPLFNBQTNCLEFBQVksQUFBd0IsQUFDcEM7b0JBQUEsQUFBUSxTQUFTLE9BQUEsQUFBTyxTQUF4QixBQUFpQyxBQUNsQztBQUhEOzs7a0NBTUU7O2tCQUFBLEFBQWEsT0FBTzt3Q0FBQTs7c0lBQUEsQUFDWixBQUVOOztVQUFBLEFBQUs7Z0JBQVEsQUFDRCxBQUNWO2dCQUxnQixBQUdsQixBQUFhLEFBRUQ7QUFGQyxBQUNYO1dBR0g7Ozs7O3dDQUNvQixBQUNuQjtBQUNBO0FBQ0Q7Ozs7bUNBQ2UsQUFDZDtXQUFBLEFBQUs7a0JBQVMsQUFDRixBQUNWO2tCQUZGLEFBQWMsQUFFRixBQUViO0FBSmUsQUFDWjs7OzswQkFJRyxBLFNBQVMsQUFDZDtVQUFNLFFBQVEsU0FBQSxBQUFTLGVBQXZCLEFBQWMsQUFBd0IsQUFDdEM7Z0JBQVUsTUFBVixBQUFVLEFBQU0sU0FBUyxNQUF6QixBQUF5QixBQUFNLEFBQ2hDOzs7OzZCQUNTO21CQUFBOztVQUFBLEFBQ0EsT0FEQSxBQUNTLGVBRFQsQUFDQSxBQUNSOztjQUFBLEFBQVEsS0FBUixBQUFhLHdEQUFiLEFBQXFFLEFBQ3JFO2NBQUEsQUFBUSxLQUFSLEFBQWEsd0VBQWIsQUFBcUYsQUFDckY7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDOztvQkFBRDtzQkFERixBQUNFO0FBQUE7QUFBQTtpQkFERjthQUFBLEFBNkZFO0FBN0ZGLDBCQTZGRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNHO0FBREg7QUFBQSxjQUNHLEFBQUssTUFBTCxBQUFXLDRCQUFhLEFBQUMsa0NBQU8sT0FBTyxpQkFBQTtpQkFBTSxPQUFBLEFBQUssU0FBUyxFQUFDLFVBQXJCLEFBQU0sQUFBYyxBQUFXO0FBQTlDO29CQUFBO3NCQUFBLEFBQXVEO0FBQXZEO09BQUEseUNBQTRELE9BQU8sRUFBQyxPQUFiLEFBQVksQUFBUSxVQUFTLEtBQTdCLEFBQWlDLCtCQUFqQzs7b0JBQUE7c0JBRGxGLEFBQzJCLEFBQXVELEFBQy9FO0FBRCtFO2dCQUMvRSxBQUFLLE1BQUwsQUFBVyw0QkFBYSxBQUFDLGtDQUFPLE9BQU8saUJBQUE7aUJBQU0sT0FBQSxBQUFLLFNBQVMsRUFBQyxVQUFyQixBQUFNLEFBQWMsQUFBVztBQUE5QztvQkFBQTtzQkFBQSxBQUF1RDtBQUF2RDtPQUFBLHlDQUE0RCxPQUFPLEVBQUMsT0FBYixBQUFZLEFBQVEsVUFBUyxLQUE3QixBQUFpQyxtQ0FBakM7O29CQUFBO3NCQUZsRixBQUUyQixBQUF1RCxBQUNoRjtBQURnRjsyQkFDaEYsY0FBQTsyQ0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzJDQUFBLEFBQW1COztvQkFBbkI7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTsyQ0FBQSxBQUFjOztvQkFBZDtzQkFBQTtBQUFBO0FBQUEsU0FDQSxnSUFBSyxhQUFhLHVCQUFBO2lCQUFNLE9BQUEsQUFBSyxNQUFYLEFBQU0sQUFBVztBQUFuQyxXQUEwQyxjQUFjLHdCQUFBO2lCQUFNLE9BQUEsQUFBSyxNQUFYLEFBQU0sQUFBVztBQUF6RSxXQUFvRyxLQUFwRyxBQUF3RyxxREFBeEcsQUFBMkY7O29CQUEzRjtzQkFISixBQUNFLEFBQ0UsQUFDQSxBQUVGO0FBRkU7cURBRUssSUFBUCxBQUFVLFNBQVEsS0FBbEIsQUFBc0IsZ0NBQXRCOztvQkFBQTtzQkFMRixBQUtFLEFBQ0E7QUFEQTswQkFDQSxjQUFBOzJDQUFBLEFBQW1COztvQkFBbkI7c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0UsY0FBQTsyQ0FBQSxBQUFhOztvQkFBYjtzQkFBQTtBQUFBO0FBQUEsU0FQSixBQU1FLEFBQ0UsQUFFRiwrQ0FBQSxjQUFBOzJDQUFBLEFBQW1COztvQkFBbkI7c0JBQUEsQUFDRTtBQURGO0FBQUEsOENBQ0ssTUFBSCxBQUFRLGlFQUFSLEFBQStDOztvQkFBL0M7c0JBREYsQUFDRSxBQUNBO0FBREE7aURBQ3FDLEtBQXJDLEFBQXlDLHVEQUF6QyxBQUFlOztvQkFBZjtzQkFGRixBQUVFLEFBQ0E7QUFEQTtpREFDZ0MsS0FBaEMsQUFBb0Msd0RBQXBDLEFBQWU7O29CQUFmO3NCQWZOLEFBR0UsQUFTRSxBQUdFLEFBR0o7QUFISTs0QkFHSixjQUFBOzJDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7MkNBQUEsQUFBZTs7b0JBQWY7c0JBQUEsQUFDRztBQURIO0FBQUEsY0FDRyxBQUFLLElBQUksVUFBQSxBQUFDLFFBQUQsQUFBUyxHQUFUOytCQUNSLEFBQUMsdURBQUssS0FBTixBQUFXLEtBQVgsQUFBa0I7O3NCQUFsQjt3QkFEUSxBQUNSO0FBQUE7QUFBQSxVQUFBO0FBSE4sQUFDRSxBQUNHLEFBSUgsMkJBQUEsY0FBQTsyQ0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBO21CQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzJDQUFBLEFBQWE7O29CQUFiO3NCQUFBO0FBQUE7QUFBQSxTQUFzQzttQkFBQTs7b0JBQUE7c0JBQXRDLEFBQXNDO0FBQUE7QUFBQSxVQUFnQzttQkFBQTs7b0JBQUE7c0JBQXRFLEFBQXNFO0FBQUE7QUFBQSxVQUYxRSxBQUNFLEFBQ0UsQUFFRix3Q0FBQSxjQUFBLFNBQUssU0FBUyxtQkFBQTtpQkFBTSxPQUFOLEFBQU0sQUFBSztBQUF6QixzQkFBQTs7b0JBQUE7c0JBQUEsQUFDRTtBQURGO2dEQUMrQixLQUE3QixBQUFpQywwREFBakMsQUFBZTs7b0JBQWY7c0JBM0haLEFBQ0UsQUE2RkUsQUFrQkUsQUFNRSxBQUlFLEFBQ0UsQUFPYjtBQVBhOzs7Ozs7QUF0SmEsQSIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMva2V2aW5ncmVlbi9TaXRlcy9jb3VjaC1zaXRlIn0=