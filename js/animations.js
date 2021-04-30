const locoScroll = new LocomotiveScroll({
    el: document.querySelector('.scroll-container'),
    smooth:true
})

gsap.from('.hero .text-content',{
    duration:1.5,x:-300,opacity:0,ease:'power2.out'
})
gsap.from('.hero .image-and-link',{
    duration:1.5,x:300,opacity:0,ease:'power2.out'
})

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".scroll-container", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".scroll-container").style.transform ? "transform" : "fixed"
});


gsap.from('.ability-section:nth-child(1) img',{scrollTrigger:{
    scroller:'.scroll-container',
    trigger:'.ability-section:nth-child(1)',
    start:'top center'
},duration:1,x:300,opacity:0,ease:'power2.out'})
gsap.from('.ability-section:nth-child(1) .text-content',{scrollTrigger:{
    scroller:'.scroll-container',
    trigger:'.ability-section:nth-child(1)',
    start:'top center'
},duration:1,x:-300,opacity:0,ease:'power2.out'})

gsap.from('.ability-section:nth-child(2) img',{scrollTrigger:{
    scroller:'.scroll-container',
    trigger:'.ability-section:nth-child(2)',
    start:'top center'
},duration:1,x:-300,opacity:0,ease:'power2.out'})
gsap.from('.ability-section:nth-child(2) .text-content',{scrollTrigger:{
    scroller:'.scroll-container',
    trigger:'.ability-section:nth-child(2)',
    start:'top center'
},duration:1,x:300,opacity:0,ease:'power2.out'})

gsap.from('.ability-section:nth-child(3) img',{scrollTrigger:{
    scroller:'.scroll-container',
    trigger:'.ability-section:nth-child(3)',
    start:'top center'
},duration:1,x:300,opacity:0,ease:'power2.out'})
gsap.from('.ability-section:nth-child(3) .text-content',{scrollTrigger:{
    scroller:'.scroll-container',
    trigger:'.ability-section:nth-child(3)',
    start:'top center'
},duration:1,x:-300,opacity:0,ease:'power2.out'})



gsap.from('.creation-process  h2',{
    scrollTrigger:{
        scroller:'.scroll-container',
        trigger:'.creation-steps-wrapper',
        start:'top center'
    },
    duration:1,
    opacity:0
})
gsap.from('.creation-process  .ability-slogan',{
    scrollTrigger:{
        scroller:'.scroll-container',
        trigger:'.creation-steps-wrapper',
        start:'top center'
    },
    duration:1,
    opacity:0
})

gsap.from('.creation-step',{
    scrollTrigger:{
        scroller:'.scroll-container',
        trigger:'.creation-steps-wrapper',
        start:'top center'
    },
    stagger:.1,
    duration:.5,
    scale:0,
    opacity:0,
    ease:'power2.out'
})

gsap.from('.contact .container .text-content',{
    scrollTrigger:{
        scroller:'.scroll-container',
        trigger:'.contact',
        start:'top center'
    },
    duration:1,
    opacity:0,
    x:-300
})
gsap.from('.contact .container form',{
    scrollTrigger:{
        scroller:'.scroll-container',
        trigger:'.contact',
        start:'top center'
    },
    duration:1,
    opacity:0,
    x:300
})

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();