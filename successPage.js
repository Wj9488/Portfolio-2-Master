window.addEventListener("DOMContentLoaded", () => {
    const successAnimation = () => {
        gsap.from("#personalPortfolio__appWrap_v1", {
            duration: 0.8,
            backgroundColor: "#2563eb",
        })
        gsap.from("#thankyou__svg", {
            duration: 1,
            opacity: 0,
            scale: 2,
            ease: "elastic(1, 0.3)"
        })
    
        gsap.from("#thankyou__message", {
            duration: 1,
            ease: "elastic(1, 0.3)", 
            opacity: 0,
            y: 40,
        }) 
        // setTimeout(() => {
        //     window.location.replace("https://willjonesdev.co.uk/")
        // }, 3000);
    }
    successAnimation();
})