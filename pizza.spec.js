describe('pizza delivery function', function() {
  it('handles empty string', function() {
    expect(pizzaDelivery('')).toEqual(1)
  })
  it('should throw error when input is not a string', function() {
    expect(function() {pizzaDelivery()}).toThrow()
  })

  it('should throw error when input is illegal', function() {
    expect(function() {pizzaDelivery('<><<123')}).toThrow()
  })

  it('adds cordinates to the set when input is valid', function(){
    let validResult = pizzaDelivery('<<^')
    expect(validResult).toEqual(4)
  })

  it('does not add repeated cordinates to the set', function(){
    let validResult = pizzaDelivery('<<>>^v>')
    expect(validResult).toBe(5)
  })

});
