let homebtn=document.querySelector("#homebtn");
homebtn.addEventListener("click",function(){
    console.log("btn clicked");
    window.location.href="index.html";
})

const targetDiv = document.querySelector("#side-nav");
    const offsetTop = targetDiv.offsetTop;

    window.addEventListener('scroll', () => {
      if (window.scrollY >= offsetTop) {
        targetDiv.style.position = 'fixed';
        targetDiv.style.top = '2em';
        targetDiv.classList.add("enter");
      }
      
      else {
        targetDiv.style.position = 'static';
        targetDiv.classList.remove("enter");

      }
    });


    function disableAnimations() {
      if (window.innerWidth <= 1000) {
        targetDiv.style.animation="none";
      }
    }
    
    // Run on page load
    disableAnimations();

    let cards1=document.querySelectorAll(".card1");
    for(let card of cards1){
      card.addEventListener("mouseover",cardVisiblityAdd);
      card.addEventListener("mouseout",cardVisiblityRemove);
    }
    for(let card of cards1){
      card.addEventListener("touchmove",cardVisiblityAdd);
      card.addEventListener("touchmove",cardVisiblityRemove);
    }
    function cardVisiblityAdd(){
      this.style.visibility="visible";
    }
    function cardVisiblityRemove(){
      this.style.visibility="hidden";
    }
    



