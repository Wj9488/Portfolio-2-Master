function gsapPageLoad() {
    gsap.from("#anim__headerText", {
        duration: 1, 
        opacity: 0, 
        y: 10,
        ease: "expo.Out"
    })
    gsap.from("#anim__header_cta", {
        delay: 1.5,
        duration: 1, 
        opacity: 0, 
    })
    // gsap.from("#anim__main_nav", {
    //     delay: 2,
    //     duration: 1,
    //     opacity: 0,
    //     y: -20, 
    //     ease: "expo.Out"
    // })
    gsap.from("#content__gsap_fade", {
        delay: 2.5,
        duration: 0.5,
        opacity: 0,
        y: 10, 
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