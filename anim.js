function gsapPageLoad() {
    const tl = new TimelineLite({delay: 0}),
    documentBody = document.getElementById("app__body")
    firstBg = document.querySelectorAll('.text__first_bg'),
    word  = document.querySelectorAll('#anim__headerText');
  
    tl
        .to(documentBody, .2, {backgroundColor: "#000"})
        .to(documentBody, .2, {backgroundColor: "#ffbb00"})
        .to(documentBody, .2, {backgroundColor: "#06d6a0"})
        .to(documentBody, .2, {backgroundColor: "#affc41"})
        // .to(documentBody, .2, {backgroundColor: "#3a86ff"})
        .to(documentBody, .2, {backgroundColor: "#fafafa"})
        .to(firstBg, .4, {scaleX:1})
        .to(word, 0.2, {opacity:1}, "-=0.1")  
        .to(firstBg, .4, {scaleX:0})

    gsap.from("#gsap__divider_info_1", {
        delay: 2,
        duration: .5, 
        width: "0%",
    })
    gsap.from("#gsap__divider_info_2", {
        delay: 2.25,
        duration: .5, 
        width: "0%",
    })
    gsap.from("#job__notif", {
        duration: .5, 
        opacity: 0, 
        delay: 2.5,
    })
    gsap.from("#anim__header_cta", {
        delay: 2,
        duration: 1, 
        opacity: 0, 
    })
    gsap.from("canvas", {
        delay: 2.5, 
        duration: .5, 
        opacity: 0,
    })
    gsap.from("#anim__main_nav", {
        delay: 2.5,
        duration: 1,
        opacity: 0,
        y: -10, 
        ease: "expo.Out"
    })
    gsap.from("#content__gsap_fade", {
        delay: 2.5,
        duration: .5,
        opacity: 0,
        y: 10, 
        ease: "expo.Out"
    })
    // gsap.from(".services__border", {
    //     duration: .5,
    //     delay: 2.75,
    //     width: "0%"
    // })
    gsap.to(".services__border", {
        scrollTrigger: {
            trigger: "#service__grid_experience",
            toggleActions: "restart none reverse none",
            start: "center center",
        },
        duration: 1,
        width: "50%",
    })

    gsap.from("#gsap__divider_info_3", {
        scrollTrigger: {
            trigger: "#gsap__divider_info_3",
            start: "top center",
        },
        duration: 1,
        width: "0%",
    })
    gsap.from("#gsap__divider_info_4", {
        scrollTrigger: {
            trigger: "#gsap__divider_info_3",
            start: "top center",
        },
        duration: 1.25,
        width: "0%",
    })
    gsap.from("#gsap__work_ffa", {
        scrollTrigger: {
            trigger: "#gsap__work_ffa",
            start: "top center",
        },
        duration: .5,
        opacity: 0,
        y: 20,
    })
    gsap.from("#gsap__work_kx", {
        scrollTrigger: {
            trigger: "#gsap__work_kx",
            start: "top center",
        },
        duration: .5,
        opacity: 0,
        y: 20,
    })
    gsap.from("#gsap__work_hrm", {
        scrollTrigger: {
            trigger: "#gsap__work_hrm",
            start: "top center",
        },
        duration: .5,
        opacity: 0,
        y: 20,
    })
    gsap.from("#gsap__work_pp", {
        scrollTrigger: {
            trigger: "#gsap__work_pp",
            start: "top center",
        },
        duration: .5,
        opacity: 0,
        y: 20,
    })
    gsap.from(".gsap__wireframe", {
        scrollTrigger: {
            trigger: ".gsap__wireframe",
            start: "top center",
        },
        duration: .5,
        opacity: 0,
        stagger: .25,
        y: 20,
    })
    gsap.from("footer", {
        scrollTrigger: {
            trigger: "footer",
            // start: "top center",
        },
        duration: .5,
        opacity: 0,
        y: 20,
    })
    // restart center 
    // restart reverse 
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

function handleCanvas() {
    const canvas = document.getElementById('rain__canvas');
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight / 2;
		const ctx = canvas.getContext('2d');

		// Create the rain drops
		let drops = [];
		for (var i = 0; i < 500; i++) {
			drops.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				speed: Math.random() * 4 + 2,
				length: Math.random() * 20 + 5
			});
		}

		function draw() {
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			// Draw the rain drops
			ctx.fillStyle = "#000";
			for (let i = 0; i < drops.length; i++) {
				ctx.fillRect(drops[i].x, drops[i].y, 1, drops[i].length);
				drops[i].y += drops[i].speed;
				if (drops[i].y > canvas.height) {
					drops[i].y = 0;
				}
			}

			requestAnimationFrame(draw);
		}

		draw();
}
handleCanvas()
