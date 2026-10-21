function pers_btns_ld(){
    const btn_plus=document.getElementById("plus");
    const btn_moin=document.getElementById("moin");
    const ld=document.querySelector("select");
    let valeur_px=16;
    btn_plus.addEventListener("click",function(){
        valeur_px=valeur_px+2;
        document.body.style.fontSize=`${valeur_px}px`;
    });
    btn_moin.addEventListener("click",function(){

        valeur_px=valeur_px-2;
        document.body.style.fontSize=`${valeur_px}px`;
    });
    ld.addEventListener("change",function(){
        document.body.style.backgroundColor=ld.value;
    });
}
pers_btns_ld();