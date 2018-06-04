var Modal = function(rootElement){
	this.rootElement = rootElement;
	this.modalContent = this.rootElement.querySelector(".modal__content")
	this.closeBtn = this.rootElement.querySelector(this.buttonsClasses.close);
	this.isOpen = this.rootElement.classList.contains(this.classNames.active);
	this.toggleOpen = this.toggleOpen.bind(this);
	this.shutDown = this.shutDown.bind(this)
}
Modal.prototype.classNames = {
	active : "isOpen",
}

Modal.prototype.buttonsClasses = {
	close : ".button-close",
	ok : ".button-ok",
	yes : ".button-yes",
	no: ".button-no",
	accept : ".button-accept"
}

Object.defineProperty(Modal.prototype, "isOpen",{
	get : function(){
		return this._isOpen
	},
	set: function(value){
		this._isOpen = value
		this.assignClassNames();
	}
})

Modal.prototype.assignClassNames = function(){
	this.rootElement.classList.toggle(this.classNames.active, this.isOpen);
	return this
}

Modal.prototype.toggleOpen = function(){
	this.isOpen = !this.isOpen
}
Modal.prototype.shutDown = function(event){
	this.isOpen = false;
}

Modal.prototype.delegateEvent = function(){
	this.closeBtn.addEventListener("click", this.shutDown)
	document.body.addEventListener("keydown", function(event){
		if(event.keyCode === 27){
			this.shutDown();
		}
	}.bind(this))
	this.rootElement.addEventListener("click", function(event){
		if(event.target === this.rootElement){
			this.shutDown();
		}
	}.bind(this))
	
	return this
}

Modal.prototype.render = function(){
	this.delegateEvent();
	return this
};

//=============================================================================

var AlertModal = function(rootElement){
	this.rootElement = rootElement;
	this.okBtn = this.rootElement.querySelector(this.buttonsClasses.ok);
	this.rootElement = rootElement;
	this.modalContent = this.rootElement.querySelector(".modal__content")
	this.closeBtn = this.rootElement.querySelector(this.buttonsClasses.close);
	this.isOpen = this.rootElement.classList.contains(this.classNames.active);
	this.toggleOpen = this.toggleOpen.bind(this);
	this.shutDown = this.shutDown.bind(this)
}
AlertModal.prototype = Object.create(Modal.prototype);
AlertModal.prototype.constructor = AlertModal;

AlertModal.prototype.render = function(){
	this.delegateEvent();
	this.okBtn.addEventListener("click", this.shutDown);
	return this
};

//=============================================================================

var ConfirmModal = function(rootElement){
	this.rootElement = rootElement;
	this.modalContent = this.rootElement.querySelector(".modal__content")
	this.closeBtn = this.rootElement.querySelector(this.buttonsClasses.close);
	this.isOpen = this.rootElement.classList.contains(this.classNames.active);
	this.yesBtn = this.rootElement.querySelector(this.buttonsClasses.yes);
	this.noBtn = this.rootElement.querySelector(this.buttonsClasses.no);
	this.toggleOpen = this.toggleOpen.bind(this);
	this.shutDown = this.shutDown.bind(this)
	this.answer = false;
	
}
ConfirmModal.prototype = Object.create(Modal.prototype);
ConfirmModal.prototype.constructor = ConfirmModal;

ConfirmModal.prototype.showAnswer = function(){
	var fieldForShow = document.getElementById("confirm-answer");
	fieldForShow.textContent = this.answer;
}

ConfirmModal.prototype.render = function(){
	this.delegateEvent();
	this.yesBtn.addEventListener("click", function(){
		this.answer = true;
		this.shutDown();
		this.showAnswer()
	}.bind(this))
	this.noBtn.addEventListener("click", function(){
		this.answer = false;
		this.shutDown();
		this.showAnswer()
	}.bind(this))
	return this
};

// //=============================================================================

var PromptModal = function(rootElement){
	this.rootElement = rootElement;
	this.input = this.rootElement.querySelector("#promptInput");
	this.modalContent = this.rootElement.querySelector(".modal__content")
	this.closeBtn = this.rootElement.querySelector(this.buttonsClasses.close);
	this.isOpen = this.rootElement.classList.contains(this.classNames.active);
	this.rootElement = rootElement;
	this.acceptBtn = this.rootElement.querySelector(this.buttonsClasses.accept);
	this.toggleOpen = this.toggleOpen.bind(this);
	this.shutDown = this.shutDown.bind(this);
	this.enteredText = "";
	this.showEnteredText = this.showEnteredText.bind(this);
}

PromptModal.prototype = Object.create(Modal.prototype);
PromptModal.prototype.constructor = PromptModal;

PromptModal.prototype.showEnteredText = function(){
	var fieldForShow = document.getElementById("prompt-text");
	fieldForShow.textContent = this.enteredText;
}

PromptModal.prototype.render = function(){
	this.delegateEvent();
	this.input.addEventListener("change", function(event){
		this.enteredText = event.target.value;
	}.bind(this))
	this.acceptBtn.addEventListener("click", function(){
		this.shutDown();
		this.showEnteredText();
	}.bind(this));	
	return this
};