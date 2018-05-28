 window.onload = function(){
  var Carousel = function(rootElement){
    this.rootElement = rootElement;
    this.carouselContainer = this.rootElement.querySelector(".carousel-container");
    this.list = this.rootElement.querySelector(".carousel-list");
    this.items = this.list.querySelectorAll("li");
    this.leftArrow = this.rootElement.querySelector(".left-arrow");
    this.rightArrow = this.rootElement.querySelector(".right-arrow");
    this.amountOfPictures = this.items.length;
    this.picturesInFrame = 4;
    this.countOfSlides = 1;
    this.onePictureWidth = 175;
    this.currentMarginLeft = 0;
    this.maxMargin = -this.onePictureWidth*(this.amountOfPictures-this.picturesInFrame);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }
  Carousel.prototype.next = function(event){
    if(this.currentMarginLeft - this.onePictureWidth * this.countOfSlides > this.maxMargin){
      this.list.style.marginLeft = this.currentMarginLeft - this.onePictureWidth * this.countOfSlides + "px";
      this.currentMarginLeft = parseInt(this.list.style.marginLeft);
    }
    else{
      this.list.style.marginLeft = this.maxMargin + "px";
      this.currentMarginLeft = this.maxMargin;
    }
  };
  Carousel.prototype.prev = function(event){
    if(this.currentMarginLeft + this.onePictureWidth * this.countOfSlides < 0){
      this.list.style.marginLeft = this.currentMarginLeft + this.onePictureWidth * this.countOfSlides + "px";
      this.currentMarginLeft = parseInt(this.list.style.marginLeft);
    }
    else{
      this.list.style.marginLeft = 0 + "px";
      this.currentMarginLeft = 0;
    }
  };

  Carousel.prototype.render = function(){
      this.carouselContainer.style.width = this.onePictureWidth * this.picturesInFrame + 15 + "px";
      this.rightArrow.addEventListener("click", this.next);
      this.leftArrow.addEventListener("click", this.prev)
  }


 var carousel = new Carousel(document.getElementById("carousel"));
  carousel.render();
  var carousel2 = new Carousel(document.getElementById("carousel2"));
  carousel2.render();
}
// //настраиваемое пользователем
//   var picturesInFrame = 3;
//   var countOfSlides = 1;
//   var onePictureWidth = 175;
//   //вычисления
//   var carousel = document.querySelector(".carousel");
//   var list = carousel.querySelector(".carousel-list");
//   var items = list.querySelectorAll("li");
//   var leftArrow = carousel.querySelector(".left-arrow");
//   var rightArrow = carousel.querySelector(".right-arrow");
//   var amountOfPictures = items.length;
//   var carouselContainer = carousel.querySelector(".carousel-container");
//   carouselContainer.style.width = onePictureWidth * picturesInFrame + 15 + "px";
//   var maxLength = -onePictureWidth*(amountOfPictures-picturesInFrame);
//   var currentMarginLeft = 0;
//   // var frameSize = document.getElementById("frameSize");
//   // var slideLength = document.getElementById("slideLength");


//   // frameSize.addEventListener("change", function(event){
//   //   picturesInFrame = frameSize.valueAsNumber;
//   //   carouselContainer.style.width = onePictureWidth * picturesInFrame + 15 + "px";
//   //   maxLength = -onePictureWidth*(amountOfPictures-picturesInFrame);
//   // })

//   // slideLength.addEventListener("change", function(event){
//   //   countOfSlides = slideLength.valueAsNumber;
//   // })

//   rightArrow.addEventListener("click", function(event){
//     if(currentMarginLeft - onePictureWidth*countOfSlides > maxLength){
//       list.style.marginLeft = currentMarginLeft - onePictureWidth*countOfSlides + "px";
//       currentMarginLeft = parseInt(list.style.marginLeft);
//     }
//     else{
//       list.style.marginLeft = maxLength + "px";
//       currentMarginLeft = maxLength;
//     }
//   })
//   leftArrow.addEventListener("click", function(event){
//     if(currentMarginLeft + onePictureWidth*countOfSlides < 0){
//       list.style.marginLeft = currentMarginLeft + onePictureWidth*countOfSlides + "px";
//       currentMarginLeft = parseInt(list.style.marginLeft);
//     }
//     else{
//       list.style.marginLeft = 0 + "px";
//       currentMarginLeft = 0;
//     }
//   })