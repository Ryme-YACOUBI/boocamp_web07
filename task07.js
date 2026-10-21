function cookies(){
    let link=document.querySelector("footer a");
    let tab_cookies=document.cookie.split(";");
    let exist=tab_cookies.find(cookie => cookie.trim()==="acceptsCookies=true");
    if(!exist){
        link.addEventListener("click",function(){
            document.cookie="acceptsCookies=true;max-age=86400";
        
        });
    }
    else {
        bloc.style.display = "none";
        afficherSuppression();
    }

    function afficherSuppression() {
        let secondBloc = document.createElement("div");
        let bouton = document.createElement("button");

        secondBloc.textContent = "Cookies accepted. ";
        bouton.textContent = "Delete the cookie";

        secondBloc.appendChild(bouton);
        document.querySelector("footer").appendChild(secondBloc);

        bouton.addEventListener("click", function () {
            document.cookie = "acceptsCookies=; max-age=0; path=/";
            secondBloc.remove();
            bloc.style.display = "block";
        });
    }
}

cookies();