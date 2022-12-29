const rate = document.querySelectorAll(".btn");
const submit = document.getElementById("submit");
const thank = document.querySelector(".thank");
const rate_form = document.querySelector(".contener");
const score = document.getElementById("number");

submit.addEventListener("click", () => {
    thank.classList.remove("disactive");
    rate_form.classList.add("disactive");
});

rate.forEach(rates => {
    rates.addEventListener("click", () => {
        score.innerHTML = rates.innerHTML
    });
});