function draw_triangle_audio(){
    let element=document.querySelector("canvas");
    let ctx=element.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(6,6);
    ctx.lineTo(14,10);
    ctx.lineTo(6,14);
    ctx.lineTo(6,6);
    ctx.lineWidth=1;
    ctx.fillStyle="white";
    ctx.fill();
    ctx.stroke();
    let audio=document.querySelector("audio");
    audio.src="./audio_test.MP3";
    element.addEventListener("click",function(){
        audio.play();
    });
    let pause=document.getElementById("pause");
    let stop=document.getElementById("stop");
    pause.addEventListener("click",function(){
        audio.pause();
    });
    stop.addEventListener("click",function(){
        audio.pause();
        audio.currentTime=0;
    });
}
draw_triangle_audio();