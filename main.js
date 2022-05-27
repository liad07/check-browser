   var x=document.getElementById("browser");
   if (navigator.cookieEnabled){
       document.getElementById("cookies").textContent="cookies Enabled";
   }
   else{
       document.getElementById("cookies").textContent="cookies Disabled";

   }
   document.getElementById("lang").textContent=navigator.language;
    console.log("languages",navigator.languages);
    console.log("languages",navigator.connection);
    if (navigator.userAgent.indexOf("Chrome")>-1){
        x.textContent="Chrome";
    }
    else if (navigator.userAgent.indexOf("Firefox")>-1){
        x.textContent="Firefox";
    }
   else if (navigator.userAgent.indexOf("Safari")>-1){
        x.textContent="Safari";
    }
