// Part 1

function pizzaDelivery(input) {
  let dispatcher = new PizzaDispatcher(input, ["maria"])
  return dispatcher.dispatch()
}
