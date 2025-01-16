
const toastElList = document.querySelectorAll('.toast')
const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl, option))

const offcanvasElementList = document.querySelectorAll('.offcanvas')
const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new bootstrap.Offcanvas(offcanvasEl))

let disclaimer=document.querySelector("#disclaimer");

window.addEventListener("pageshow",function(){
    setTimeout(() => {
        console.log("disclaimer showing")
        disclaimer.style.visibility="visible";  
    }, 2500);
})
let closedisc=document.querySelector("#closebtn");
closedisc.addEventListener("click",function(){
    disclaimer.style.visibility="hidden";

})

