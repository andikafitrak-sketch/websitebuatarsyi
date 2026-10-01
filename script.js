// ================================
// FOTO
// ================================

const photoInput = document.getElementById("photoInput");
const previewImage = document.getElementById("previewImage");
const photoPlaceholder = document.getElementById("photoPlaceholder");

photoInput.addEventListener("change", function () {

    const file = this.files[0];

    if (!file) {
        return;
    }

    const reader = new FileReader();

    reader.onload = function (event) {

        previewImage.src = event.target.result;

        previewImage.style.display = "block";

        photoPlaceholder.style.display = "none";

        // Simpan foto di browser
        localStorage.setItem(
            "girlfriendPhoto",
            event.target.result
        );
    };

    reader.readAsDataURL(file);

});


// ================================
// LOAD FOTO
// ================================

window.addEventListener("load", function () {

    const savedPhoto = localStorage.getItem("girlfriendPhoto");

    if (savedPhoto) {

        previewImage.src = savedPhoto;

        previewImage.style.display = "block";

        photoPlaceholder.style.display = "none";
    }


    // Load pesan

    const savedTitle = localStorage.getItem("girlfriendTitle");

    const savedText1 = localStorage.getItem("girlfriendText1");

    const savedText2 = localStorage.getItem("girlfriendText2");

    const savedText3 = localStorage.getItem("girlfriendText3");

    const savedClosing = localStorage.getItem("girlfriendClosing");


    if (savedTitle) {

        document.getElementById("messageTitle").textContent =
            savedTitle;

        document.getElementById("titleInput").value =
            savedTitle;
    }


    if (savedText1) {

        document.getElementById("messageText").textContent =
            savedText1;

        document.getElementById("textInput1").value =
            savedText1;
    }


    if (savedText2) {

        document.getElementById("messageText2").textContent =
            savedText2;

        document.getElementById("textInput2").value =
            savedText2;
    }


    if (savedText3) {

        document.getElementById("messageText3").textContent =
            savedText3;

        document.getElementById("textInput3").value =
            savedText3;
    }


    if (savedClosing) {

        document.getElementById("closing").textContent =
            savedClosing;

        document.getElementById("closingInput").value =
            savedClosing;
    }

});


// ================================
// SIMPAN PESAN
// ================================

function saveMessage() {

    const title =
        document.getElementById("titleInput").value;

    const text1 =
        document.getElementById("textInput1").value;

    const text2 =
        document.getElementById("textInput2").value;

    const text3 =
        document.getElementById("textInput3").value;

    const closing =
        document.getElementById("closingInput").value;


    // Ubah tampilan

    if (title.trim() !== "") {

        document.getElementById("messageTitle").textContent =
            title;

        localStorage.setItem(
            "girlfriendTitle",
            title
        );
    }


    if (text1.trim() !== "") {

        document.getElementById("messageText").textContent =
            text1;

        localStorage.setItem(
            "girlfriendText1",
            text1
        );
    }


    if (text2.trim() !== "") {

        document.getElementById("messageText2").textContent =
            text2;

        localStorage.setItem(
            "girlfriendText2",
            text2
        );
    }


    if (text3.trim() !== "") {

        document.getElementById("messageText3").textContent =
            text3;

        localStorage.setItem(
            "girlfriendText3",
            text3
        );
    }


    if (closing.trim() !== "") {

        document.getElementById("closing").textContent =
            closing;

        localStorage.setItem(
            "girlfriendClosing",
            closing
        );
    }


    alert("💗 Pesan berhasil disimpan!");

}


// ================================
// SCROLL KE PESAN
// ================================

function scrollToMessage() {

    document.getElementById("message").scrollIntoView({
        behavior: "smooth"
    });

}


// ================================
// ANIMASI HATI
// ================================

function createHeart() {

    const heartsContainer =
        document.querySelector(".hearts");

    const heart =
        document.createElement("div");

    heart.classList.add("heart");

    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘",
        "💝"
    ];

    heart.textContent =
        hearts[Math.floor(Math.random() * hearts.length)];


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.fontSize =
        (15 + Math.random() * 25) + "px";


    const duration =
        5 + Math.random() * 6;


    heart.style.animationDuration =
        duration + "s";


    heartsContainer.appendChild(heart);


    setTimeout(function () {

        heart.remove();

    }, duration * 1000);

}


// Buat hati setiap beberapa saat

setInterval(createHeart, 600);