function task_two(){
    const element=document.querySelector("footer div");
    element.addEventListener("click",function(){
        let nom='';
        do{
            nom = prompt("What's your name?");
        }while(nom===null || nom === "" || nom.trim() === "" );
        if(nom!=null){
            const vv = confirm("Are you sure that name is your name ?");
            if(vv){
                alert(`Hello ${nom}!`);
                element.textContent=`Hello ${nom}!`;
            }
        }
    });
}
task_two();