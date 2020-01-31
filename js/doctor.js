
function diagnosticar(){

    console.log("DIAGNOSTICANDO");
    
    var dolorDeCabeza = document.getElementById("dolorDeCabeza").checked;
    var fiebre = document.getElementById("fiebre").checked;
    var origen = document.getElementById("origen").checked;

    if (dolorDeCabeza ==true){
        if (fiebre ==true){
            if (origen ==true){
                alert("Tienes Coronavirus");
            } else {
             alert("Tienes Gripe");  }
        }else { 
             alert("No tienes Nada");}
    }else
      {
        alert("Estas como una Rosa");       
    }
            



    console.log(dolorDeCabeza);


   
}
