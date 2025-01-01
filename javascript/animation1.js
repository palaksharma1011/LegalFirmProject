let body=document.querySelector("body");

window.addEventListener("load", () => {
    const obj = document.createElement("img");
    const container = document.getElementById("imageContainer");
    let img=document.querySelector("img");
    setTimeout(() => {

      obj.src = "animation/midImg.png"; // Path to the overlay image
      obj.className = "img1";

      // Append the overlay image to the container
      container.appendChild(obj);

      setTimeout(() => {
        obj.remove();
        img.setAttribute("src","animation/endImg.png");
        body.classList.add("addAn");
          body.addEventListener("animationend",function(){
             window.location.href="index.html";
          })
  
     }, 1000);
    }, 500); 
  });



















