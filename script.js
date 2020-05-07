var side = false;
var soy = "url1";
var faded = "url2";
function play(source, text, path) {
    document.querySelector(".lmg").src = source;
    document.querySelector(".topic").style.backgroundImage = "url("+source+")";
    document.querySelector(".msong").innerHTML = text;
    document.querySelector(".moment").src = path;
    document.querySelector(".fa-pause").style.color = "white";
    document.querySelector(".fa-caret-right").style.color = "white";
}
function toggle() {
    if(side == false) {
        document.querySelector(".sidenav").style.display = "block";
        document.querySelector(".sidenav").style.transition = "display 0.4s";
        side = true;
    } else {
        document.querySelector(".sidenav").style.display = "none";
        side = false;
    }
}
function stop() {
    document.querySelector(".moment").pause();
    document.querySelector(".fa-pause").style.color = "dodgerblue";
    document.querySelector(".fa-caret-right").style.color = "white";
}
function start() {
    document.querySelector(".moment").play();
    document.querySelector(".fa-caret-right").style.color = "dodgerblue";
    document.querySelector(".fa-pause").style.color = "white";
}