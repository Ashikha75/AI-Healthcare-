window.addEventListener("load", () => {
    console.log("Welcome to ElderCare AI!");
});
const getStartedBtn = document.querySelector(".btn");
if (getStartedBtn) {
    getStartedBtn.addEventListener("click", function () {
        alert("Welcome to ElderCare AI! Let's explore the Voice Assistant.");
    });
}
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.03)";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });
});
const navLinks = document.querySelectorAll(".nav-links a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(item => item.classList.remove("active"));
        link.classList.add("active");
    });
});
const footer = document.querySelector("footer p");

if (footer) {
    const year = new Date().getFullYear();
    footer.innerHTML = `© ${year} ElderCare AI | Final Year Project`;
}