var Dog = require('./dog');
var Mouse = require('./mouse');
var Cat = require('./cat');

var dog = new Dog('muc');
var tom = new Cat();
var mouse = new Mouse('jerry');


dog.sayHi();
tom.eat(mouse);
console.log(tom);