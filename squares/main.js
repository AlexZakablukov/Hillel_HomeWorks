window.onload = function(){
  var block = document.querySelector("#second");
  var blocks = document.querySelectorAll(".block");
  // console.dir(blocks);
  // blocks.forEach(function(element){
  //   console.dir(element);
  // })
   function randomColor (){
   return Math.floor(Math.random()*256);
  }
  function randomBorder (){
   return Math.floor(Math.random()*25);
  }
  function randomDeg (){
   return Math.floor(Math.random()*180);
  }
  // block.style.backgroundColor = "rgba(13, 107, 86, 0.7)";
  blocks.forEach(function(element){
    element.style.transition = 'all 0.9s'
  })
  console.dir(block);
  setInterval(function(){
    blocks.forEach(function(element){
      // console.log("rgb(" + random + ", " + random + ", " + random + ")")
      element.style.backgroundColor = 'rgb(' + randomColor() + ", " + randomColor() + ", " + randomColor() + ')';
      element.style.border = randomBorder() + "px solid " + 'rgb(' + randomColor() + ", " + randomColor() + ", " + randomColor() + ')';
      element.style.transform = "rotate(" + randomDeg() + "deg)";
    })
  }, 700)
  
}