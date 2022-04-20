

let curtainProgress = function () {
    setInterval(() => {
        document.querySelector(".root-curtain #progress-bar").value += 1;
    }, 15);
}

let curtainRaise = function (e) {
    e.preventDefault();
    document.querySelector(".root-curtain").style.left = 0;
    setTimeout(curtainProgress, 1200);
    setTimeout(() => {
        document.querySelector(".root-curtain").style.left = "100%";
        setTimeout(() => window.location = "", 500);
    }, 2900);
}

document.querySelectorAll(".site-pages a").forEach(element => element.addEventListener("click", curtainRaise));