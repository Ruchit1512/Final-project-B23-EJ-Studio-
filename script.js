function init() {
  gsap.registerPlugin(ScrollTrigger);

  // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });



  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();

}
init();



gsap.from("#page1 h1", {
  opacity: 0,
  duration: 1,
  delay: 0.4,
  y: 60
})

gsap.from("#page1 h2", {
  opacity: 0,
  duration: 1,
  delay: 0.7,
  y: 60
})

gsap.from("#nav, p", {
  opacity: 0,
  duration: 2,
  delay: 0.9,
})


gsap.to("#page2 #img", {
  width: '100%',
  scrollTrigger: {
    trigger: '#page2',
    scroller: '#main',
    start: 'top 1%',
    end: 'top -40%',
    scrub: true,
    pin: true
  },
})


gsap.from("#page3 h6,#page3 h1",{
  opacity:0,
  rotate:5,
  y:100,
  stagger:0.25,
  scrollTrigger:{
    trigger:"#page3",
    scroller:"#main",
    start:"top 60%",
    end:"top 35%",
    scrub:5
  }
})


gsap.from("#page4 h1",{
  scale:2,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    start:"top 0%",
    end:"top -20%",
    scrub:2,
    pin:true,
  }
})
gsap.from("#page4 h2",{
  scale:2,
  scrollTrigger:{
    trigger:"#page4",
    scroller:"#main",
    start:"top 0%",
    end:"top -20%",
    scrub:2,
    pin:true,
  }
})

document.addEventListener("mousemove", function (dets) {
  document.querySelector("#cursor").style.left = `${dets.x}px`
  document.querySelector("#cursor").style.top = `${dets.y}px`
})


var flag = 0
document.querySelector("#nav-2").addEventListener("click", function () {
  if(flag == 0){
    document.querySelector("#nav-2").style.height = "24px"
    document.querySelector("#line1").style.rotate = "47deg"
    document.querySelector("#line2").style.rotate = "-48deg"
    document.querySelector("#full-scr").style.top = 0
    flag = 1
  }else{
    document.querySelector("#nav-2").style.height = "12px"
    document.querySelector("#line1").style.rotate = "0deg"
    document.querySelector("#line2").style.rotate = "0deg"
    document.querySelector("#full-scr").style.top = "-100%"
    flag = 0
  }
 
})




var loader = gsap.timeline()

loader.to("#text-2 h5", {
    y: -55,
    delay: 0.5,
    duration: 1.7,
  })


  .to("#text", {
    y: -50,
    rotateX: -90,
    duration: 0.8,
    opacity: 0
  })


  .to("#loader1", {
    height: 0,
    duration: 0.8,
    delay: 0.5
  })


  .to("#loader2", {
    height: 0,
    duration: 0.8,
  }, "-=0.3")


  .to("#loader3", {
    height: 0,
    duration: 0.8,
  }, "-=1")


  .to("#loader4", {
    height: 0,
    duration: 0.8,
  }, "-=0.7")


  .to("#loader", {
    top: "-100vh",
    duration: 0.1
  })