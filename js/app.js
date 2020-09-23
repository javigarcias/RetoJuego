const cambioPantalla = (valor) => {

    let faseDestino = "fase" + valor;

    let fases = ["fase1", "fase2", "fase3", "fase4"];

    fases = fases.filter(val => !faseDestino.includes(val));

    document.getElementById(faseDestino).style.display = "flex";

    for(let pantalla of fases){
        document.getElementById(pantalla).style.display = "none";

    }
}