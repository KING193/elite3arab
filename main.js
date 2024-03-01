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

const cursor = document.querySelector(".cursor")

document.addEventListener('mousemove', e => {
    cursor.setAttribute('style', 'top: ' + (e.pageY - 10) + 'px; left: ' + (e.pageX - 10) + 'px')
})

// 

const cursor2 = document.querySelector(".cursor2")

document.addEventListener('mousemove', e => {
    cursor2.setAttribute('style', 'top: ' + (e.pageY - 10) + 'px; left: ' + (e.pageX - 10) + 'px')
})