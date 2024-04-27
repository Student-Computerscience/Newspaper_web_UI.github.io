const scroll = new LocomotiveScroll({
   el: document.querySelector('#main'),
   smooth: true
});

 let tl = gsap.timeline()
 tl.to("#page1",{
    y:"100vh",
    scale:0.5,
    duration:0
})
 tl.to("#page1",{
    y:"0vh",
    duration:0.8,
    delay:1
 })
 tl.to("#page1",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0.5
 })