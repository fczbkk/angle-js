# ![AngleJS](resources/angle-js-logo.png?raw=true)

Simple JavaScript library for working with angles.

## Example

```javascript
var angle = new Angle;

// convert between radians and degrees
angle.fromRad(Math.PI);  // 180
angle.toRad(180);        // 3.14...

// normalize angle to range from 0 to 360 degrees
angle.normalize(450);  // 90
angle.normalize(-90);  // 270

// convert between textual and numeric representation of angle
angle.toDirection(0);             // "right"
angle.toDirection(45);            // "topRight"
angle.toDirection(90);            // "top"
angle.fromDirection("right");     // 0
angle.fromDirection("topRight");  // 45
angle.fromDirection("right");     // 90

// you can also use your own directions
angle.setOptions({directions: ['right', 'left']});
angle.toDirection(0);    // "right"
angle.toDirection(89);   // "right"
angle.toDirection(91);   // "left"
angle.toDirection(180);  // "left"

angle.setOptions({directions: ['up', 'down'], directions_start: 90});
angle.toDirection(90);   // "up"
angle.toDirection(270);  // "down"
```

## Bug reports, feature requests and contact

If you found any bugs, if you have feature requests or any questions, please, either [file an issue at GitHub](https://github.com/fczbkk/angle-js/issues) or send me an e-mail at [riki@fczbkk.com](mailto:riki@fczbkk.com).

## License

Angle JS is published under the [UNLICENSE license](https://github.com/fczbkk/angle-js/blob/master/UNLICENSE). Feel free to use it in any way.
