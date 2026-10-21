function bascules(){
    let par=document.querySelectorAll("p");
    par.forEach(element => {
        element.addEventListener("mouseenter",function(){
            element.classList.add("blue");
        });
        element.addEventListener("mouseleave",function(){
            element.classList.remove("blue");
        });
        element.addEventListener("click",function(){
            element.classList.toggle("highlighted");
        });

    });
}
bascules();