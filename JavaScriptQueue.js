function queue() {
	this.items = [];
	this.length = this.items.length;
}
var q = new queue();
queue.prototype.enQueue = function (v) {
	this.items.push(v);
	this.length = this.items.length;
}
queue.prototype.deQueue = function () {
	this.items.shift();
	this.length = this.items.length;
}
queue.prototype.print = function () {
	document.write(this.items)
	console.log(this.items);
}
queue.prototype.peek = function () {
	if (this.items.length > 0) {
		console.log(this.items[0]);
	}
	else {
		console.log("empty queue")
	}
}


q.enQueue("smith")
q.enQueue("Daniel")
q.enQueue("Steven")
q.enQueue("Raj")
q.deQueue();
q.peek();
console.log(q.print())
console.log(q.length)
