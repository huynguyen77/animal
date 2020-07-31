function Cat (){
	this.stomatch = [];
}

Cat.prototype.eat = function(mouse) {
	// body...
	this.stomatch.push(mouse);
};

module.exports = Cat;