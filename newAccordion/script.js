var TabPanel = function(rootElement){
	this.rootElement = rootElement;

	this.panelHeading = this.rootElement.querySelector(".accordion-heading");
	this.panelContent = this.rootElement.querySelector(".accordion-content");

	this.handleClick = this.handleClick.bind(this);

}

TabPanel.prototype.classNames = {
	active : "accordion-heading-active",
	hide : "accordion-content-hide", 
};

Object.defineProperty(TabPanel.prototype, "isOpen", {
	get: function(){
		return this.panelHeading.classList.contains(this.classNames.active);
	},
	set: function(value){
		(value) ? this.open() : this.close();
	}
})

TabPanel.prototype.open = function(){
	this.panelHeading.classList.add(this.classNames.active);
	this.panelContent.classList.remove(this.classNames.hide);	
};

TabPanel.prototype.close = function(){
	this.panelHeading.classList.remove(this.classNames.active);
	this.panelContent.classList.add(this.classNames.hide);	
};

TabPanel.prototype.handleClick = function(){
	this.isOpen ? this.close() : this.open();
	return this;
};

TabPanel.prototype.delegateEvent = function(){
	this.panelHeading.addEventListener("click", this.handleClick);
	return this
}

TabPanel.prototype.render = function(){
	this.delegateEvent();
	return this
};

//===============================================================================

var Accordion = function(rootElement){
	this.rootElement = rootElement;

	this.tabs = this.rootElement.getElementsByClassName("accordion-item");
	this.tabsHeading = this.rootElement.getElementsByClassName("accordion-heading");
	this.tabHeadingItems = [].slice.call(this.tabsHeading);

	this.tabItems = [].slice.call(this.tabs);

	this.tabPanelItems = this.tabItems.map(function(element){
		return new TabPanel(element);
	});
	this.handleClick = this.handleClick.bind(this)
	
}

Object.defineProperty(Accordion.prototype, "totalTabs", {
	get: function(){
		return this.tabPanelItems.length
	}
})

Object.defineProperty(Accordion.prototype, "currentTab", {
	get : function(){
		return this._currentTab
	},

	set : function(value){
		this._currentTab	= (value <= 0) ? 0 : Math.min(value, this.totalTabs-1);
		this.calculate();
	}
})

Accordion.prototype.calculate = function(){
	this.tabPanelItems.forEach(function(element, index){
		if(index === this.currentTab){
			element.open();
		}
		else{
			element.close();
		}
	}.bind(this))
}

Accordion.prototype.handleClick = function(event){
	this.tabPanelItems.forEach(function(element, index){
		if(element.panelHeading === event.target){
			element.handleClick();
		}
		else{
			element.close()
		}
	}.bind(this))
	return this
}

Accordion.prototype.delegateEvent = function(){
	this.tabHeadingItems.forEach( function(element, index) {
		element.addEventListener("click", this.handleClick);
	}.bind(this));
	return this
};

Accordion.prototype.render = function(){
	this.delegateEvent();
	return this
};