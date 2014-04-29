Base = function() {}
Base.prototype.toString = function() {
	return JSON.stringify(this);
}