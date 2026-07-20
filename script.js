// Дата свадьбы
const weddingDate = new Date("September 25, 2026 14:00:00").getTime();

function updateTimer() {

    const now = new Date().getTime();
    const distance = weddingDate - now;

    if (distance < 0) {

        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
        return;

    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const seconds = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    document.getElementById("days").innerHTML =
        String(days).padStart(2, "0");

    document.getElementById("hours").innerHTML =
        String(hours).padStart(2, "0");

    document.getElementById("minutes").innerHTML =
        String(minutes).padStart(2, "0");

    document.getElementById("seconds").innerHTML =
        String(seconds).padStart(2, "0");

}

updateTimer();
setInterval(updateTimer, 1000);
/* ---------- Появление блоков ---------- */

/* ---------- Появление элементов ---------- */

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".fade-up").forEach(item=>{
    observer.observe(item);
});
// ==========================
// Экран приветствия
// ==========================

const welcomeScreen = document.getElementById("welcomeScreen");
const guestInput = document.getElementById("guestName");
const openButton = document.getElementById("openInvite");
const guestGreeting = document.getElementById("guestGreeting");

const placeholders = [
    "Ваня и Маня",
    "Мама и Папа",
    "Лучший друг",
    "Любимая тётя",
    "Бабушка"
];

let placeholderIndex = 0;

if (guestInput) {

    guestInput.placeholder = placeholders[0];

    setInterval(() => {

        placeholderIndex++;

        if (placeholderIndex >= placeholders.length) {

            placeholderIndex = 0;

        }

        guestInput.placeholder = placeholders[placeholderIndex];

    }, 2200);

}

function openInvitation() {

    let name = guestInput.value.trim();

    if (name === "") {

        name = "Дорогие гости";

    }

    guestGreeting.textContent = name + "!";

    welcomeScreen.classList.add("hide");

    document.body.style.overflow = "";

    setTimeout(() => {

        welcomeScreen.remove();

    }, 700);

}

document.body.style.overflow = "hidden";

openButton.addEventListener("click", openInvitation);

guestInput.addEventListener("keydown", function(e){

    if(e.key==="Enter"){

        openInvitation();

    }

});
const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

if (music && musicBtn) {

    let isPlaying = false;

    musicBtn.addEventListener("click", () => {

        if (!isPlaying) {
            music.play();
            isPlaying = true;
            musicBtn.classList.add("playing");
        } else {
            music.pause();
            isPlaying = false;
            musicBtn.classList.remove("playing");
        }

    });

}
