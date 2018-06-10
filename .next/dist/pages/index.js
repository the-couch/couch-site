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

function shuffle(array) {
  var currentIndex = array.length,
      temporaryValue,
      randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

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
          lineNumber: 65
        }
      }, _react2.default.createElement(_header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '3747171371',
        css: '.main.jsx-3747171371{padding-top:10px;}.contact.jsx-3747171371{position:relative;width:200px;height:200px;}.contact__email.jsx-3747171371{width:28px;}.contact__rotate.jsx-3747171371{width:133px;-webkit-animation:rotating-jsx-3747171371 8s linear infinite;animation:rotating-jsx-3747171371 8s linear infinite;left:30px;top:36px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}@media (min-width:45em){.contact.jsx-3747171371{position:fixed;width:200px;height:200px;right:80px;top:20px;}.contact__rotate.jsx-3747171371{width:165px;top:20px;left:20px;}.contact__email.jsx-3747171371{width:32px;}}.address.jsx-3747171371{max-width:70px;}.footer.jsx-3747171371{padding-top:40px;padding-bottom:50px;}@media (min-width:80em){.footer.jsx-3747171371{max-width:800px;width:100%;}.footer__wrapper.jsx-3747171371{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}}@media (min-height:1100px) and (min-width:700px){.footer__wrapper.jsx-3747171371{position:fixed;bottom:40px;width:calc(100% - 160px);}}@-webkit-keyframes rotating-jsx-3747171371{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes rotating-jsx-3747171371{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}.period.jsx-3747171371{max-width:8px;}.period.jsx-3747171371:hover{-webkit-animation:rotating-jsx-3747171371 0.5s linear infinite;animation:rotating-jsx-3747171371 0.5s linear infinite;}@media (min-width:40em){.period.jsx-3747171371{max-width:14px;}}@media (min-width:60em){.period.jsx-3747171371{max-width:18px;}}@media (min-width:80em){.period.jsx-3747171371{max-width:22px;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWtFb0IsQUFHOEIsQUFHQyxBQUtQLEFBR0MsQUFRSyxBQU9ILEFBS0QsQUFJRSxBQUdFLEFBS0MsQUFJSCxBQU9FLEFBT1EsQUFHRSxBQUliLEFBRzBCLEFBSXZCLEFBS0EsQUFLQSxXQTVFbkIsQUF1QkUsQ0FwQnNDLEFBZTNCLEVBMENiLENBakRnQixBQWdCaEIsQUFtQmdCLEFBcUJkLEFBS0EsQUFLQSxDQTFDYSxDQTNDZixBQXNDc0IsQ0FuQ1IsR0F3QkEsTUFQRyxBQXdCZixBQVcyQixHQW5EZCxDQXdCYixNQVdGLEdBbEJlLEdBaEJmLFFBaUJhLENBa0NYLFFBakNBLGNBd0JxQixPQWNyQixNQUdBLCtCQU9GLFFBM0RZLFVBQ0QsU0FDdUIsc0JBa0NBLG1GQWpDbEMsZ0NBa0NFIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rZXZpbmdyZWVuL1NpdGVzL2NvdWNoLXNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IFdpbmRvdyBmcm9tICcuLi9jb21wb25lbnRzL3dpbmRvdydcbmltcG9ydCBSZWFjdEdBIGZyb20gJ3JlYWN0LWdhJ1xuaW1wb3J0IFRlYW0gZnJvbSAnLi4vY29tcG9uZW50cy90ZWFtJ1xuXG5pbXBvcnQgQVBJIGZyb20gJy4uL2FwaS90ZWFtJ1xuXG5jb25zdCBpbml0R0EgPSAoKSA9PiB7XG4gIFJlYWN0R0EuaW5pdGlhbGl6ZSgnVUEtOTY5OTI5NTMtMScpXG59XG5jb25zdCBsb2dQYWdlVmlldyA9ICgpID0+IHtcbiAgUmVhY3RHQS5zZXQoeyBwYWdlOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgfSlcbiAgUmVhY3RHQS5wYWdldmlldyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpXG59XG5cbmZ1bmN0aW9uIHNodWZmbGUoYXJyYXkpIHtcbiAgdmFyIGN1cnJlbnRJbmRleCA9IGFycmF5Lmxlbmd0aCwgdGVtcG9yYXJ5VmFsdWUsIHJhbmRvbUluZGV4O1xuXG4gIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxlLi4uXG4gIHdoaWxlICgwICE9PSBjdXJyZW50SW5kZXgpIHtcblxuICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudC4uLlxuICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudEluZGV4KTtcbiAgICBjdXJyZW50SW5kZXggLT0gMTtcblxuICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAgICB0ZW1wb3JhcnlWYWx1ZSA9IGFycmF5W2N1cnJlbnRJbmRleF07XG4gICAgYXJyYXlbY3VycmVudEluZGV4XSA9IGFycmF5W3JhbmRvbUluZGV4XTtcbiAgICBhcnJheVtyYW5kb21JbmRleF0gPSB0ZW1wb3JhcnlWYWx1ZTtcbiAgfVxuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwbGFudE9uZTogZmFsc2UsXG4gICAgICBwbGFudFR3bzogZmFsc2VcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGluaXRHQSgpXG4gICAgbG9nUGFnZVZpZXcoKVxuICB9XG4gIHRvZ2dsZU9mZmljZSAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwbGFudE9uZTogdHJ1ZSxcbiAgICAgIHBsYW50VHdvOiB0cnVlXG4gICAgfSlcbiAgfVxuICBhdWRpbyAocGxheWluZykge1xuICAgIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0F1ZGlvJylcbiAgICBwbGF5aW5nID8gYXVkaW8ucGxheSgpIDogYXVkaW8ucGF1c2UoKVxuICB9XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBBUElcbiAgICBjb25zb2xlLmluZm8oXCIlYyBXZSdyZSB1c2luZyBOZXh0LmpzIGZvciB0aGlzIGJlY2F1c2Ugd2UgZ290IGJvcmVkXCIsICdiYWNrZ3JvdW5kOiAjMDIxOTkzOyBjb2xvcjogI2ZmZicpXG4gICAgY29uc29sZS5pbmZvKFwiJWMgVGhlIGNvZGUncyB1cCBvbiBvdXIgZ2l0OiBodHRwczovL2dpdGh1Yi5jb20vdGhlLWNvdWNoL2NvdWNoLXNpdGVcIiwgJ2JhY2tncm91bmQ6ICMwMjE5OTM7IGNvbG9yOiAjZmZmJylcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm1haW4ge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250YWN0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250YWN0X19lbWFpbCB7XG4gICAgICAgICAgICB3aWR0aDogMjhweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhY3RfX3JvdGF0ZSB7XG4gICAgICAgICAgICB3aWR0aDogMTMzcHg7XG4gICAgICAgICAgICBhbmltYXRpb246IHJvdGF0aW5nIDhzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDMwcHg7XG4gICAgICAgICAgICB0b3A6IDM2cHg7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDQ1ZW0pIHtcbiAgICAgICAgICAgIC5jb250YWN0IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgIHJpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFjdF9fcm90YXRlIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDE2NXB4O1xuICAgICAgICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgICAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFjdF9fZW1haWwge1xuICAgICAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmFkZHJlc3Mge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA3MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA4MGVtKSB7XG4gICAgICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9vdGVyX193cmFwcGVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1pbi1oZWlnaHQ6IDExMDBweCkgYW5kIChtaW4td2lkdGg6IDcwMHB4KSB7XG4gICAgICAgICAgICAuZm9vdGVyX193cmFwcGVyIHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICBib3R0b206IDQwcHg7XG4gICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNjBweCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBrZXlmcmFtZXMgcm90YXRpbmcge1xuICAgICAgICAgICAgMCUge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAucGVyaW9kIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAucGVyaW9kOmhvdmVyIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogcm90YXRpbmcgMC41cyBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA0MGVtKSB7XG4gICAgICAgICAgICAucGVyaW9kIHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogNjBlbSkge1xuICAgICAgICAgICAgLnBlcmlvZCB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMThweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDgwZW0pIHtcbiAgICAgICAgICAgIC5wZXJpb2Qge1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDIycHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGB9PC9zdHlsZT5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5wbGFudE9uZSAmJiAoPFdpbmRvdyBjbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7cGxhbnRPbmU6IGZhbHNlfSl9PjxpbWcgc3R5bGU9e3t3aWR0aDogJzEwMCUnfX0gc3JjPScvc3RhdGljL3BhbG0ucG5nJyAvPjwvV2luZG93Pil9XG4gICAgICAgICAge3RoaXMuc3RhdGUucGxhbnRUd28gJiYgKDxXaW5kb3cgY2xvc2U9eygpID0+IHRoaXMuc2V0U3RhdGUoe3BsYW50VHdvOiBmYWxzZX0pfT48aW1nIHN0eWxlPXt7d2lkdGg6ICcxMDAlJ319IHNyYz0nL3N0YXRpYy9wYXJhZGlzZS5wbmcnIC8+PC9XaW5kb3c+KX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nd3JhcHBlciBtYWluJz5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nY29udGVudCc+XG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J2NhcHMnPlRoZSBDb3VjaCBpcyBhIHNtYWxsIGJyb29rbHluIGJhc2VkIGRpZ2l0YWwgc3R1ZGlvIHRoYXQgbWFrZXMgdGhpbmdzIGZvciB0aGUgaW50ZXJuZXRcbiAgICAgICAgICAgICAgPGltZyBvbk1vdXNlT3Zlcj17KCkgPT4gdGhpcy5hdWRpbyh0cnVlKX0gb25Nb3VzZUxlYXZlPXsoKSA9PiB0aGlzLmF1ZGlvKGZhbHNlKX0gY2xhc3NOYW1lPSdwZXJpb2QnIHNyYz0nL3N0YXRpYy9DRC5wbmcnIC8+PC9oMT5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxhdWRpbyBpZD0nQXVkaW8nIHNyYz0nL3N0YXRpYy84X2JpdC5tcDMnIC8+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9Jyc+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nc21hbGwnPldlIHdhbnQgdG8gd29yayB3aXRoIHlvdS48L3A+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J2NvbnRhY3QgamNjIGFpYyBmIG1oYSc+XG4gICAgICAgICAgICAgIDxhIGhyZWY9J21haWx0bzptZWV0dXNAdGhlY291Y2gubnljJyBjbGFzc05hbWU9J2FicyB6MSBmaWxsLWEgZml0LWEnIC8+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdjb250YWN0X19yb3RhdGUgYWJzJyBzcmM9Jy9zdGF0aWMvdGV4dC5wbmcnIC8+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdjb250YWN0X19lbWFpbCcgc3JjPScvc3RhdGljL0VtYWlsLnBuZycgLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZm9vdGVyX193cmFwcGVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXIgY2FwcyBmIGZ3IGpjcyBmaWxsLXgnPlxuICAgICAgICAgICAgICB7ZGF0YS5tYXAoKHBlcnNvbiwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxUZWFtIGtleT17aX0gey4uLnBlcnNvbn0gLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhZGRyZXNzX19pbmZvIGYgYWljIGpjZSBmaWxsLXgnPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYXIgY2Fwcyc+QXZhaWxhYmxlIElSTCBAPGJyIC8+ODcgUmljaGFyZHNvbiBTdC4gU3VpdGUgNlc8YnIgLz5Ccm9va2x5biwgTlkgMTEyMTE8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHRoaXMudG9nZ2xlT2ZmaWNlKCl9PlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdhZGRyZXNzIHB4MScgc3JjPScvc3RhdGljL0FkZHJlc3MucG5nJyAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
      }), _react2.default.createElement('div', {
        className: 'jsx-3747171371',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        }
      }, this.state.plantOne && _react2.default.createElement(_window2.default, { close: function close() {
          return _this2.setState({ plantOne: false });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, _react2.default.createElement('img', { style: { width: '100%' }, src: '/static/palm.png', className: 'jsx-3747171371',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      })), this.state.plantTwo && _react2.default.createElement(_window2.default, { close: function close() {
          return _this2.setState({ plantTwo: false });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, _react2.default.createElement('img', { style: { width: '100%' }, src: '/static/paradise.png', className: 'jsx-3747171371',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-3747171371' + ' ' + 'wrapper main',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, _react2.default.createElement('section', {
        className: 'jsx-3747171371' + ' ' + 'content',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-3747171371' + ' ' + 'caps',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, 'The Couch is a small brooklyn based digital studio that makes things for the internet', _react2.default.createElement('img', { onMouseOver: function onMouseOver() {
          return _this2.audio(true);
        }, onMouseLeave: function onMouseLeave() {
          return _this2.audio(false);
        }, src: '/static/CD.png', className: 'jsx-3747171371' + ' ' + 'period',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }))), _react2.default.createElement('audio', { id: 'Audio', src: '/static/8_bit.mp3', className: 'jsx-3747171371',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        }
      }), _react2.default.createElement('section', {
        className: 'jsx-3747171371' + ' ' + '',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }, _react2.default.createElement('p', {
        className: 'jsx-3747171371' + ' ' + 'small',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, 'We want to work with you.')), _react2.default.createElement('section', {
        className: 'jsx-3747171371' + ' ' + 'contact jcc aic f mha',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        }
      }, _react2.default.createElement('a', { href: 'mailto:meetus@thecouch.nyc', className: 'jsx-3747171371' + ' ' + 'abs z1 fill-a fit-a',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }), _react2.default.createElement('img', { src: '/static/text.png', className: 'jsx-3747171371' + ' ' + 'contact__rotate abs',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }), _react2.default.createElement('img', { src: '/static/Email.png', className: 'jsx-3747171371' + ' ' + 'contact__email',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }))), _react2.default.createElement('div', {
        className: 'jsx-3747171371' + ' ' + 'footer__wrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-3747171371' + ' ' + 'footer caps f fw jcs fill-x',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, data.map(function (person, i) {
        return _react2.default.createElement(_team2.default, (0, _extends3.default)({ key: i }, person, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179
          }
        }));
      })), _react2.default.createElement('div', {
        className: 'jsx-3747171371' + ' ' + 'address__info f aic jce fill-x',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-3747171371',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }, _react2.default.createElement('p', {
        className: 'jsx-3747171371' + ' ' + 'ar caps',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, 'Available IRL @', _react2.default.createElement('br', {
        className: 'jsx-3747171371',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }), '87 Richardson St. Suite 6W', _react2.default.createElement('br', {
        className: 'jsx-3747171371',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }), 'Brooklyn, NY 11211')), _react2.default.createElement('div', { onClick: function onClick() {
          return _this2.toggleOffice();
        }, className: 'jsx-3747171371',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 186
        }
      }, _react2.default.createElement('img', { src: '/static/Address.png', className: 'jsx-3747171371' + ' ' + 'address px1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }))))));
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkxheW91dCIsIkhlYWRlciIsIldpbmRvdyIsIlJlYWN0R0EiLCJUZWFtIiwiQVBJIiwiaW5pdEdBIiwiaW5pdGlhbGl6ZSIsImxvZ1BhZ2VWaWV3Iiwic2V0IiwicGFnZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJwYWdldmlldyIsInNodWZmbGUiLCJhcnJheSIsImN1cnJlbnRJbmRleCIsImxlbmd0aCIsInRlbXBvcmFyeVZhbHVlIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwcm9wcyIsInN0YXRlIiwicGxhbnRPbmUiLCJwbGFudFR3byIsInNldFN0YXRlIiwicGxheWluZyIsImF1ZGlvIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInBsYXkiLCJwYXVzZSIsImRhdGEiLCJjb25zb2xlIiwiaW5mbyIsIndpZHRoIiwibWFwIiwicGVyc29uIiwiaSIsInRvZ2dsZU9mZmljZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEFBQVM7Ozs7QUFDVCxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPOzs7O0FBQ1AsQUFBTyxBQUFVOzs7O0FBRWpCLEFBQU8sQUFBUzs7Ozs7Ozs7O0FBRWhCLElBQU0sU0FBUyxTQUFULEFBQVMsU0FBTSxBQUNuQjtvQkFBQSxBQUFRLFdBQVIsQUFBbUIsQUFDcEI7QUFGRDtBQUdBLElBQU0sY0FBYyxTQUFkLEFBQWMsY0FBTSxBQUN4QjtvQkFBQSxBQUFRLElBQUksRUFBRSxNQUFNLE9BQUEsQUFBTyxTQUEzQixBQUFZLEFBQXdCLEFBQ3BDO29CQUFBLEFBQVEsU0FBUyxPQUFBLEFBQU8sU0FBeEIsQUFBaUMsQUFDbEM7QUFIRDs7QUFLQSxTQUFBLEFBQVMsUUFBVCxBQUFpQixPQUFPLEFBQ3RC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