// info button
var btns = document.getElementsByClassName("showcase-info-button");
btns[0].addEventListener("click", (e) => {
    document.getElementById("popup-container").style.display = "flex";
    document.getElementsByTagName("body")[0].style.overflow = "hidden";
});

// close button
var windowCloseBtn = document.getElementById("window-close-button");
windowCloseBtn.addEventListener("click", (e) => {
    document.getElementById("popup-container").style.display = "none";
    document.getElementsByTagName("body")[0].style.overflow = "auto";
})

// minimise button
var windowMinimiseBtn = document.getElementById("window-minimise-button");
windowMinimiseBtn.addEventListener("click", (e) => {
    document.getElementById("minimise-text").style.whiteSpace = "nowrap";
    document.getElementById("minimise-text").style.textOverflow = "ellipsis";
    document.getElementById("minimise-text").style.overflow = "hidden";
})

// maximise button
var windowMaximiseBtn = document.getElementById("window-maximise-button");
windowMaximiseBtn.addEventListener("click", (e) => {
    document.getElementById("minimise-text").style.whiteSpace = "normal";
    document.getElementById("minimise-text").style.overflow = "inherit";
})