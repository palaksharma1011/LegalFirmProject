
let observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        console.log("using intersection observer");
        if(entry.isIntersecting){
            entry.target.classList.add("show");
            

        }else{
            entry.target.classList.remove("show");
            
        }
    });
});

let hiddenElements=document.querySelectorAll(".hidden");

hiddenElements.forEach((element)=>{
    observer.observe(element);
})
