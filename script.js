const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

gsap.registerPlugin(ScrollTrigger);

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







locoScroll.on("scroll", (scrollArgs) => {
  const scrollY = scrollArgs.scroll.y;
  if(scrollY > 20){
    gsap.to(ani,{
      y:-100,
      duration : 1,
      opacity :0
    })
    }
    else{
      gsap.to(ani,{
        opacity:1,
        y:0,
        duration : 1
      })
  }
});





const boxanimation = document.querySelectorAll(".boxanimation");
const heading = document.querySelectorAll(".boxanimation .proj-head h1");

boxanimation.forEach(function(elem){

  elem.addEventListener("mouseenter",function(){
      heading.forEach(function(head){
        gsap.to(heading,{
          y:-50,
          duration:1,
          ease:Power3
        })
      })
  })
  elem.addEventListener("mouseleave",function(){
      gsap.to(heading,{
        y:0,
        duration:1,
        ease:Power3
      })
  })
});


gsap.from("#projects .heading h1",{
  y:-50,
  duration:1
});



Shery.imageEffect(".animate",{
  style:1,
  // debug:true,
  gooey:true,
  config:{"a":{"value":2.06,"range":[0,30]},"b":{"value":0.94,"range":[-1,1]},"zindex":{"value":"1","range":[-9999999,9999999]},"aspect":{"value":0.8571428328144324},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":7.84,"range":[1,15]},"durationOut":{"value":4.74,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.24,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":1.76,"range":[0,10]},"metaball":{"value":0.34,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.49,"range":[0,2]},"noise_scale":{"value":12.21,"range":[0,100]}}
  
  
});



Shery.imageEffect("#img1",{
  style:3,
  // debug:true,
  config:{"uFrequencyX":{"value":8.4,"range":[0,100]},"uFrequencyY":{"value":12.21,"range":[0,100]},"uFrequencyZ":{"value":13.74,"range":[0,100]},"geoVertex":{"range":[1,64],"value":64},"zindex":{"value":"1","range":[-9999999,9999999]},"aspect":{"value":0.8928674977637355},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.18,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
});


const ani = document.querySelectorAll(".ani")

const toggle = document.querySelector(".toggle");
const svgbtn = document.querySelectorAll(".toggle .none");
const topnavbar = document.querySelector("#topnavbar");
let flag = 0 ;

toggle.addEventListener("click",function(){
  if(flag === 0){
    ani.forEach(function(elem){
      gsap.to(elem,{
          opacity : 0
      })
    })
    topnavbar.style.top = 0,
    svgbtn.forEach(function(element) {
      element.style.display = 'none';
    });
  
    flag = 1;
    var tl = gsap.timeline();
    tl.from("#topnavbar .top-head h2",{
      y:"100%",
      // duration:0.8,
      delay:0.8,
      stagger : 0.2,
    })
    
  }
  else{
    svgbtn.forEach(function(element) {
      element.style.display = 'block';
    });
    
    topnavbar.style.top = "-100%"
    ani.forEach(function(elem){
      setTimeout(() => {
        gsap.to(elem,{
          opacity:1
        })
      }, 500);
      
    })
    flag = 0;
  }
});


let played = false
const line = document.querySelectorAll(".line");

line.forEach(function(elem){
  
    gsap.from(elem, {
      width: 0,
      right: '-100%',
      duration: 2,
      scrollTrigger: {
        trigger: elem,
        scroller : "#main",
        start: '-400% 93%',
        end: 'bottom 93%',
        scrub: 2,
      }
    });
})

const underLine = document.querySelectorAll(".under-line")
if(played === false){
underLine.forEach(function(elem){

  gsap.from(elem,{
    width: 0,
    right: '-100%',
    duration: 2,
    scrollTrigger: {
      trigger: elem,
      scroller : "#main",
      start: '-400% 93%',
      end: 'bottom 93%',
      scrub: 1,
      // markers : true
    }
  })

})
 played = true;
}


const head = document.querySelectorAll(".head-main");

head.forEach(function(elem){
  gsap.from(elem, {
    y:105,
    duration: 2,
    scrollTrigger: {
      trigger: elem,
      scroller : "#main",
      start: '0% 90%',
      end: '25% 90%',
      scrub: 2,
    }
  });
  
})


// Split text into words and characters
const text = new SplitType('.quote', { types: 'words, chars' })

// Animate characters into view with a stagger effect
gsap.from(text.chars, {
  scrollTrigger : {
      trigger : text.chars ,
      scroller : "#main",
      start : "top 90%",
      end : "top 50%",
      scrub : true,
      // markers : true
  },
  
  transformOrgin : "top",
  opacity : 0.1,
  stagger : 0.2,
  duration : 2
})

const text2 = new SplitType('.des', { types: 'words, chars' })

gsap.from(text2.chars, {
  scrollTrigger : {
      trigger : text2.chars ,
      scroller : "#main",
      start : "top 92%",
      end : "top 50%",
      scrub : true,
      // markers : true
  },
  
  transformOrgin : "top",
  y : -15,
  opacity : 0,
  stagger : 0.1,
  // duration : 2
})



const cursor = document.querySelector("#cursor");
const main = document.querySelector("#main");
const bo = document.getElementsByTagName("body")[0];

bo.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
      left : dets.x- cursor.clientWidth / 2,
      top : dets.y - cursor.clientHeight / 2,
      ease: 'power2.out',
      duration : 0.3,
      scale : 1,
    })
})
bo.addEventListener("mouseleave",function(dets){
    gsap.to(cursor,{
      scale : 0
    })
})



