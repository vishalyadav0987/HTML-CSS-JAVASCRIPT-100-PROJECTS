var t1 = gsap.timeline({
    scrollTrigger: {
        trigger: "#main-2",
        start: "50% 50%",
        end: "100% 50%",
        scrub: 2, // Use boolean value, not a string
        // markers: true,
        pin : true,
    }
})

t1.to("#top",{
    top:"-50%"
},'a')
.to("#bottom",{
    bottom:"-50%"
},'a')
.to("#top-h",{
    top:"60%"
},'a')
.to("#bottom-h",{
    bottom:"60%"
},'a')
.to("h2",{
    top:"30%"
},"")
.to("span",{
    top:"40%"
},"")