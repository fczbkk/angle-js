describe 'Angle', ->

  a = null

  beforeEach ->
    a = new Angle


  it 'should exist', ->
    expect(Angle).toBeDefined()


  describe 'options', ->

    it 'should use default options', ->
      expect(a.options).toEqual a.default_options

    it 'should allow custom options', ->
      a.setOptions {directions: ['aaa']}
      expect(a.options.directions).toEqual ['aaa']

    it 'should not allow options not defined in default options', ->
      a.setOptions {xxx: 'yyy'}
      expect(a.options.xxx).not.toBeDefined()


  describe 'DEG-RAD conversion', ->

    it 'should convert from DEG to RAD', ->
      expect(a.fromRad 0).toEqual 0
      expect(a.fromRad Math.PI).toEqual 180

    it 'should convert from RAD to DEG', ->
      expect(a.toRad 0).toEqual 0
      expect(a.toRad 180).toEqual Math.PI


  describe 'normalization', ->

    it 'should keep value in range from 0 to 360 unchanged', ->
      expect(a.normalize 0).toEqual 0
      expect(a.normalize 180).toEqual 180

    it 'should convert negative value', ->
      expect(a.normalize -90).toEqual 270
      expect(a.normalize -180).toEqual 180

    it 'should convert large value', ->
      expect(a.normalize 360).toEqual 0
      expect(a.normalize 450).toEqual 90

    it 'should convert to 0 on invalid value', ->
      expect(a.normalize null).toEqual 0
      expect(a.normalize 'xxx').toEqual 0


  describe 'angle to direction', ->

    it 'should get direction by angle', ->
      expect(a.toDirection 0).toEqual 'right'
      expect(a.toDirection 90).toEqual 'top'

    it 'should use custom directions', ->
      a.setOptions {directions: ['right', 'left']}
      expect(a.toDirection 0).toEqual 'right'
      expect(a.toDirection 89).toEqual 'right'
      expect(a.toDirection 91).toEqual 'left'
      expect(a.toDirection 180).toEqual 'left'

    it 'should adjust by direction start', ->
      a.setOptions {
        directions: ['up', 'down']
        directions_start: 90
      }
      expect(a.toDirection 90).toEqual 'up'
      expect(a.toDirection 45).toEqual 'up'
      expect(a.toDirection 135).toEqual 'up'
      expect(a.toDirection 270).toEqual 'down'
      expect(a.toDirection 225).toEqual 'down'
      expect(a.toDirection 315).toEqual 'down'


  describe 'direction to angle', ->

    it 'should angle by direction', ->
      expect(a.fromDirection 'right').toEqual 0
      expect(a.fromDirection 'top').toEqual 90
      expect(a.fromDirection 'left').toEqual 180

    it 'should use custom directions', ->
      a.setOptions {directions: ['right', 'left']}
      expect(a.fromDirection 'right').toEqual 0
      expect(a.fromDirection 'left').toEqual 180

    it 'should adjust by direction start', ->
      a.setOptions {
        directions: ['up', 'down']
        directions_start: 90
      }
      expect(a.fromDirection 'up').toEqual 90
      expect(a.fromDirection 'down').toEqual 270

    it 'should return `null` if direction does not exist', ->
      expect(a.fromDirection 'xxx').toEqual null
