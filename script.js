var side = false;
var soy = "url1";
var faded = "url2";
function play(source, text) {
    document.querySelector(".lmg").src = source;
    document.querySelector(".topic").style.backgroundImage = "url("+source+")";
    document.querySelector(".now").innerHTML = text;
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