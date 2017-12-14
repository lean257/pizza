// Part 2

// define class DeliveryGuy that has method deliver
class DeliveryGuy {
  constructor() {
    this.x = 0
    this.y = 0
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
    return `${this.x}:${this.y}`
  }
}

function pizzaDelivery2(input) {
  // handle edge cases
  if (input === '') {
    return 1
  }
  if (typeof input !== 'string') {
    throw new Error('Input needs to be a string!')
  }
  // create new instances of DeliveryGuy class
  let person1 = new DeliveryGuy()
  let person2 = new DeliveryGuy()
  let team = [person1, person2]
  let grid = new Set()
  // add starting point to the set
  grid.add('0:0')
  // iterate through the instructions and assign to each delivery person
  for (var i = 0; i < input.length; i++) {
    let currTurn = team[i % team.length]
    let currPosition = currTurn.deliver(input[i])
    grid.add(currPosition)
  }
  return grid.size
}
