let observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log("observing")
    if(entry.isIntersecting){
        entry.target.classList.add("show");
    }else{
        entry.target.classList.remove("show");
    }
});
});
let hiddenElements=document.querySelectorAll(".hidden");
hiddenElements.forEach((el)=>observer.observe(el));

let hiddenElements2=document.querySelectorAll(".hidden2");
hiddenElements2.forEach((el)=>observer.observe(el));


//progress bars animation
let observer2=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log("observing")
    if(entry.isIntersecting){
        entry.target.classList.add("progressShow");
    }else{
        entry.target.classList.remove("progressShow");
    }
});
});
let hiddenElements3=document.querySelectorAll(".progress-bar");
hiddenElements3.forEach((el)=>observer2.observe(el));
