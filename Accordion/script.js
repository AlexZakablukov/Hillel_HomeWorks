var Accordion = function(rootElement){
	this.rootElement = rootElement;
	this.headings = this.rootElement.getElementsByClassName("accordion-heading");
	this.headingItems = [].slice.call(this.headings);
	this.contents = this.rootElement.getElementsByClassName("accordion-content");
	this.contentItems = [].slice.call(this.contents);
	this.setActive	= this.setActive.bind(this);

};
Accordion.prototype.classNames = {
	active : "accordion-heading-active",
	hide : "accordion-content-hide", 
};

Accordion.prototype.setActive = function(event){
	for(var i = 0; i < this.headingItems.length; i++){
			if(this.headingItems[i] === event.target){
				this.headingItems[i].classList.toggle(this.classNames.active);
				this.contentItems[i].classList.toggle(this.classNames.hide);
			}
			else{
				this.headingItems[i].classList.remove(this.classNames.active);
				this.contentItems[i].classList.add(this.classNames.hide);
			}
		}
};

Accordion.prototype.delegateEvent = function(){
	this.headingItems.forEach( function(element, index) {
		element.addEventListener("click", this.setActive);
	}.bind(this));
	return this
}
Accordion.prototype.render = function(){
	this.delegateEvent();
	return this
};