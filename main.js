// magnetic Button

let magnetic = document.querySelector(".magnetic")
magnetic.addEventListener('mousemove', (e) => {
    let x = e.offsetX
    let y = e.offsetY
    let BoxWidth = magnetic.clientWidth
    let BoxHeight = magnetic.clientHeight
    let moveX = (x - BoxWidth/2)
    let moveY = (y - BoxHeight/2)

    magnetic.style.transform = `translateX(${moveX}px)
    translateY(${moveY}px)`
})

magnetic.addEventListener("mouseout", (e) => {
    magnetic.style.transform = ``
})

// Custom Cursors

const cursor = document.querySelector(".cursor")

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top: ' + (e.pageY - 10) + 'px; left: ' + (e.pageX - 10) + 'px')
})

const cursor2 = document.querySelector(".cursor2")

document.addEventListener('mousemove', e => {
    cursor2.setAttribute('style', 'top: ' + (e.pageY - 10) + 'px; left: ' + (e.pageX - 10) + 'px')
})

// animation

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
            observer.unobserve(entry.target);
        }
    })
}, { once: true });


const hidden = document.querySelectorAll('.hidden');
hidden.forEach((el) => observer.observe(el));

const observer_top = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show_top')
            observer_top.unobserve(entry.target);
        }
    })
}, { once: true });

const hidden_top = document.querySelectorAll('.hidden_top');
hidden_top.forEach((el) => observer_top.observe(el));


const observer_right = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show_right')
            observer_top.unobserve(entry.target);
        }
    })
}, { once: true });

const hidden_right = document.querySelectorAll('.hidden_right');
hidden_right.forEach((el) => observer_right.observe(el));


const observer_left = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show_left')
            observer_top.unobserve(entry.target);
        }
    })
}, { once: true });

const hidden_left = document.querySelectorAll('.hidden_left');
hidden_left.forEach((el) => observer_left.observe(el));
