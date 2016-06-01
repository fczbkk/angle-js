'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var default_directions_start = 0;
var default_directions = ['right', 'topRight', 'top', 'topLeft', 'left', 'bottomLeft', 'bottom', 'bottomRight'];

/**
 * Class representing an angle.
 * @name Angle
 */

var Angle = function () {

  /**
   * Create an angle.
   * @param {Object} config
   * @param {number} config.directions_start Value with which first direction keyword will be associated.
   * @param {Array.<string>} config.directions List of direction keywords.
   */

  function Angle() {
    var _ref = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

    var _ref$directions_start = _ref.directions_start;
    var directions_start = _ref$directions_start === undefined ? default_directions_start : _ref$directions_start;
    var _ref$directions = _ref.directions;
    var directions = _ref$directions === undefined ? default_directions : _ref$directions;

    _classCallCheck(this, Angle);

    this.directions_start = directions_start;
    this.directions = directions;
  }

  /**
   * @type {number}
   */


  _createClass(Angle, [{
    key: 'toDirection',


    /**
     * Converts angle in degrees to direction keyword.
     * @param {number} angle
     * @returns {string}
     * @example (new Angle()).toDirection(90); // --> 'top'
     */
    value: function toDirection(angle) {
      angle = angle - this.directions_start;
      angle = Angle.normalize(angle);
      var index = Math.round(angle / (360 / this.directions.length));
      return typeof this.directions[index] === 'undefined' ? this.directions[0] : this.directions[index];
    }

    /**
     * Converts direction keyword to angle in degrees. Returns `null` if direction keyword is not defined.
     * @param {string} direction
     * @returns {number|null}
     * @example (new Angle()).fromDirection('top'); // --> 90
     */

  }, {
    key: 'fromDirection',
    value: function fromDirection(direction) {
      var index = this.directions.indexOf(direction);

      if (index !== -1) {
        var angle = index * (360 / this.directions.length);
        angle = this.directions_start + angle;
        return angle;
      }

      return null;
    }
  }, {
    key: 'directions_start',
    get: function get() {
      return this._directions_start;
    },
    set: function set(directions_start) {
      if (typeof directions_start === 'number') {
        this._directions_start = directions_start;
      } else {
        throw new TypeError('Angle: directions_start must be a number.');
      }
    }

    /**
     * @type {Array}
     */

  }, {
    key: 'directions',
    get: function get() {
      return this._directions;
    },
    set: function set(directions) {
      if (Array.isArray(directions)) {
        this._directions = directions;
      } else {
        throw new TypeError('Angle: directions must by an array.');
      }
    }

    /**
     * Convert angle from radians to degrees.
     * @param {number} angle
     * @returns {number}
     * @static
     * @example Array.radToDeg(Math.PI); // --> 180
     */

  }], [{
    key: 'radToDeg',
    value: function radToDeg(angle) {
      return angle * (180 / Math.PI);
    }

    /**
     * Convert angle from degrees to radians.
     * @param {number} angle
     * @returns {number}
     * @static
     * @example Array.radToDeg(180); // --> Math.PI
     */

  }, {
    key: 'degToRad',
    value: function degToRad(angle) {
      return angle * (Math.PI / 180);
    }

    /**
     * Converts angle in degrees into equal angle in range between 0 and 360.
     * @param {number} angle
     * @returns {number}
     * @static
     * @example Array.normalize(450); // --> 90
     */

  }, {
    key: 'normalize',
    value: function normalize(angle) {
      var result = 0;
      if (typeof angle === 'number') {
        result = angle % 360;
        if (result < 0) {
          result += 360;
        }
      }
      return result;
    }
  }]);

  return Angle;
}();

exports.default = Angle;