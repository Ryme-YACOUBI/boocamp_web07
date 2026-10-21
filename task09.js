function dissapear_like_pro(){
    let fbtn=document.querySelector("button");
    let par=document.querySelectorAll("p");
    fbtn.addEventListener("click",function(){
        par.forEach(element => {
            element.style.display="none";
        });
    });
}
dissapear_like_pro();