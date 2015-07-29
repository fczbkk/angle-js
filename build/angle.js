(function() {
  var Angle, root;

  Angle = (function() {
    Angle.prototype.default_options = {
      directions_start: 0,
      directions: 'right topRight top topLeft left bottomLeft bottom bottomRight'.split(' ')
    };


    /**
      @param {Object=} options
      @constructor
     */

    function Angle(options) {
      if (options == null) {
        options = {};
      }
      this.setOptions(options);
    }


    /**
     * Sets or updates object options. It only allows to set options that are
     * defined in `default_options`.
      @param {Object=} options
     */

    Angle.prototype.setOptions = function(options) {
      var key, val, _ref;
      if (options == null) {
        options = {};
      }
      this.options = {};
      _ref = this.default_options;
      for (key in _ref) {
        val = _ref[key];
        this.options[key] = options[key] || this.default_options[key];
      }
      return this.options;
    };


    /**
     * convert value from radians to degrees
      @param {number} angle
     */

    Angle.prototype.fromRad = function(angle) {
      return angle * (180 / Math.PI);
    };


    /**
     * convert value from degrees to radians
      @param {number} angle
     */

    Angle.prototype.toRad = function(angle) {
      return angle * (Math.PI / 180);
    };


    /**
     * Moves angle into range between 0 and 360. Converts invalid angle to 0.
      @param {number=} angle
     */

    Angle.prototype.normalize = function(angle) {
      var result;
      if (angle == null) {
        angle = 0;
      }
      result = isNaN(angle) ? 0 : angle;
      result %= 360;
      if (result < 0) {
        result += 360;
      }
      return result;
    };


    /**
     * Converts angle to textual direction.
      @param {number} angle
     */

    Angle.prototype.toDirection = function(angle) {
      var index;
      angle = this.normalize(angle);
      angle = angle - this.options.directions_start;
      angle = this.normalize(angle);
      index = Math.round(angle / (360 / this.options.directions.length));
      return this.options.directions[index] || this.options.directions[0];
    };


    /**
     * Converts textual direction to angle.
      @param {string} direction
     */

    Angle.prototype.fromDirection = function(direction) {
      var angle, d, i, index, _i, _len, _ref;
      index = -1;
      _ref = this.options.directions;
      for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
        d = _ref[i];
        if (d === direction) {
          index = i;
        }
      }
      if (index === -1) {
        return null;
      }
      angle = index * (360 / this.options.directions.length);
      angle = this.options.directions_start + angle;
      return angle;
    };

    return Angle;

  })();

  if (typeof expose !== "undefined" && expose !== null) {
    expose(Angle, 'Angle');
  } else {
    root = typeof exports === 'object' ? exports : this;
    root.Angle = Angle;
  }

}).call(this);
