let nav=document.querySelector("#navIcon");
let navbar=document.querySelector("#navContent")

nav.addEventListener("click",function(){
    console.log("clicked");
    
    
})
 
let faceimg=document.querySelector("#faceimg");
let msg=document.querySelector("#main-msg");
msg.addEventListener("mouseover",function(){
    faceimg.classList.add("faceTransition");
})

msg.addEventListener("mouseout",function(){
    faceimg.classList.remove("faceTransition");
})
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