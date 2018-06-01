var TabMenu = function(rootElement){
	this.rootElement = rootElement;

	this.MenuButtons = this.rootElement.getElementsByClassName("tabMenu-button");
	this.MenuButtonItems = [].slice.call(this.MenuButtons);
	this.MenuContents = this.rootElement.getElementsByClassName("tabMenu-content")
	this.MenuContentItems = [].slice.call(this.MenuContents);

	this.handleClick = this.handleClick.bind(this);
	this.currentTab = 0;
	this.targetTab = null;
}

Object.defineProperty(TabMenu.prototype, "currentTab",{
	get : function(){
		return this._currentTab;
	},
	set : function(value){
		this._currentTab = (value <= 0) ? 0 : Math.min(value, this.totalTabs-1);
		this.calculate();
	}
});

Object.defineProperty(TabMenu.prototype, "totalTabs", {
	get : function(){
		return this.MenuButtonItems.length;
	}
});

TabMenu.prototype.classNames ={
	active : "tabMenu-button-active",
	hide : "tabMenu-content-hide",
}



TabMenu.prototype.handleClick = function(event){
	this.targetTab = this.MenuButtonItems.indexOf(event.target)
	if(this.targetTab!==-1){
		this.currentTab = this.targetTab;
		this.setActive(this.MenuButtonItems);
		this.hideAndShow(this.MenuContentItems);
	}
};

TabMenu.prototype.setActive = function(elementCollection){
	for(var i = 0; i < elementCollection.length; i++){
		if(i === this.currentTab){
			elementCollection[i].classList.add(this.classNames.active);
		}
		else{
			elementCollection[i].classList.remove(this.classNames.active);
		}
	}
	return this
};

TabMenu.prototype.hideAndShow = function(elementCollection){
	for(var i=0; i<elementCollection.length; i++){
		if(i === this.currentTab){
			elementCollection[i].classList.remove(this.classNames.hide);	
		}
		else{
			elementCollection[i].classList.add(this.classNames.hide);
		}
	}
	return this
};

TabMenu.prototype.calculate = function(){
	this.setActive(this.MenuButtonItems);
	this.hideAndShow(this.MenuContentItems);
	return this
};

TabMenu.prototype.delegateEvents = function(){
	this.rootElement.addEventListener("click", this.handleClick);
	return this
}

TabMenu.prototype.render = function(){
	this.delegateEvents();
	return this
};