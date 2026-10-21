function display_letters(){
    let count=0;
    let ch=''
    document.addEventListener("keydown",function(event){
        if(event.key.length===1){
            ch+=event.key;
            count++;
            const element=document.querySelector("footer div");
            if(count<=42){
                element.textContent=ch.slice(0,ch.length);
            }    
            else{
                element.textContent=ch.slice(ch.length-42);
            }
        }
    });  
}
display_letters();