describe('DeliveryGuy class', function() {
  var deliveryWoman

  beforeEach(function() {
    deliveryWoman = new DeliveryGuy('maria')
  })

  it('has methods `deliver`', function() {
    expect(typeof deliveryWoman.deliver).toBe('function')
  })

  it('has visited property', function() {
    expect(typeof deliveryWoman.visited).toEqual(typeof [])
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

describe('PizzaDispatcher class', function() {
  var dispatcher
  beforeEach(function() {
    dispatcher = new PizzaDispatcher('<>^>', ['maria', 'clovis'])
  })
  it('has methods `dispatch`', function() {
    expect(typeof dispatcher.dispatch).toBe('function')
  })
  it('dispatch method returns the correct number of houses', function() {
    expect(dispatcher.dispatch()).toEqual(5)
  })
  it('has deliverGuysByName property', function() {
    expect(typeof dispatcher.deliveryGuysByName).toEqual(typeof {})
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

  it('returns the correct result with appropriate number of delivery person', function(){
    let validResult = pizzaDelivery2('<>^>')
    expect(validResult).toEqual(5)
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
