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
      return _react2.default.createElement(_layout2.default, null, _react2.default.createElement(_header2.default, null), _react2.default.createElement(_style2.default, {
        styleId: '2705749386',
        css: ['.main.jsx-2705749386{padding-top:50px;}', '.contact.jsx-2705749386{padding-top:40px;}', '.footer.jsx-2705749386{padding-top:40px;}']
      }), _react2.default.createElement('div', {
        className: 'jsx-2705749386' + ' ' + 'wrapper main'
      }, _react2.default.createElement('section', {
        className: 'jsx-2705749386' + ' ' + 'content'
      }, _react2.default.createElement('p', {
        className: 'jsx-2705749386'
      }, 'We\'re a small digital studio based in Williamsburg, Brooklyn. We don\'t make furniture, we make websites (and apps and other things that live on the internet).'), _react2.default.createElement('p', {
        className: 'jsx-2705749386'
      }, 'That being said \u2013 we do think that websites are a lot like couches. You don\'t buy one everyday. So when you do, you\'re probably expecting it to last.')), _react2.default.createElement('section', {
        className: 'jsx-2705749386' + ' ' + 'contact'
      }, _react2.default.createElement('p', {
        className: 'jsx-2705749386'
      }, 'We want to work with you. Email ', _react2.default.createElement('a', { href: 'mailto:meetus@thecouch.nyc', className: 'jsx-2705749386'
      }, 'meetus@thecouch.nyc'), ' or call (347) 766\u20137033.')), _react2.default.createElement('section', {
        className: 'jsx-2705749386' + ' ' + 'footer'
      }, _react2.default.createElement('p', {
        className: 'jsx-2705749386' + ' ' + 'small'
      }, _react2.default.createElement('a', { href: 'http://districtdomain.com', target: '_blank', className: 'jsx-2705749386'
      }, 'Kevin Green \uD83C\uDF5D'), ' - ', _react2.default.createElement('a', { href: 'http://sam-faulkner.com', target: '_blank', className: 'jsx-2705749386'
      }, 'Sam Faulkner \uD83D\uDD2E'), ' - ', _react2.default.createElement('a', { href: 'http://zeuslives.com', target: '_blank', className: 'jsx-2705749386'
      }, 'Costa Damaskos \uD83E\uDD14'), ' - ', _react2.default.createElement('a', { href: 'https://www.youtube.com/watch?v=Mw1tN-zfR9c', className: 'jsx-2705749386'
      }, 'Abby Muir \uD83D\uDC80'), ' - ', _react2.default.createElement('a', { href: 'http://estrattonbailey.com/', className: 'jsx-2705749386'
      }, 'Eric Bailey \uD83C\uDF7A')))));
    }
  }]);

  return _class;
}(_react.Component);

exports.default = _class;