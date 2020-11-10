function setBackground() {
    poster = document.getElementsByClassName("content");
    background = document.getElementById("background");
    background.style.width = poster[0].offsetWidth;
    console.log('page is fully loaded');
}

window.addEventListener('resize', setBackground);
window.addEventListener('load', setBackground);
