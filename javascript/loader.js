
function preloader() {
    gsap.from(".preloader__text", {
        duration: 1,
        opacity: 0, 
        x: -20,
    })
    gsap.to(".preloader__text", {
        delay: 0.4,
        duration: 1,
        opacity: 0, 
        x: 20,
        display: "none", 
    })
    gsap.to("#stage1", {
        delay: 0.8,
        duration: 1, 
        x: window.innerWidth,
        borderRadius: "20px",
    }) 
    gsap.to("#stage2", {
        delay: 1.2,
        duration: 1, 
        x: -window.innerWidth,
        borderRadius: "30px",
    }) 
    gsap.to("#stage3", {
        delay: 1.6,
        duration: 1, 
        x: window.innerWidth,
        borderRadius: "30px",
    }) 
    gsap.to("#stage4", {
        delay: 2,
        duration: 1, 
        x: -window.innerWidth,
        borderRadius: "30px",
    }) 
    gsap.to("#stage5", {
        delay: 2.4,
        duration: 1, 
        x: window.innerWidth,
        borderRadius: "30px",
    }) 
    gsap.to(".preloader__container", {
        delay: 2.8,
        display: "none",
    })
    gsap.from(".content__container", {
        delay: 3.2, 
        opacity: 0,
        duration: 2,
    })
    gsap.from(".hero__heading", {
        delay: 3.3, 
        duration: 0.5,
        x: -10,
    })
}
preloader()
