var names = ['Davey', 'Katie', 'Peter', 'Jacq']
//
// names.forEach(function(name){
//   console.log('forEach', name)
// })
//
// names.forEach((name) => {
//   console.log('arrowFunc', name)
// })
//
// names.forEach((name) => console.log(name))
//
// var returnMe = (name) => name + '!'
// console.log(returnMe('Kate'))

// var person = {
//   name: 'Kate',
//   greet: function() {
//     names.forEach((name) => console.log(this.name + ' says hi to ' + name))
//   }
// }
//
// person.greet()

// CHALLENGE AREA

function add(a, b) {
  return a + b
}

// fat arrow function with statement syntax (good for multi-line)
var addStatement = (a, b) => {
  return a + b
}

// fat arrow function with expression syntax (good for single line)
var addExpression = (a, b) => a + b

console.log(add(1, 3))
console.log(add(9, 0))
console.log(addStatement(1, 3))
console.log(addStatement(9, 0))
console.log(addExpression(1, 3))
console.log(addExpression(9, 0))
