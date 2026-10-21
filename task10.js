function todolist(){
    let text=document.getElementById("listItem");
    let btn=document.querySelector("button");
    btn.addEventListener("click",function(){
        let ele=document.createElement("div");
        ele.textContent=text.value;
        text.after(ele);
        text.value="";
    });
}
todolist();