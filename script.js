var close = document.querySelector("#hamburger i")
    var menu = document.querySelector(".language-opts i")

    var tl = gsap.timeline()
    tl.to("#hamburger", {
        transform: 'translateX(0%)',
        duration: 1,
        opacity: 1
    })
    tl.from("#hamburger h1", {
        x: 30,
        duration: 0.3,
        opacity: 0,
        stagger: 0.2
    })

    tl.from("#hamburger i", {
        scale: 0,
        opacity: 0,
        duration: 0.3
    })

    tl.pause()

    menu.addEventListener('click', function () {
        tl.play()
    })
    close.addEventListener("click", function () {
        tl.reverse()
    })