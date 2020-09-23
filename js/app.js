const cambioPantalla = (valor) => {
    console.log("Entra en funcion")
    let faseDestino = "fase" + valor;

    let fases = ["fase1", "fase2", "fase3", "fase4"];

    fases = fases.filter(val => !faseDestino.includes(val));

    document.getElementById(faseDestino).style.display = "flex";

    for(let pantalla of fases){
        document.getElementById(pantalla).style.display = "none";

    }
}






//Creacion de jugadores
/*class Jugador{
    constructor(nombre, ataque, defensa, ganar){
        this.nombre = nombre;
        this.ataque = ataque;
        this.defensa = defensa;
        this.ganar = ganar;
    }

    recibePunto()
}
*/