function deplacement_mouse(){
    let square=document.querySelector("canvas");
    square.style.position = "absolute";
    let white_box=document.getElementById("white_box");
    white_box.style.position = "relative";
    let isDown=false;
    let offsetX = 0;
    let offsetY = 0;
    square.addEventListener("mousedown",function(event){
        isDown=true;
        let rect = square.getBoundingClientRect();
        offsetX = event.clientX - rect.left;
        offsetY = event.clientY - rect.top;
    });
    document.addEventListener("mousemove",function(event){      
        if(isDown){
            //position de la souris  
            let cx = event.clientX;
            let cy = event.clientY;
            //position du white box par rapport à l'écran
            let rect=white_box.getBoundingClientRect();
            let px=rect.left;
            let py=rect.top;
            let x = cx - px - offsetX;
            let y = cy - py - offsetY;
            x = Math.max(0, Math.min(x, white_box.clientWidth - square.offsetWidth));
            y = Math.max(0, Math.min(y, white_box.clientHeight - square.offsetHeight));
            let xpi=document.getElementById("cx");
            let ypi=document.getElementById("cy");
            xpi.textContent=x;
            ypi.textContent=y;
            square.style.left=`${x}px`;
            square.style.top=`${y}px`;
            }
        });
    document.addEventListener("mouseup",function(){
        isDown=false;
    });
}
deplacement_mouse();