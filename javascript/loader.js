console.log("Gsap connected")

function preloader() {
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    setInterval(() => {
        body.style.overflow = "visible";
    }, 0);
    gsap.from(".hero__heading", {
        opacity: 0, 
        duration: 0.5,
        y: -10,
    })
    gsap.to(".hero__divider", {
        delay: .6,
        duration: 1,
        width: "100%",
    })
    gsap.from(".content__container", {
        duration: 1,
        delay: 1,
        opacity: 0,
    })
}
preloader()

