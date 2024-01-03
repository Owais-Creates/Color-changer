const body = document.querySelector("body");
const button = document.querySelectorAll(".btn")

button.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        if (e.target.id === "redColor") {
            body.style.backgroundColor = "red"

        } else if (e.target.id === "blueColor") {
            body.style.backgroundColor = "blue"

        } else if (e.target.id === "greenColor") {
            body.style.backgroundColor = "green"

        } else if (e.target.id === "brownColor") {
            body.style.backgroundColor = "brown"
        }
    })
})