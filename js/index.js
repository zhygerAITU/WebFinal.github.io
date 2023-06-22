const toshakes = document.querySelectorAll('.toshake')
toshakes.forEach((toshake) => {
    toshake.addEventListener('mouseover', () => {
        toshake.classList.add("shake")
    })
    toshake.addEventListener('mouseout', () => {
        toshake.classList.remove("shake")
    })
})


const LoadNav = () => {
    return `
    <nav>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="gameplay.html">Gameplay</a></li>
            <li><a href="contact.html">Contact</a></li>
        </ul>
    </nav>`
}

// document.querySelector("#nav").innerHTML = LoadNav()


const openNav = () => {
    document.getElementById("myNav").style.width = "100%";
}
  
const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
}

const bgmusic = new Audio('music/background.mp3')

function togMusic() {
    if (bgmusic.paused == true) {
        bgmusic.play();
    } else {
        bgmusic.pause();
    }
}

document.addEventListener('keypress', (e) => { 
    if (e.key == 'b') {
        togMusic();
    }
})

