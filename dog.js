var chalk = require('chalk');
function Dog(name){
	this.name = name;
	this.stomatch = [];
}

Dog.prototype.eat = function(bone) {
	// body...
	this.stomatch.push(bone);
};

Dog.prototype.sayHi = function() {
	// body...
	console.log('hi my name is: ' + chalk.blue(this.name));
};

module.exports = Dog;