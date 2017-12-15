### Hi! I'm an algorithm to dispatch pizza delivery instructions for either 1 or 2 delivery people.

### To run my unit tests:
1. You will need Node version 0.10+ 
2. Install testem `npm install testem -g`
3. type `testem` on your terminal
4. Follow the instructions on your terminal

### Answers
1. Given the string of dispatcher inputs attached to this gist, how many houses receive at least one pizza?
<b>2565</b> with 1 delivery person
2. Given the same string of dispatcher inputs as in Part One, how many houses receive at least one pizza?
<b>2639</b> with 2 delivery person

### ToDo
~1.~ Refactor pizzaDelivery2 function to a class so I can reuse it for any number of delivery men - <b>Done</b>
~2.~ PizzaDispatcher is now a class that takes input instruction and array of names of delivery people - <b>Done</b>
~3.~ Inside PizzaDispatcher we have a hashmap that stores multiple delivery men instances, each with their own details like name, color, cordinates, visited houses - <b>Done</b>
4. Build an UI for the dispatcher
5. Build an UI for delivery people
6. Can we optimize the deivery routes?
