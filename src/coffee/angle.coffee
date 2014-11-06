class Angle


  default_options:
    directions_start: 0
    directions:
      'right topRight top topLeft left bottomLeft bottom bottomRight'.split ' '


  constructor: (options) ->
    @setOptions options


  # Sets or updates object options. It only allows to set options that are
  # defined in `default_options`.
  setOptions: (options = {}) ->
    @options = {}
    for key, val of @default_options
      @options[key] = options[key] or @default_options[key]
    @options


  # convert value from radians to degrees
  radToDeg: (angle) -> angle * (180 / Math.PI)


  # convert value from degrees to radians
  degToRad: (angle) -> angle * (Math.PI / 180)


  # Moves angle into range between 0 and 360. Converts invalid angle to 0.
  normalize: (angle = 0) ->
    result = if isNaN angle then 0 else angle
    result %= 360
    result += 360 if result < 0
    result


  # Converts angle to textual direction.
  toDirection: (angle) ->
    angle = @normalize angle
    angle = angle - @options.directions_start
    angle = @normalize angle
    index = Math.round(angle / (360 / @options.directions.length))
    @options.directions[index] or @options.directions[0]


  # Converts textual direction to angle.
  fromDirection: (direction) ->
    index = -1
    for d, i in @options.directions
      index = i if d is direction

    return null if index is -1

    angle = index * (360 / @options.directions.length)
    angle = @options.directions_start + angle
    angle


# Expose object to the global namespace.
root = if typeof exports is 'object' then exports else this
root.Angle = Angle
