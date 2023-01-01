const ratebtn = document.querySelectorAll(".rate-btn");
const submit = document.getElementById("submit");
const resalt = document.getElementById("resalt");
const repeat = document.getElementById("repeat");
const mainpage = document.querySelector(".rate-page");
const thankpage = document.querySelector(".thank");

ratebtn.forEach(rates => {
    rates.addEventListener("click", () => {
        resalt.innerHTML = rates.innerHTML
    })
});

submit.addEventListener("click", () => {
    mainpage.style.display = "none"
    thankpage.style.display = "grid"
});

repeat.addEventListener("click", () => {
    mainpage.style.display = "grid"
    thankpage.style.display = "none"
    resalt.innerHTML = "0"
})