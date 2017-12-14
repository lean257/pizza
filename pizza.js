// Part 1

function pizzaDelivery(input) {
  // when there is no instruction, assumed the person delivers to the starting pt only
  if (input === '') {
    return 1
  }
  // handle illegal inputs
  if (typeof input !== 'string') {
    throw new Error('Input needs to be a string!')
  }
  let grid = new Set(), x = 0, y = 0
  // add starting point to set
  grid.add(`${x}:${y}`)
  // iterate through the input string and modify the current location of the delivery person
  for (let i = 0; i < input.length; i++) {
    if (input[i] === '^') {
      x--
    } else if (input[i] === '<') {
      y--
    } else if (input[i] === '>') {
      y++
    } else if (input[i] === 'v') {
      x++
      // handle illegal characters
    } else {
      throw new Error('Input should be in {^,v, >, <}')
    }
    // add new location to the set so repeating houses get counted only once
    grid.add(`${x}:${y}`)
  }
  return grid.size
}
