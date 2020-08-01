function Cat (){
	this.stomatch = [];
}

Cat.prototype.eat = function(mouse) {
	// body...
	this.stomatch.push(mouse);
	mouse.die();
};

module.exports = Cat;