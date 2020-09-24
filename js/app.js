const cambioPantalla = (valor) => {
    let faseDestino = "fase" + valor;

    let fases = ["fase1", "fase2", "fase3", "fase4"];

    fases = fases.filter(val => !faseDestino.includes(val));

    document.getElementById(faseDestino).style.display = "flex";

    for(let pantalla of fases){
        document.getElementById(pantalla).style.display = "none";

    }
}






//Creacion de jugadores
class Jugador{
    constructor(nombre, ataque, defensa, puntos){
        this.nombre = nombre;
        this.ataque = ataque;
        this.defensa = defensa;
        this.puntos = puntos;
    }


}

const bela = new Jugador ("Bela", 200, 200, 800);
const paquito = new Jugador ("Paquito", 300, 150, 1200);
const lebron = new Jugador ("Lebron", 400, 200, 1100);
const lamperti = new Jugador ("Lebron", 100, 50, 200 );

let players = [];


const selectPersonaje = (nombre) =>{
    console.log(nombre);
    
        switch (nombre){
            case "bela":
                players.push(bela);
                break;
            case "lebron":
                players.push(lebron);
                break;
            case "paquito":
                players.push(paquito);
                break;
            case "lamperti":
                players.push(lamperti);
                break;
        }
        if (players.length === 2){
            cambioPantalla(3);
            console.log(players)
        }
   


} 