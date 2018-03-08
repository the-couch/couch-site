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

      var newArray = shuffle(data);
      console.info("%c We're using Next.js for this because we got bored", 'background: #021993; color: #fff');
      console.info("%c The code's up on our git: https://github.com/the-couch/couch-site", 'background: #021993; color: #fff');
      return _react2.default.createElement(_layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement(_header2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }), _react2.default.createElement(_style2.default, {
        styleId: '290268616',
        css: '.main.jsx-290268616{padding-top:10px;}.contact.jsx-290268616{position:relative;width:200px;height:200px;}.contact__email.jsx-290268616{width:28px;}.contact__rotate.jsx-290268616{width:133px;-webkit-animation:rotating-jsx-290268616 8s linear infinite;animation:rotating-jsx-290268616 8s linear infinite;left:30px;top:36px;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);}@media (min-width:45em){.contact.jsx-290268616{position:fixed;width:200px;height:200px;right:80px;top:20px;}.contact__rotate.jsx-290268616{width:165px;top:20px;left:20px;}.contact__email.jsx-290268616{width:32px;}}.address.jsx-290268616{max-width:70px;}.footer.jsx-290268616{padding-top:40px;padding-bottom:50px;}@media (min-width:80em){.footer.jsx-290268616{max-width:800px;width:100%;}.footer__wrapper.jsx-290268616{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}}@media (min-height:900px) and (min-width:700px){.footer__wrapper.jsx-290268616{position:fixed;bottom:40px;width:calc(100% - 160px);}}@-webkit-keyframes rotating-jsx-290268616{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes rotating-jsx-290268616{0%{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}100%{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}.period.jsx-290268616{max-width:8px;}.period.jsx-290268616:hover{-webkit-animation:rotating-jsx-290268616 0.5s linear infinite;animation:rotating-jsx-290268616 0.5s linear infinite;}@media (min-width:40em){.period.jsx-290268616{max-width:14px;}}@media (min-width:60em){.period.jsx-290268616{max-width:18px;}}@media (min-width:80em){.period.jsx-290268616{max-width:22px;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1Fb0IsQUFHOEIsQUFHQyxBQUtQLEFBR0MsQUFRSyxBQU9ILEFBS0QsQUFJRSxBQUdFLEFBS0MsQUFJSCxBQU9FLEFBT1EsQUFHRSxBQUliLEFBRzBCLEFBSXZCLEFBS0EsQUFLQSxXQTVFbkIsQUF1QkUsQ0FwQnNDLEFBZTNCLEVBMENiLENBakRnQixBQWdCaEIsQUFtQmdCLEFBcUJkLEFBS0EsQUFLQSxDQTFDYSxDQTNDZixBQXNDc0IsQ0FuQ1IsR0F3QkEsTUFQRyxBQXdCZixBQVcyQixHQW5EZCxDQXdCYixNQVdGLEdBbEJlLEdBaEJmLFFBaUJhLENBa0NYLFFBakNBLGNBd0JxQixPQWNyQixNQUdBLDZCQU9GLFFBM0RZLFVBQ0QsU0FDdUIsd0JBa0NBLGlGQWpDbEMsa0NBa0NFIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rZXZpbmdyZWVuL1NpdGVzL2NvdWNoLXNpdGUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uL2NvbXBvbmVudHMvaGVhZGVyJ1xuaW1wb3J0IFdpbmRvdyBmcm9tICcuLi9jb21wb25lbnRzL3dpbmRvdydcbmltcG9ydCBSZWFjdEdBIGZyb20gJ3JlYWN0LWdhJ1xuaW1wb3J0IFRlYW0gZnJvbSAnLi4vY29tcG9uZW50cy90ZWFtJ1xuXG5pbXBvcnQgQVBJIGZyb20gJy4uL2FwaS90ZWFtJ1xuXG5jb25zdCBpbml0R0EgPSAoKSA9PiB7XG4gIFJlYWN0R0EuaW5pdGlhbGl6ZSgnVUEtOTY5OTI5NTMtMScpXG59XG5jb25zdCBsb2dQYWdlVmlldyA9ICgpID0+IHtcbiAgUmVhY3RHQS5zZXQoeyBwYWdlOiB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgfSlcbiAgUmVhY3RHQS5wYWdldmlldyh3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUpXG59XG5cbmZ1bmN0aW9uIHNodWZmbGUoYXJyYXkpIHtcbiAgdmFyIGN1cnJlbnRJbmRleCA9IGFycmF5Lmxlbmd0aCwgdGVtcG9yYXJ5VmFsdWUsIHJhbmRvbUluZGV4O1xuXG4gIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxlLi4uXG4gIHdoaWxlICgwICE9PSBjdXJyZW50SW5kZXgpIHtcblxuICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudC4uLlxuICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudEluZGV4KTtcbiAgICBjdXJyZW50SW5kZXggLT0gMTtcblxuICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAgICB0ZW1wb3JhcnlWYWx1ZSA9IGFycmF5W2N1cnJlbnRJbmRleF07XG4gICAgYXJyYXlbY3VycmVudEluZGV4XSA9IGFycmF5W3JhbmRvbUluZGV4XTtcbiAgICBhcnJheVtyYW5kb21JbmRleF0gPSB0ZW1wb3JhcnlWYWx1ZTtcbiAgfVxuXG4gIHJldHVybiBhcnJheTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwbGFudE9uZTogZmFsc2UsXG4gICAgICBwbGFudFR3bzogZmFsc2VcbiAgICB9XG4gIH1cbiAgY29tcG9uZW50RGlkTW91bnQgKCkge1xuICAgIGluaXRHQSgpXG4gICAgbG9nUGFnZVZpZXcoKVxuICB9XG4gIHRvZ2dsZU9mZmljZSAoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBwbGFudE9uZTogdHJ1ZSxcbiAgICAgIHBsYW50VHdvOiB0cnVlXG4gICAgfSlcbiAgfVxuICBhdWRpbyAocGxheWluZykge1xuICAgIGNvbnN0IGF1ZGlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ0F1ZGlvJylcbiAgICBwbGF5aW5nID8gYXVkaW8ucGxheSgpIDogYXVkaW8ucGF1c2UoKVxuICB9XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBkYXRhIH0gPSBBUElcbiAgICBjb25zdCBuZXdBcnJheSA9IHNodWZmbGUoZGF0YSlcbiAgICBjb25zb2xlLmluZm8oXCIlYyBXZSdyZSB1c2luZyBOZXh0LmpzIGZvciB0aGlzIGJlY2F1c2Ugd2UgZ290IGJvcmVkXCIsICdiYWNrZ3JvdW5kOiAjMDIxOTkzOyBjb2xvcjogI2ZmZicpXG4gICAgY29uc29sZS5pbmZvKFwiJWMgVGhlIGNvZGUncyB1cCBvbiBvdXIgZ2l0OiBodHRwczovL2dpdGh1Yi5jb20vdGhlLWNvdWNoL2NvdWNoLXNpdGVcIiwgJ2JhY2tncm91bmQ6ICMwMjE5OTM7IGNvbG9yOiAjZmZmJylcbiAgICByZXR1cm4gKFxuICAgICAgPExheW91dD5cbiAgICAgICAgPEhlYWRlciAvPlxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgLm1haW4ge1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250YWN0IHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5jb250YWN0X19lbWFpbCB7XG4gICAgICAgICAgICB3aWR0aDogMjhweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNvbnRhY3RfX3JvdGF0ZSB7XG4gICAgICAgICAgICB3aWR0aDogMTMzcHg7XG4gICAgICAgICAgICBhbmltYXRpb246IHJvdGF0aW5nIDhzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDMwcHg7XG4gICAgICAgICAgICB0b3A6IDM2cHg7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDQ1ZW0pIHtcbiAgICAgICAgICAgIC5jb250YWN0IHtcbiAgICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgICB3aWR0aDogMjAwcHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XG4gICAgICAgICAgICAgIHJpZ2h0OiA4MHB4O1xuICAgICAgICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFjdF9fcm90YXRlIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDE2NXB4O1xuICAgICAgICAgICAgICB0b3A6IDIwcHg7XG4gICAgICAgICAgICAgIGxlZnQ6IDIwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuY29udGFjdF9fZW1haWwge1xuICAgICAgICAgICAgICB3aWR0aDogMzJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLmFkZHJlc3Mge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA3MHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDUwcHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA4MGVtKSB7XG4gICAgICAgICAgICAuZm9vdGVyIHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZm9vdGVyX193cmFwcGVyIHtcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1pbi1oZWlnaHQ6IDkwMHB4KSBhbmQgKG1pbi13aWR0aDogNzAwcHgpIHtcbiAgICAgICAgICAgIC5mb290ZXJfX3dyYXBwZXIge1xuICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICAgIGJvdHRvbTogNDBweDtcbiAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2MHB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgQGtleWZyYW1lcyByb3RhdGluZyB7XG4gICAgICAgICAgICAwJSB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wZXJpb2Qge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA4cHg7XG4gICAgICAgICAgfVxuICAgICAgICAgIC5wZXJpb2Q6aG92ZXIge1xuICAgICAgICAgICAgYW5pbWF0aW9uOiByb3RhdGluZyAwLjVzIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQG1lZGlhIChtaW4td2lkdGg6IDQwZW0pIHtcbiAgICAgICAgICAgIC5wZXJpb2Qge1xuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA2MGVtKSB7XG4gICAgICAgICAgICAucGVyaW9kIHtcbiAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBAbWVkaWEgKG1pbi13aWR0aDogODBlbSkge1xuICAgICAgICAgICAgLnBlcmlvZCB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogMjJweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgYH08L3N0eWxlPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIHt0aGlzLnN0YXRlLnBsYW50T25lICYmICg8V2luZG93IGNsb3NlPXsoKSA9PiB0aGlzLnNldFN0YXRlKHtwbGFudE9uZTogZmFsc2V9KX0+PGltZyBzdHlsZT17e3dpZHRoOiAnMTAwJSd9fSBzcmM9Jy9zdGF0aWMvcGFsbS5wbmcnIC8+PC9XaW5kb3c+KX1cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5wbGFudFR3byAmJiAoPFdpbmRvdyBjbG9zZT17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7cGxhbnRUd286IGZhbHNlfSl9PjxpbWcgc3R5bGU9e3t3aWR0aDogJzEwMCUnfX0gc3JjPScvc3RhdGljL3BhcmFkaXNlLnBuZycgLz48L1dpbmRvdz4pfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd3cmFwcGVyIG1haW4nPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdjb250ZW50Jz5cbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0nY2Fwcyc+VGhlIENvdWNoIGlzIGEgc21hbGwgYnJvb2tseW4gYmFzZWQgZGlnaXRhbCBzdHVkaW8gdGhhdCBtYWtlcyB0aGluZ3MgZm9yIHRoZSBpbnRlcm5ldFxuICAgICAgICAgICAgICA8aW1nIG9uTW91c2VPdmVyPXsoKSA9PiB0aGlzLmF1ZGlvKHRydWUpfSBvbk1vdXNlTGVhdmU9eygpID0+IHRoaXMuYXVkaW8oZmFsc2UpfSBjbGFzc05hbWU9J3BlcmlvZCcgc3JjPScvc3RhdGljL0NELnBuZycgLz48L2gxPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPGF1ZGlvIGlkPSdBdWRpbycgc3JjPScvc3RhdGljLzhfYml0Lm1wMycgLz5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nJz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSdzbWFsbCc+V2Ugd2FudCB0byB3b3JrIHdpdGggeW91LjwvcD5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nY29udGFjdCBqY2MgYWljIGYgbWhhJz5cbiAgICAgICAgICAgICAgPGEgaHJlZj0nbWFpbHRvOm1lZXR1c0B0aGVjb3VjaC5ueWMnIGNsYXNzTmFtZT0nYWJzIHoxIGZpbGwtYSBmaXQtYScgLz5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2NvbnRhY3RfX3JvdGF0ZSBhYnMnIHNyYz0nL3N0YXRpYy90ZXh0LnBuZycgLz5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J2NvbnRhY3RfX2VtYWlsJyBzcmM9Jy9zdGF0aWMvRW1haWwucG5nJyAvPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmb290ZXJfX3dyYXBwZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2Zvb3RlciBjYXBzIGYgZncgamNzIGZpbGwteCc+XG4gICAgICAgICAgICAgIHtuZXdBcnJheS5tYXAoKHBlcnNvbiwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxUZWFtIGtleT17aX0gey4uLnBlcnNvbn0gLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdhZGRyZXNzX19pbmZvIGYgYWljIGpjZSBmaWxsLXgnPlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0nYXIgY2Fwcyc+QXZhaWxhYmxlIElSTCBAPGJyIC8+ODcgUmljaGFyZHNvbiBTdC4gU3VpdGUgNlc8YnIgLz5Ccm9va2x5biwgTlkgMTEyMTE8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHRoaXMudG9nZ2xlT2ZmaWNlKCl9PlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSdhZGRyZXNzIHB4MScgc3JjPScvc3RhdGljL0FkZHJlc3MucG5nJyAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGF5b3V0PlxuICAgIClcbiAgfVxufVxuIl19 */\n/*@ sourceURL=pages/index.js?entry */'
      }), _react2.default.createElement('div', {
        className: 'jsx-290268616',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        }
      }, this.state.plantOne && _react2.default.createElement(_window2.default, { close: function close() {
          return _this2.setState({ plantOne: false });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      }, _react2.default.createElement('img', { style: { width: '100%' }, src: '/static/palm.png', className: 'jsx-290268616',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        }
      })), this.state.plantTwo && _react2.default.createElement(_window2.default, { close: function close() {
          return _this2.setState({ plantTwo: false });
        }, __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      }, _react2.default.createElement('img', { style: { width: '100%' }, src: '/static/paradise.png', className: 'jsx-290268616',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        }
      })), _react2.default.createElement('div', {
        className: 'jsx-290268616' + ' ' + 'wrapper main',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        }
      }, _react2.default.createElement('section', {
        className: 'jsx-290268616' + ' ' + 'content',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        }
      }, _react2.default.createElement('h1', {
        className: 'jsx-290268616' + ' ' + 'caps',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        }
      }, 'The Couch is a small brooklyn based digital studio that makes things for the internet', _react2.default.createElement('img', { onMouseOver: function onMouseOver() {
          return _this2.audio(true);
        }, onMouseLeave: function onMouseLeave() {
          return _this2.audio(false);
        }, src: '/static/CD.png', className: 'jsx-290268616' + ' ' + 'period',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        }
      }))), _react2.default.createElement('audio', { id: 'Audio', src: '/static/8_bit.mp3', className: 'jsx-290268616',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        }
      }), _react2.default.createElement('section', {
        className: 'jsx-290268616' + ' ' + '',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        }
      }, _react2.default.createElement('p', {
        className: 'jsx-290268616' + ' ' + 'small',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        }
      }, 'We want to work with you.')), _react2.default.createElement('section', {
        className: 'jsx-290268616' + ' ' + 'contact jcc aic f mha',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        }
      }, _react2.default.createElement('a', { href: 'mailto:meetus@thecouch.nyc', className: 'jsx-290268616' + ' ' + 'abs z1 fill-a fit-a',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        }
      }), _react2.default.createElement('img', { src: '/static/text.png', className: 'jsx-290268616' + ' ' + 'contact__rotate abs',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 173
        }
      }), _react2.default.createElement('img', { src: '/static/Email.png', className: 'jsx-290268616' + ' ' + 'contact__email',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        }
      }))), _react2.default.createElement('div', {
        className: 'jsx-290268616' + ' ' + 'footer__wrapper',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 177
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-290268616' + ' ' + 'footer caps f fw jcs fill-x',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 178
        }
      }, newArray.map(function (person, i) {
        return _react2.default.createElement(_team2.default, (0, _extends3.default)({ key: i }, person, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          }
        }));
      })), _react2.default.createElement('div', {
        className: 'jsx-290268616' + ' ' + 'address__info f aic jce fill-x',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        }
      }, _react2.default.createElement('div', {
        className: 'jsx-290268616',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        }
      }, _react2.default.createElement('p', {
        className: 'jsx-290268616' + ' ' + 'ar caps',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }, 'Available IRL @', _react2.default.createElement('br', {
        className: 'jsx-290268616',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }), '87 Richardson St. Suite 6W', _react2.default.createElement('br', {
        className: 'jsx-290268616',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        }
      }), 'Brooklyn, NY 11211')), _react2.default.createElement('div', { onClick: function onClick() {
          return _this2.toggleOffice();
        }, className: 'jsx-290268616',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        }
      }, _react2.default.createElement('img', { src: '/static/Address.png', className: 'jsx-290268616' + ' ' + 'address px1',
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        }
      }))))));
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkNvbXBvbmVudCIsIkxheW91dCIsIkhlYWRlciIsIldpbmRvdyIsIlJlYWN0R0EiLCJUZWFtIiwiQVBJIiwiaW5pdEdBIiwiaW5pdGlhbGl6ZSIsImxvZ1BhZ2VWaWV3Iiwic2V0IiwicGFnZSIsIndpbmRvdyIsImxvY2F0aW9uIiwicGF0aG5hbWUiLCJwYWdldmlldyIsInNodWZmbGUiLCJhcnJheSIsImN1cnJlbnRJbmRleCIsImxlbmd0aCIsInRlbXBvcmFyeVZhbHVlIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwcm9wcyIsInN0YXRlIiwicGxhbnRPbmUiLCJwbGFudFR3byIsInNldFN0YXRlIiwicGxheWluZyIsImF1ZGlvIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInBsYXkiLCJwYXVzZSIsImRhdGEiLCJuZXdBcnJheSIsImNvbnNvbGUiLCJpbmZvIiwid2lkdGgiLCJtYXAiLCJwZXJzb24iLCJpIiwidG9nZ2xlT2ZmaWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBUzs7OztBQUNULEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87Ozs7QUFDUCxBQUFPLEFBQVU7Ozs7QUFFakIsQUFBTyxBQUFTOzs7Ozs7Ozs7QUFFaEIsSUFBTSxTQUFTLFNBQVQsQUFBUyxTQUFNLEFBQ25CO29CQUFBLEFBQVEsV0FBUixBQUFtQixBQUNwQjtBQUZEO0FBR0EsSUFBTSxjQUFjLFNBQWQsQUFBYyxjQUFNLEFBQ3hCO29CQUFBLEFBQVEsSUFBSSxFQUFFLE1BQU0sT0FBQSxBQUFPLFNBQTNCLEFBQVksQUFBd0IsQUFDcEM7b0JBQUEsQUFBUSxTQUFTLE9BQUEsQUFBTyxTQUF4QixBQUFpQyxBQUNsQztBQUhEOztBQUtBLFNBQUEsQUFBUyxRQUFULEFBQWlC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QSxBQUFtQjs7b0JBQW5CO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7MkNBQUEsQUFBYTs7b0JBQWI7c0JBQUE7QUFBQTtBQUFBLFNBUEosQUFNRSxBQUNFLEFBRUYsK0NBQUEsY0FBQTsyQ0FBQSxBQUFtQjs7b0JBQW5CO3NCQUFBLEFBQ0U7QUFERjtBQUFBLDhDQUNLLE1BQUgsQUFBUSxpRUFBUixBQUErQzs7b0JBQS9DO3NCQURGLEFBQ0UsQUFDQTtBQURBO2lEQUNxQyxLQUFyQyxBQUF5Qyx1REFBekMsQUFBZTs7b0JBQWY7c0JBRkYsQUFFRSxBQUNBO0FBREE7aURBQ2dDLEtBQWhDLEFBQW9DLHdEQUFwQyxBQUFlOztvQkFBZjtzQkFmTixBQUdFLEFBU0UsQUFHRSxBQUdKO0FBSEk7NEJBR0osY0FBQTsyQ0FBQSxBQUFlOztvQkFBZjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxjQUFBOzJDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0c7QUFESDtBQUFBLGtCQUNHLEFBQVMsSUFBSSxVQUFBLEFBQUMsUUFBRCxBQUFTLEdBQVQ7K0JBQ1osQUFBQyx1REFBSyxLQUFOLEFBQVcsS0FBWCxBQUFrQjs7c0JBQWxCO3dCQURZLEFBQ1o7QUFBQTtBQUFBLFVBQUE7QUFITixBQUNFLEFBQ0csQUFJSCwyQkFBQSxjQUFBOzJDQUFBLEFBQWU7O29CQUFmO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7bUJBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLGNBQUE7MkNBQUEsQUFBYTs7b0JBQWI7c0JBQUE7QUFBQTtBQUFBLFNBQXNDO21CQUFBOztvQkFBQTtzQkFBdEMsQUFBc0M7QUFBQTtBQUFBLFVBQWdDO21CQUFBOztvQkFBQTtzQkFBdEUsQUFBc0U7QUFBQTtBQUFBLFVBRjFFLEFBQ0UsQUFDRSxBQUVGLHdDQUFBLGNBQUEsU0FBSyxTQUFTLG1CQUFBO2lCQUFNLE9BQU4sQUFBTSxBQUFLO0FBQXpCLHNCQUFBOztvQkFBQTtzQkFBQSxBQUNFO0FBREY7Z0RBQytCLEtBQTdCLEFBQWlDLDBEQUFqQyxBQUFlOztvQkFBZjtzQkEzSFosQUFDRSxBQTZGRSxBQWtCRSxBQU1FLEFBSUUsQUFDRSxBQU9iO0FBUGE7Ozs7OztBQXZKYSxBIiwiZmlsZSI6ImluZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9rZXZpbmdyZWVuL1NpdGVzL2NvdWNoLXNpdGUifQ==