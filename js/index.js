// info button
var btns = document.getElementsByClassName("showcase-info-button");
for(var i = 0; i < btns.length; i++){
    let num = i;
    btns[num].addEventListener("click", (e) => {
        document.getElementById("popup-container").style.display = "flex";
        document.getElementsByTagName("body")[0].style.overflow = "hidden";
    
        document.getElementById("popup-title").innerHTML = items[num].title;
        document.getElementById("minimise-text").innerHTML = items[num].description;

        document.getElementById("popup-icons").textContent = '';

        for(var j = 0; j < items[num].technologies.length; j++){
            var icon = document.createElement("I");
            var classes = items[num].technologies[j];
            icon.classList.add(...classes);
            document.getElementById("popup-icons").appendChild(icon);
        }
    });
}

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