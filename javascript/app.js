
let contact1=document.querySelector("#contact1btn");
let contact2=document.querySelector("#contact2btn");
contact1.addEventListener("click",function(){
    window.location.href="contact.html";
})
contact2.addEventListener("click",function(){
    window.location.href="contact2.html";
})

const toastElList = document.querySelectorAll('.toast')
const toastList = [...toastElList].map(toastEl => new bootstrap.Toast(toastEl, option))

const offcanvasElementList = document.querySelectorAll('.offcanvas')
const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new bootstrap.Offcanvas(offcanvasEl))


let headerbtns=document.querySelectorAll(".headerbtn");
let bar=document.querySelector(".bar");
let xmark=document.querySelector(".xmark");
bar.addEventListener("click",function(){
    for(let headerbtn of headerbtns){
        headerbtn.style.visibility="visible";
    }
    
    xmark.style.visibility="visible";
    bar.style.visibility="hidden";
})
xmark.addEventListener("click",function(){
    for(headerbtn of headerbtns){
        headerbtn.style.visibility="hidden";
    }
    xmark.style.visibility="hidden";
    bar.style.visibility="visible";
})

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

