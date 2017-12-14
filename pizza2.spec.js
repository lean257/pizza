describe('DeliveryGuy class', function() {
  var deliveryWoman

  beforeEach(function() {
    deliveryWoman = new DeliveryGuy()
  })

  it('has methods `deliver`', function() {
    expect(typeof deliveryWoman.deliver).toBe('function')
  })

  it('starts with x and y cordinates at 0', function () {
    expect(deliveryWoman.x).toBe(0)
    expect(deliveryWoman.y).toBe(0)
  })

  describe('deliver method in class', function(){
    it('decreases x and y should be unchanged when input is ^', function () {
      expect(deliveryWoman.deliver('^')).toEqual('-1:0')
    })

    it('decreases y and x should be unchanged when input is <', function() {
    expect(deliveryWoman.deliver('<')).toEqual('0:-1')
  })

    it('increases y and x should be unchanged when input is >', function() {
      expect(deliveryWoman.deliver('>')).toEqual('0:1')
    })

    it('increases x and y should be unchanged when input is v', function(){
      expect(deliveryWoman.deliver('v')).toEqual('1:0')
    })
  })  
})

describe('pizzaDelivery2 method', function(){

  it('handles empty string', function() {
    expect(pizzaDelivery2('')).toEqual(1)
  })
  it('should throw error when input is not a string', function() {
    expect(function() {pizzaDelivery2(abc)}).toThrow()
  })

  it('should throw error when input is illegal', function() {
    expect(function() {pizzaDelivery('<><<123')}).toThrow()
  })

  it('calls deliver method the expected number of times', function(){
    spyOn(DeliveryGuy.prototype, 'deliver')
    pizzaDelivery2('<><>')
    expect(DeliveryGuy.prototype.deliver).toHaveBeenCalled()
    expect(DeliveryGuy.prototype.deliver.calls.count()).toEqual(4)
  })

  it('adds cordinates to the set when input is valid', function(){
    let validResult = pizzaDelivery2('<>^>')
    expect(validResult).toEqual(5)
  })

  it('does not add repeated cordinates to the set', function(){
    let validResult = pizzaDelivery2('<<^v')
    expect(validResult).toBe(4)
  })
})
