function gsapPageLoad() {
    gsap.from("#blob", {
        duration: 2.5, 
        left: "50%",
        top: "0%",
    })
    gsap.from("#anim__border_horizontal", {
        delay: 1.25, 
        duration: 1,
        width: "0%",
    })
    gsap.from("#anim__headerText", {
        delay: 1.5,
        duration: 1, 
        opacity: 0, 
        y: -10,
    })
    gsap.from("#anim__header_arrow", {
        delay: 1.75,
        duration: 1, 
        opacity: 0, 
        y: -20,
    })
    gsap.from("#anim__header_cta", {
        delay: 2.25,
        duration: 1, 
        opacity: 0, 
    })
    gsap.from("#anim__main_nav", {
        delay: 2.5,
        duration: 1, 
        opacity: 0, 
        y: -20, 
        ease: "expo.Out"
    })
}
gsapPageLoad(); 

function gsapNav() {
    const navToggle = document.getElementById("navToggle")
    const navClose = document.getElementById("navClose")

    const navItem = document.querySelectorAll("#anim__navItem")

    navToggle.addEventListener("click", () => {
        openNav()
    })
    navClose.addEventListener("click", () => {
        closeNav()
    })

    function openNav() {
        gsap.to(".hidden__nav_container", {
            duration: 1,
            top: "-0vh",
            right: "-0%",
            width: "100vw",
            height: "100vh",
            borderBottomLeftRadius: "50px",
            ease: "expo.inOut"
        })
        gsap.to("#anim__navWrapper", {
            delay: 0.8,
            duration: 1,
            opacity: 1,
            y: 5,
        })
    }
    function closeNav() {
        gsap.to(".hidden__nav_container", {
            delay: 0.5,
            duration: 1,
            top: "-100vh",
            right: "-100%",
            width: "0vw",
            height: "0vh",
            borderBottomLeftRadius: "200px",
            ease: "expo.inOut"
        })
        gsap.to("#anim__navWrapper", {
            duration: 0.5,
            opacity: 0,
            y: -5,
        })
    }

    navItem.forEach(item => item.addEventListener("click", () => {
        closeNav();
    }))

    const altNavTrigger = document.getElementById("other__nav_toggle")

    window.addEventListener("scroll", () => {
        console.log(window.pageYOffset.toFixed(0))
        if (window.pageYOffset > 40) {
            gsap.to(altNavTrigger, {
                opacity: 1,
                duration: 0.1,
                y: -10,
            })
            altNavTrigger.style.opacity = "1"
        }
        else if (window.pageYOffset < 40) {
            gsap.to(altNavTrigger, {
                opacity: 0,
                duration: 0.5,
                y: 10,
            })
        }
    })

    altNavTrigger.addEventListener("click", () => {
        openNav();
    })

}
gsapNav();

function gsapScrollHandler() {
    gsap.registerPlugin(ScrollTrigger)
    if (window.innerWidth >= 700) {
        gsap.to("#blob", {
            scrollTrigger: {
                trigger: ".gsap__headerScrollTrigger",
                scrub: 2, 
                start: "center center"
            },
            height: "100vh",
        })
    }
    gsap.to("#grid__tile_one_bg", {
        scrollTrigger: {
            trigger: ".gsap__skillsScrollTrigger",
            scrub: 6, 
            start: "center center"
        },
        height: "100px",
        width: "100px",
    }) 
}
gsapScrollHandler()