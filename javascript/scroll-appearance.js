// (document).ready(function () {
//     (this).scrollTop(0);
// });

// window.onbeforeunload = function () {
//     window.scrollTo(0, 0);
// }

document.querySelectorAll(".bouncer>span").forEach(element => {
    element.classList.add("letter-hidden");
})

let intersectionObserverSettings = {
    root: null,
    rootMargin: "0px",
    threshold: 0
}

let intersectionObserverSettings2 = {
    root: null,
    rootMargin: "0px",
    threshold: 0.25
}

let callback = function (entries, observer) {
    let i = 0;
    entries.forEach(entry => {
        if (entry.isIntersecting)
            setTimeout(function () { entry.target.classList.remove("hidden") }, 200 * i++);
    })
}

let observer = new IntersectionObserver(callback, intersectionObserverSettings);
setTimeout(() => {
    document.querySelectorAll(".scroll-appearance").forEach(element => {
        observer.observe(element);
    });
}, 1000);

let callback2 = function (entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            let i = 0;
            entry.target.querySelectorAll("span").forEach(element => {
                setTimeout(function () {
                    setTimeout(bounceLetter.bind(element), 0);
                    setTimeout(element.classList.remove("letter-hidden"), 1500);
                }, 130 * i++);
            });
            observer2.unobserve(entry.target);
        }
    })
}

let observer2 = new IntersectionObserver(callback2, intersectionObserverSettings);
document.querySelectorAll(".bouncer").forEach(element => {
    observer2.observe(element);
});
