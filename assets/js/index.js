function getTheme() {
    if (navigator.cookieEnabled) {}
    else {
        document.getElementById("cookie").style.display = "block";
    }
    var theme = localStorage.getItem("theme")
    var body = document.getElementById("body")
    var toggle = document.getElementById("toggleIcon")

    if (theme == "light") {
        body.classList.add("lightMode")
        toggle.classList.remove("fa-sun")
        toggle.classList.add("fa-moon")
    } else {
        body.classList.remove("lightMode")
        toggle.classList.remove("fa-moon")
        toggle.classList.add("fa-sun")
}
}

function toggleTheme() {
    var body = document.getElementById("body")
    var toggle = document.getElementById("toggleIcon")

    if (body.classList.value == "lightMode") {
        body.classList.remove("lightMode")
        localStorage.setItem("theme", "dark");
        toggle.classList.remove("fa-moon")
        toggle.classList.add("fa-sun")
    } else {
        body.classList.add("lightMode")
        localStorage.setItem("theme", "light");
        toggle.classList.remove("fa-sun")
        toggle.classList.add("fa-moon")
    }
}

function hideCookie() {
    document.getElementById("cookie").style.display = "none";
}

var count = 1;
function clickName() {
  if (count<10) {
    count++;
  }
  else {
      easterEgg();
  }
};

function easterEgg() {
    function addImage(event) {
        var img = document.createElement("img")
        img.src = "assets/img/bludood.png"
        img.draggable = false
        img.style.position = "absolute";
        img.style.width = "50px"
        img.style.borderRadius = "10px"
        img.style.left = `${event.clientX - 25}px`
        img.style.top = `${event.clientY + window.scrollY - 25}px`
    
        const body = document.getElementById("body");
        body.appendChild(img);
    }
    
    document.addEventListener("click", addImage);
}