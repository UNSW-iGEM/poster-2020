function setBackground() {
    poster = document.getElementsByClassName("content");
    background = document.getElementById("background");
    background.style.width = `${poster[0].offsetWidth}px`;
    rows = document.getElementById("rows");
    rows.style.height = `${background.offsetHeight}px`;
}

window.addEventListener('resize', setBackground);
window.addEventListener('load', setBackground);
