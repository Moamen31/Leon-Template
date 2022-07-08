//get element
let links = document.querySelector(".links")
let ul = document.querySelector(".ul")
let icon = document.querySelector(".icon")
console.log(icon)

links.addEventListener("click", function () {
    ul.classList.toggle("active")
    icon.classList.toggle("full")
})