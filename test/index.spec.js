import Angle from './../src/';


describe('Angle', function () {

  it('should exist', function () {
    expect(Angle).toBeDefined();
  });

  describe('config', function () {

    it('should be created with default directions', function () {
      const x = new Angle();
      expect(x.directions).toEqual([
        'right', 'topRight', 'top', 'topLeft',
        'left', 'bottomLeft', 'bottom', 'bottomRight'
      ]);
    });

    it('should be created with default directions_start', function () {
      const x = new Angle();
      expect(x.directions_start).toEqual(0);
    });

    it('should not allow to set invalid directions', function () {
      const x = new Angle();
      const fn = function () {x.directions = 'xxx';};
      expect(fn).toThrow();
    });

    it('should not allow to set invalid directions_start', function () {
      const x = new Angle();
      const fn = function () {x.directions_start = 'xxx';};
      expect(fn).toThrow();
    });

  });

  describe('DEG-RAD conversion', function () {

    it('should convert from DEG to RAD', function () {
      expect(Angle.radToDeg(0)).toEqual(0);
      expect(Angle.radToDeg(Math.PI)).toEqual(180);
    });

    it('should convert from RAD to DEG', function () {
      expect(Angle.degToRad(0)).toEqual(0);
      expect(Angle.degToRad(180)).toEqual(Math.PI);
    });

  });

  describe('normalization', function () {

    it('should keep value in range between 0 and 360 unchanged', function () {
      expect(Angle.normalize(0)).toEqual(0);
      expect(Angle.normalize(180)).toEqual(180);
    });

    it('should convert negative value', function () {
      expect(Angle.normalize(-90)).toEqual(270);
      expect(Angle.normalize(-180)).toEqual(180);
    });

    it('should convert large value', function () {
      expect(Angle.normalize(360)).toEqual(0);
      expect(Angle.normalize(450)).toEqual(90);
    });

    it('should convert to 0 on invalid value', function () {
      expect(Angle.normalize(null)).toEqual(0);
      expect(Angle.normalize('xxx')).toEqual(0);
    });

  });

  describe('angle to direction', function () {

    it('should get direction by angle', function () {
      const x = new Angle();
      expect(x.toDirection(0)).toEqual('right');
      expect(x.toDirection(90)).toEqual('top');
    });

    it('should use custom directions', function () {
      const x = new Angle({directions: ['right', 'left']});
      expect(x.toDirection(0)).toEqual('right');
      expect(x.toDirection(89)).toEqual('right');
      expect(x.toDirection(91)).toEqual('left');
      expect(x.toDirection(180)).toEqual('left');
    });

    it('should adjust by direction start', function () {
      const x = new Angle({
        directions: ['up', 'down'],
        directions_start: 90
      });
      expect(x.toDirection(90)).toEqual('up');
      expect(x.toDirection(45)).toEqual('up');
      expect(x.toDirection(135)).toEqual('up');
      expect(x.toDirection(270)).toEqual('down');
      expect(x.toDirection(225)).toEqual('down');
      expect(x.toDirection(315)).toEqual('down');
    });

  });

  describe('direction to angle', function () {

    it('should convert direction to angle', function () {
      const x = new Angle();
      expect(x.fromDirection('right')).toEqual(0);
      expect(x.fromDirection('top')).toEqual(90);
      expect(x.fromDirection('left')).toEqual(180);
    });

    it('should use custom directions', function () {
      const x = new Angle({directions: ['right', 'left']});
      expect(x.fromDirection('right')).toEqual(0);
      expect(x.fromDirection('left')).toEqual(180);
    });

    it('should use custom direction start', function () {
      const x = new Angle({
        directions: ['up', 'down'],
        directions_start: 90
      });
      expect(x.fromDirection('up')).toEqual(90);
      expect(x.fromDirection('down')).toEqual(270);
    });

    it('should return `null` if direction does not exist', function () {
      const x = new Angle();
      expect(x.fromDirection('xxx')).toEqual(null);
    });

  });

});
