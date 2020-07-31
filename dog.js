function Dog(){
	this.stomatch = [];
}

Dog.prototype.eat = function(bone) {
	// body...
	this.stomatch.push(bone);
};