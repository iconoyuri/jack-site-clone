
let bounceLetter = function () {
    this.classList.add("let-bounce");
    setTimeout(function () {
        this.classList.remove("let-bounce");
    }.bind(this), 1000);
};

(function () {
    let bouncerLetterList = document.querySelectorAll(".bouncer>span");
    for (let i = 0; i < bouncerLetterList.length; i++) {
        bouncerLetterList[i].addEventListener("mouseover", bounceLetter.bind(bouncerLetterList[i]));
    }
})();
 