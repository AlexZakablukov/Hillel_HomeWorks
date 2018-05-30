 window.onload = function(){
  var Carousel = function(rootElement){
    this.rootElement = rootElement;
    this.carouselContainer = this.rootElement.querySelector(".carousel-container");
    this.list = this.rootElement.querySelector(".carousel-list");
    this.items = this.list.getElementsByTagName("li");
    this.leftArrow = this.rootElement.querySelector(".left-arrow");
    this.rightArrow = this.rootElement.querySelector(".right-arrow");
    this.amountOfPictures = this.items.length;
    this.picturesInFrame = 3;
    this.countOfSlides = 1;
    this.onePictureWidth =  this.items[0].querySelector("img").width + 10;
    this.currentMarginLeft = 0;
    this.maxMargin = -this.onePictureWidth*(this.amountOfPictures-this.picturesInFrame);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
    this.changeFrame = this.changeFrame.bind(this);
    this.changeSlideCount = this.changeSlideCount.bind(this);
    this.frameRange = this.rootElement.getElementsByClassName("frameSize")[0];
    this.slideRange = this.rootElement.getElementsByClassName("slideLength")[0];
  }
  Carousel.prototype.next = function(event){
    if(this.currentMarginLeft < this.maxMargin/2){
      
      this.append();
    }
    this.list.style.marginLeft = this.currentMarginLeft - this.onePictureWidth * this.countOfSlides + "px";
    this.currentMarginLeft = parseInt(this.list.style.marginLeft);
  };
  Carousel.prototype.prev = function(event){
    if(this.currentMarginLeft + this.onePictureWidth * this.countOfSlides > 0){
      this.prepend();
      
    }
    this.list.style.marginLeft = this.currentMarginLeft + this.onePictureWidth * this.countOfSlides + "px";
    this.currentMarginLeft = parseInt(this.list.style.marginLeft);
  };

  Carousel.prototype.append = function(){
    for(var i=0; i< this.countOfSlides; i++){
      this.list.appendChild(this.items[0]);
      this.currentMarginLeft += this.onePictureWidth;
    }
  };

  Carousel.prototype.prepend = function(){
    for(var i=0; i< this.countOfSlides; i++){
    this.list.insertBefore(this.items[this.items.length-1], this.list.firstElementChild);
    this.currentMarginLeft -= this.onePictureWidth;
    }
  };
  Carousel.prototype.changeFrame = function(){
    this.picturesInFrame = this.frameRange.valueAsNumber;
    this.carouselContainer.style.width = this.onePictureWidth * this.picturesInFrame + 15 + "px";
    this.maxLength = -this.onePictureWidth*(this.amountOfPictures-this.picturesInFrame);
  }
  Carousel.prototype.changeSlideCount = function(){
    this.countOfSlides = this.slideRange.valueAsNumber;
  }

  Carousel.prototype.render = function(){
    this.carouselContainer.style.width = this.onePictureWidth * this.picturesInFrame + 15 + "px";
    this.rightArrow.addEventListener("click", this.next);
    this.leftArrow.addEventListener("click", this.prev)
    this.frameRange.addEventListener("change", this.changeFrame);
    this.slideRange.addEventListener("change", this.changeSlideCount);
  }


 var carousel = new Carousel(document.getElementById("carousel-wrap1"));
  carousel.render();
  var carousel2 = new Carousel(document.getElementById("carousel-wrap2"));
  carousel2.render();
}



  // var frameSize = document.getElementById("frameSize");
  // var slideLength = document.getElementById("slideLength");


  // frameSize.addEventListener("change", function(event){
  //   picturesInFrame = frameSize.valueAsNumber;
  //   
  // })

  // slideLength.addEventListener("change", function(event){
  //   countOfSlides = slideLength.valueAsNumber;
   