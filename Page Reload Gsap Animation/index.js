document.addEventListener("DOMContentLoaded", function () {
    // Get the element to animate
    const heroText = document.getElementById("hero-text");
    const heroText1 = document.getElementById("hero-text-1");
    const heroText2 = document.getElementById("hero-text-2");
    const heroText5 = document.getElementById("hero-text-5");
    const heroText6 = document.getElementById("hero-text-6");
    const heroText7 = document.getElementById("hero-text-7");
    const heroText3 = document.getElementById("hero-text-3");
    const heroText4 = document.getElementById("hero-text-4");
    const ok = document.querySelector(".ok");

    // Set up the initial state (hidden)
    gsap.set(heroText5, { opacity: 0, y: 600 });
    gsap.set(heroText6, { opacity: 0, y: 600 });
    gsap.set(heroText7, { opacity: 0, y: 600 });
    gsap.set(heroText3, { opacity: 0, y: 600 });
    gsap.set(heroText4, { opacity: 0, y: 600 });
    gsap.set(heroText, { height : 0});
    gsap.set(heroText1, { height : 0});
    gsap.set(heroText2, { height : 0});
    

    // Create the animation timeline
    const tl = gsap.timeline();

    // Add animation steps to the timeline
    tl.to(heroText5, { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 2 }, 'a');
    tl.to(heroText6, { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 2 }, 'a');
    tl.to(heroText7, { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 2 }, 'a');
    tl.to(heroText3, { opacity: 1, y: 370, duration: 1, ease: "power2.out", delay: 2 }, 'a');
    tl.to(heroText4, { opacity: 1, y: 370, duration: 1, ease: "power2.out", delay: 2 }, 'a');
    tl.to(heroText3, { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 1, color: "blueviolet" }, 'k');
    tl.to(heroText4, { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 1, color: "blueviolet" }, 'k');
    tl.to(ok, { duration: 1, ease: "power2.out", delay: 1, height: 0 }, 'k');
    
    tl.to(heroText, {  ease: "power2.out", delay: 1, height : "40%"}, 'k');
    tl.to(heroText1, {  ease: "power2.out", delay: 1,height : "40%"}, 'k');
    tl.to(heroText2, { ease: "power2.out", delay: 1,height : "40%"}, 'k');

    // Trigger the animation on page load
    tl.play();
});
