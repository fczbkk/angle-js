const default_directions_start = 0;
const default_directions = [
  'right',
  'topRight',
  'top',
  'topLeft',
  'left',
  'bottomLeft',
  'bottom',
  'bottomRight'
];


/**
 * Class representing an angle.
 * @name Angle
 */
export default class Angle {

  /**
   * Create an angle.
   * @param {Object} config
   * @param {number} config.directions_start Value with which first direction keyword will be associated.
   * @param {Array.<string>} config.directions List of direction keywords.
   */
  constructor ({
    directions_start = default_directions_start,
    directions = default_directions
  } = {}) {
    this.directions_start = directions_start;
    this.directions = directions;
  }

  /**
   * @type {number}
   */
  get directions_start () {
    return this._directions_start;
  }

  set directions_start (directions_start) {
    if (typeof directions_start === 'number') {
      this._directions_start = directions_start;
    } else {
      throw new TypeError('Angle: directions_start must be a number.');
    }
  }

  /**
   * @type {Array}
   */
  get directions () {
    return this._directions;
  }

  set directions (directions) {
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
  static radToDeg (angle) {
    return angle * (180 / Math.PI);
  }

  /**
   * Convert angle from degrees to radians.
   * @param {number} angle
   * @returns {number}
   * @static
   * @example Array.radToDeg(180); // --> Math.PI
   */
  static degToRad (angle) {
    return angle * (Math.PI / 180);
  }

  /**
   * Converts angle in degrees into equal angle in range between 0 and 360.
   * @param {number} angle
   * @returns {number}
   * @static
   * @example Array.normalize(450); // --> 90
   */
  static normalize (angle) {
    let result = 0;
    if (typeof angle === 'number') {
      result = angle % 360;
      if (result < 0) {
        result += 360
      }
    }
    return result;
  }

  /**
   * Converts angle in degrees to direction keyword.
   * @param {number} angle
   * @returns {string}
   * @example (new Angle()).toDirection(90); // --> 'top'
   */
  toDirection (angle) {
    angle = angle - this.directions_start;
    angle = Angle.normalize(angle);
    const index = Math.round(angle / (360 / this.directions.length));
    return (typeof this.directions[index] === 'undefined')
      ? this.directions[0]
      : this.directions[index];
  }

  /**
   * Converts direction keyword to angle in degrees. Returns `null` if direction keyword is not defined.
   * @param {string} direction
   * @returns {number|null}
   * @example (new Angle()).fromDirection('top'); // --> 90
   */
  fromDirection (direction) {
    const index = this.directions.indexOf(direction);

    if (index !== -1) {
      let angle = index * (360 / this.directions.length);
      angle = this.directions_start + angle;
      return angle;
    }

    return null;
  }

}
