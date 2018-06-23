const objs = require("../main");
var rootElement = document.getElementById("carousel-wrap1");
var Carousel = objs.Carousel 
var carousel = new Carousel(rootElement);
test("carousel contains HTMLElement", function(){
	expect(carousel.rootElement instanceof HTMLElement).toBe("true");
})

