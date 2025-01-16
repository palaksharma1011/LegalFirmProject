let ul = document.querySelector("ul");
let navbtn = document.createElement("li");
let a = document.querySelectorAll("a");
navbtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
navbtn.classList.add("navbtn");


if (window.innerWidth < 768) {
    ul.appendChild(navbtn);
}
navbtn.addEventListener("click", function () {
  
    a.forEach(element => {
        element.classList.toggle("display");
    });

})