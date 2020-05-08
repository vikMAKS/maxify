var side = false;
var soy = "url1";
var faded = "url2";
var dark = true;
function set() {
    document.querySelector(".songs").style.animation = "addin 0.6s ease-in";
}
setTimeout(() => {
    document.querySelector(".songs").style.animation = "";
});
function play(source, text, path) {
    document.querySelector(".lmg").src = source;
    document.querySelector(".topic").style.backgroundImage = "url("+source+")";
    document.querySelector(".msong").innerHTML = text;
    document.querySelector(".moment").src = path;
    if(dark==true) {
    document.querySelector(".fa-pause").style.color = "white";
    document.querySelector(".fa-caret-right").style.color = "white";
    } else {
    document.querySelector(".fa-pause").style.color = "black";
    document.querySelector(".fa-caret-right").style.color = "black";
    }
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
    if(dark==true) {
    document.querySelector(".fa-caret-right").style.color = "white";
    document.querySelector(".fa-pause").style.color = "dodgerblue";
    } else {
        document.querySelector(".fa-caret-right").style.color = "black";
        document.querySelector(".fa-pause").style.color = "orange";
    }
}
function start() {
    document.querySelector(".moment").play();
    if(dark==true) {
    document.querySelector(".fa-pause").style.color = "white";
    document.querySelector(".fa-caret-right").style.color = "dodgerblue";
    } else {
        document.querySelector(".fa-pause").style.color = "black";
        document.querySelector(".fa-caret-right").style.color = "orange";
    }
}
function theme() {
    if(dark == true) {
        document.documentElement.style.setProperty("--card", 'rgb(255, 255, 255)');
        document.documentElement.style.setProperty("--text", 'rgb(0, 0, 0)');
        document.documentElement.style.setProperty("--bg", 'rgb(235, 235, 235)');
        document.documentElement.style.setProperty("--player", 'rgb(240, 240, 240)');
        document.documentElement.style.setProperty("--hover", "orange");
        document.documentElement.style.setProperty("--shad", "rgb(245, 245, 245)");
        dark = false;
    } else {
        document.documentElement.style.setProperty("--card", 'rgb(0, 0, 0)');
        document.documentElement.style.setProperty("--text", 'rgb(255, 255, 255)');
        document.documentElement.style.setProperty("--bg", 'rgb(34, 34, 34)');
        document.documentElement.style.setProperty("--player", 'rgb(49, 48, 48)');
        document.documentElement.style.setProperty("--hover", "dodgerblue");
        document.documentElement.style.setProperty("--shad", "rgba(0, 0, 0, 0.4)");
        dark = true;
    }
}