// Part 2

// define class DeliveryGuy that has method deliver
class DeliveryGuy {
  constructor(name) {
    this.x = 0
    this.y = 0
    this.name = name
    this.visited = []
  }
  deliver(input) {
    if (input === '^') {
      this.x--
    } else if (input === '<') {
      this.y--
    } else if (input === '>') {
      this.y++
    } else if (input === 'v') {
      this.x++
      // handle illegal characters
    } else {
      throw new Error('Input should be in {^,v, >, <}')
    }
    var newPosition = `${this.x}:${this.y}`
    // keep track of visted cordinates to draw out on the UI
    this.visited.push(newPosition)
    return newPosition
  }
}

class PizzaDispatcher {
  // accomodate an array of delivery people's names as input
  constructor(input, names) {
    this.input = input
    // By using a hashmap, we can now keep track of their details like names and visited positions
    this.deliveryGuysByName = {}
    // Adding details of each delivery guy to the hashmap
    for (let i = 0; i < names.length; i++) {
      this.deliveryGuysByName[names[i]] = new DeliveryGuy(names[i])
    }
  }
  dispatch() {
    // handle edge cases
    if (this.input === '') {
      return 1
    }
    if (typeof this.input !== 'string') {
      throw new Error('Input needs to be a string!')
    }

    let grid = new Set()
    // add starting point to the set
    grid.add('0:0')
    // Iterate through delivery guys instances since the keys are just their names
    var deliveryGuys = Object.values(this.deliveryGuysByName)
    // iterate through the instructions and assign to each delivery person
    for (var i = 0; i < this.input.length; i++) {
      let deliveryGuy = deliveryGuys[i % deliveryGuys.length]
      let currPosition = deliveryGuy.deliver(this.input[i])
      grid.add(currPosition)
    }
    return grid.size
  }
}

function pizzaDelivery2(input) {
  let dispatcher = new PizzaDispatcher(input, ["maria", "clovis"])
  return dispatcher.dispatch()
}
