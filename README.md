# Angle

Simple JavaScript library for working with angles.

## Documentation

### Angle

Class representing an angle.

#### constructor

Create an angle.

**Parameters**

-   `config` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)**
    -   `config.directions_start` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)** Value with which first direction keyword will be associated.
    -   `config.directions` **[Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)&lt;[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)>** List of direction keywords.
-   `$0` **[Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)**  (optional, default `{}`)
    -   `$0.directions_start`   (optional, default `default_directions_start`)
    -   `$0.directions`   (optional, default `default_directions`)

#### directions_start

#### directions

#### toDirection

Converts angle in degrees to direction keyword.

**Parameters**

-   `angle` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**

**Examples**

```javascript
(new Angle()).toDirection(90); // --> 'top'
```

Returns **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**

#### fromDirection

Converts direction keyword to angle in degrees. Returns `null` if direction keyword is not defined.

**Parameters**

-   `direction` **[string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)**

**Examples**

```javascript
(new Angle()).fromDirection('top'); // --> 90
```

Returns **([number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number) | null)**

#### radToDeg

Convert angle from radians to degrees.

**Parameters**

-   `angle` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**

**Examples**

```javascript
Array.radToDeg(Math.PI); // --> 180
```

Returns **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**

#### degToRad

Convert angle from degrees to radians.

**Parameters**

-   `angle` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**

**Examples**

```javascript
Array.radToDeg(180); // --> Math.PI
```

Returns **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**

#### normalize

Converts angle in degrees into equal angle in range between 0 and 360.

**Parameters**

-   `angle` **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**

**Examples**

```javascript
Array.normalize(450); // --> 90
```

Returns **[number](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)**

## Bug reports, feature requests and contact

If you found any bugs, if you have feature requests or any questions, please, either [file an issue at GitHub](https://github.com/fczbkk/angle-js/issues) or send me an e-mail at <a href="mailto:riki@fczbkk.com">riki@fczbkk.com</a>.

## License

Angle is published under the [MIT license](https://github.com/fczbkk/angle-js/blob/master/LICENSE).
