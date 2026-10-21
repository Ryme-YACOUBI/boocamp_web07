function count_clicks(){
    const white_box=document.querySelector("footer div")
    let count=0
    white_box.addEventListener("click",function(){
        count++;
        white_box.textContent=count;
});}
count_clicks()