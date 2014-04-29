require('./base');

const STATE_UNDONE = false;
const STATE_DONE = true;

Task = function(name) {
	this.name = name
	this.creationDate = Date.new;
	this.done = STATE_DONE;
}
Task.prototype = new Base();
Task.prototype.constructor = Task;