Shery.makeMagnet(".ani" /* Element to target.*/, {
  //Parameters are optional.
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 0.5,
});

const aboutBtn = document.querySelector(".about-button");

aboutBtn.addEventListener("mouseenter",function(){
  aboutBtn.style.color  = "black"
})
aboutBtn.addEventListener("mouseleave",function(){
  aboutBtn.style.color  = "white"
})


window.addEventListener('load', function () {
  var loadingScreen = document.getElementById('loadingScreen');
  loadingScreen.style.display = 'none';
  
  
var loaderani = gsap.timeline();
  
loaderani.from(".loader-head h1 , .loader-head h4",{
  y : 150,
  duration : 1.5,
  ease : Power4,
  // delay:0.5
})





let progress = 0;
// const preloader = document.getElementById('preloader');
const countElement = document.querySelector('#count span');

function updateCount() {
    countElement.textContent = `${progress}`;

    if (progress < 100) {
        progress += 1;
        setTimeout(updateCount, 25); // Adjust the timeout for the desired speed
    }
    else{
      loaderani.to(".loader-head h1,.newone .loader-head h4",{
        delay : 0.5,
        opacity: 0,
        duration:1
      })
      loaderani.to("#main_loader",{
        duration : 1.5,
        y:"-100%"
    })
      
      
      loaderani.from(".head h1",{
        y : 120,
        duration : 1,
        ease : Power4,
        delay : -1,
        stagger : 0.1
      })
      
    }
}

updateCount();



});





// project animation


function addHoverEffect(box, head) {
  box.addEventListener("mouseenter", function () {
    head.style.transform = "translateY(-100%)";
  });

  box.addEventListener("mouseleave", function () {
    head.style.transform = "translateY(0%)";
  });
}

for (let i = 1; i <= 6; i++) {
  let box = document.querySelector(`#box-${i}`);
  let boxHead = document.querySelector(`#box-${i} .proj-head h1`);

  addHoverEffect(box, boxHead);
}



// revel animation

let revelElements = document.querySelectorAll('.revel');

revelElements.forEach(function(element) {
  let aElement = element.querySelector('.revel a');
  element.addEventListener('mouseenter', function () {
    aElement.style.transform = "translateY(-100%)";    
  });

  element.addEventListener('mouseleave', function () {
    aElement.style.transform = "translateY(0%)";
  });
});



// loader




