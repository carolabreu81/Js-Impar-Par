var ImparPar = window.prompt ("Impar - Par")
for (let contador = 0; contador <= ImparPar; contador = contador + 1) {
    if(contador % 2 == 0 && contador !=0){
        console.log(contador + "   PAR: Está Classificado!")
    }else if (contador % 2 != 0) {
        console.log(contador + "   IMPAR: Está Desclassificado!")
    } else {
        console.log(contador + '\t Número: "ZERO" 0')
    }
}