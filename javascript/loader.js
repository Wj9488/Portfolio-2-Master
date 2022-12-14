console.log("")

window.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    setInterval(() => {
        body.style.overflow = "visible";
    }, 0);
    gsap.from(".hero__heading", {
        opacity: 0, 
        delay: 0.5,
        duration: 0.5,
        y: -10,
    })
    gsap.from(".nav__container", {
        opacity: 0,
        duration: 0.5,
        delay: 0,
    })
    gsap.to(".hero__divider", {
        delay: 1,
        duration: 1,
        width: "100%",
    })
    gsap.from(".content__container", {
        duration: 1,
        delay: 1.5,
        opacity: 0,
    })
    gsap.from(".bg__blur", {
        duration: 2, 
        opacity: 0, 
        delay: 1.8,
    })
})

const buttonAnim = () => {
    const copyBtn = document.querySelector(".email__copy");

    copyBtn.addEventListener("click", () => {
        console.log("copy__trig"); 
    })
}
buttonAnim();




