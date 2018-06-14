var Block = function(rootElement, mediator){
	this.rootElement = rootElement;
	this.isOnTop = this.rootElement.classList.contains("top");
	this.handleClick = this.handleClick.bind(this);
	this.mediator = mediator;
}

Block.prototype.classNames = {
	top : "top"
};

Object.defineProperty(Block.prototype, "isOnTop", {
	get: function(){
		return this._isOnTop;
	},
	set: function(value){
		// var wasOnBottom = !this.isOnTop
		this._isOnTop = value;
		(value) ? this.putUp() : this.putDown();

		// if(wasOnBottom && value){
		// 	this.dispatch("onTop");
		// }
	}
});

Block.prototype.putUp = function(){
	this.rootElement.classList.add(this.classNames.top);
	return this
};

Block.prototype.putDown = function(){
	this.rootElement.classList.remove(this.classNames.top);
	return this
};

Block.prototype.handleClick = function(event){
	this.isOnTop = !this.isOnTop;
	this.mediator.sendState(this, "isOnTop");
	return this
};

Block.prototype.delegateEvent = function(){
	this.rootElement.addEventListener("click", this.handleClick);
	return this
};

Block.prototype.render = function(){
	this.delegateEvent();
	return this
};

// Block.prototype.dispatch = function (eventType) {
//   var event = new CustomEvent(eventType, {
//     bubbles: true
//   });

//   event.block = this;

//   this.rootElement.dispatchEvent(event);

//   return this;
// };

var mediator1 = {
	blocks: [],
	addBlock : function(block){
		this.blocks.push(block);
	},
	sendState: function (block, state) {
  for (var i = 0; i < this.blocks.length; i++) {
   if (this.blocks[i] !== block) {
    this.blocks[i][state] = !block[state];
   }
  }
 }
}

