
window.addEventListener("DOMContentLoaded", () => {
    const firstSVG = document.getElementById("header__top_svg")
    const secondSVG = document.querySelector(".svg__position");
    const arrowSVG = document.getElementById("header__arrow_svg");
    const thirdSVG = document.getElementById("header__bottom_svg");

    const timelineOne = new TimelineMax({});

    timelineOne.to(firstSVG, 3, {strokeDasharray: 300, strokeWidth: 2})

    gsap.from(firstSVG, {
        duration: 1,
        opacity: 0,
        y: 80,
        ease: "elastic.out(1, 0.3)",
    })

    const timelineTwo = new TimelineMax({});

    timelineTwo.to(secondSVG, 3, {strokeDasharray: 300, strokeWidth: 2})
    
    gsap.from(secondSVG, {
        duration: 1,
        opacity: 0,
        y: 80,
        ease: "elastic.out(1, 0.3)"
    })

    const timelineThree = new TimelineMax({});

    gsap.from(arrowSVG, {
        duration: 1,
        opacity: 0,
        y: 80,
        ease: "elastic.out(1, 0.3)"
    })

    timelineThree.to(arrowSVG, 3, {fill: "#2563eb"})

    const timelineFour = new TimelineMax({});

    gsap.from(thirdSVG, {
        duration: 1,
        opacity: 0,
        y: 80,
        ease: "elastic.out(1, 0.3)"
    })

    timelineFour.to(thirdSVG, 3, {strokeDasharray: 300, strokeWidth: 2})

    gsap.from("#personalPortfolio__appWrap_v1", {
        duration: 0.8,
        backgroundColor: "#2563eb",
    })
    gsap.from(".site__header_control", {
        delay: 0.25,
        duration: .75,
        opacity: 0,
        y: 80,
        ease: "circ.out",
        scaleX: 2,
    })
    gsap.from("#header__arrow_gsap", {
        delay: .5,
        duration: 1,
        opacity: 0,
        y: 40,
        ease: "circ.out"
    })
    gsap.from("#header__p_gsap", {
        delay: 1,
        duration: 1,
        opacity: 0,
        y: 20,
        ease: "circ.out"
    })

    gsap.from("#nav__gsap_target", {
        duration: 1,
        opacity: 0,
        y: -10,
        delay: 1.5,
        ease: "elastic.out(1, 0.8)"
    })

    gsap.from("#content__gsap_fade", {
        duration: 1,
        opacity: 0, 
        delay: 1.5,
    })
})