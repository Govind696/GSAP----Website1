

let curser = document.querySelector(".curser")
let button = document.querySelectorAll(".btn")
let main = document.querySelector("#main")
let page1video = document.querySelector(".page1-video");
console.log(button)
document.addEventListener("mousemove",(dets)=>{
    // console.log(dets)
    curser.style.left = dets.x +  "px";
    // curser.style.top = dets.y + 20 + "px";
    curser.style.top = (dets.y - 15) + "px";
})

function mousehoverbtn(element2){
  element2.addEventListener('mouseenter', () => {
    curser.style.width = "35px";
    curser.style.height = "35px";
    element2.style.curser = "pointer";
  });
  
  element2.addEventListener('mouseleave', () => {
    curser.style.width = "17px";
    curser.style.height = "17px";
  });
}
button.forEach((butto) => {
  mousehoverbtn(butto);
});

function mousehover(element){
  element.addEventListener('mouseenter', () => {
    curser.innerText = 'Sound on'; // Change cursor to pointer on hover
    curser.style.width = "100px";
    curser.style.height = "20px";
  });
  
  element.addEventListener('mouseleave', (elem) => {
    curser.innerText = ''; // Change cursor back to default when leaving the image
    curser.style.width = "17px";
    curser.style.height = "17px";
  });
}
mousehover(page1video);

function init(){
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
init();




let tl = gsap.timeline({
    scrollTrigger:{
        trigger:".page1 h1",
        scroller:"#main",
        // markers:true,
        start:"top 25%",
        end:"top 0",
        scrub:3
    }
})
tl.to(".page1 h1",{
    x:-150,
},"govi")
tl.to(".page1 h2",{
    x:150,
},"govi")
tl.to(".page1 video",{
    width:"90%",
},"govi")

let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".page2 h1",
        scroller:"#main",
        // markers:true,
        start:"top 80%",
        end:"top 40%",
        scrub:3
    }
})
tl2.to("#main",{
    backgroundColor:"#fff"
})



let tl3 = gsap.timeline({
  scrollTrigger:{
      trigger:".page4",
      scroller:"#main",
      markers:true,
      start:"top 30%",
      end:"top 50%",
      scrub:3
  }
})

tl3.to("#main",{
  backgroundColor:"#0F0D0D"
})


let boxes = document.querySelectorAll(".box");
// boxes.forEach(function(elem){
//   elem.addEventListener("mouseenter",function(){
//     let att = elem.getAttribute("data-image");
//     curser.style.height = "400px";    
//     curser.style.width = "600px";    
//     curser.style.borderRadius = "0";    
//     curser.style.backgroundImage = `url(${att})`;    
//     curser.style.zIndex = "99";   
//   })
//   elem.addEventListener("mouseleave",function(){
//     elem.style.backgroundColor = "transparent"
//     let att = elem.getAttribute("data-image");
//     curser.style.height = "20px";    
//     curser.style.width = "20px";    
//     curser.style.borderRadius = "600px";    
//     curser.style.backgroundImage = ``;  
//   })
// })
boxes.forEach(function(elem){
  elem.addEventListener("mouseenter", function(){
    let att = elem.getAttribute("data-image");
    curser.style.height = "400px";    
    curser.style.width = "600px";    
    curser.style.borderRadius = "0";    
    curser.style.backgroundImage = `url(${att})`;    
    curser.style.zIndex = "9999";   // Ensure cursor appears above other elements
  });

  elem.addEventListener("mouseleave", function(){
    let att = elem.getAttribute("data-image");
    curser.style.height = "20px";    
    curser.style.width = "20px";    
    curser.style.borderRadius = "50%";  // Assuming a circular cursor
    curser.style.backgroundImage = ``;  
  });
});