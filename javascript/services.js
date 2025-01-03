let homebtn=document.querySelector("#homebtn");
homebtn.addEventListener("click",function(){
    console.log("btn clicked");
    window.location.href="index.html";
})



let observer=new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
      console.log("observing")
  if(entry.isIntersecting){
      entry.target.classList.add("card1show");
  }else{
      entry.target.classList.remove("card1show");
  }
});
});
let hiddenElements=document.querySelectorAll(".card1");
hiddenElements.forEach((el)=>observer.observe(el));

// let observer2=new IntersectionObserver((entries)=>{
//   entries.forEach((entry)=>{
//     if(entry.isIntersecting){
//       entry.target.classList.add("h1show");

//     }else{
//       entry.target.classList.remove("h1show");
//     }
//   });
// });
// let hiddenElements2=document.querySelectorAll(".h1hidden");
// hiddenElements2.forEach((el)=>observer2.observe(el));

let observer3=new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add("card2show");

    }else{
      entry.target.classList.remove("card2show");
    }
  });
});
let hiddenElements3=document.querySelectorAll(".card2hidden");
hiddenElements3.forEach((el)=>observer3.observe(el));