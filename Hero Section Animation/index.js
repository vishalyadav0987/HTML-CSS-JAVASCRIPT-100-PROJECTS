const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf);

const tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#main-hero",
        start : "50% 50%",
        end : "150% 50%",
        scrub : true,
        markers: true,
        pin : true, // container static
    }
})
tl.to(".rotate-div",{
    rotate : -15,
    scale : 0.8
},'a')

tl.to("#box-1",{
   marginTop : "-15%"
},'a')
tl.to("#box-2",{
   marginTop : "-22%"
},'a')
tl.to("#box-3",{
    marginTop : "-18%"
},'a')
tl.to("#box-4",{
    marginTop : "-25%"
},'a')
tl.to("#box-5",{
    marginTop : "-20%"
},'a')
tl.to(".overlay h1",{
   opacity : "1"
},'a')
tl.to(".overlay",{
   backgroundColor :"#0000009f"
},'a')
tl.to(".scrolling",{
   width : "100%"
},'a')