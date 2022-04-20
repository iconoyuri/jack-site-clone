let soundPlayer = {
    button: document.getElementById("sound-play-button"), // The ON/OFF button
    cloud: document.getElementById("sound-cloud"), // The cloud image
    setEvents: function () {
        this.button.addEventListener("click", this.musicOn.bind(this));
    },
    musicOn: function () {
        this.button.classList.remove("red-colored");
        this.button.classList.add("blue-colored");
        this.button.innerHTML = "ON";
        this.cloud.classList.remove("red-colored");
        this.cloud.classList.add("blue-colored");
        // Button onclick function inverting
        this.button.addEventListener("click", this.musicOff.bind(this));
        this.button.removeEventListener("click", this.musicOn.bind(this));
    },
    musicOff: function () {
        this.button.classList.remove("blue-colored");
        this.button.classList.add("red-colored");
        this.button.innerHTML = "OFF";
        this.cloud.classList.remove("blue-colored");
        this.cloud.classList.add("red-colored");
        // Button onclick function inverting
        this.button.addEventListener("click", this.musicOn.bind(this));
        this.button.removeEventListener("click", this.musicOff.bind(this));
    }
};
soundPlayer.setEvents();