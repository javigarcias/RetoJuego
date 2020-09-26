
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
    constructor(nombre, ataque, defensa, puntos, img){
        this.nombre = nombre;
        this.ataque = ataque;
        this.defensa = defensa;
        this.puntos = puntos;
        this.img = img;
    }

    recibeSaque = (ataque) =>{
        this.puntos -= ataque - this.defensa;
    }

    
}

const bela = new Jugador ("Bela", 200, 200, 800, "../img/bela2.jpg");
const paquito = new Jugador ("Paquito", 300, 150, 1200, "../img/paquito2.jpg");
const lebron = new Jugador ("Lebron", 400, 200, 1100, "../img/lebron2.jpg");
const lamperti = new Jugador ("Lamperti", 100, 50, 200, "../img/lamperti2.jpg");


let players = [];
let player1 = players[0];
let player2 = players[1];

const playerSelect1 = document.getElementById("p1Select");
const playerSelect2 = document.getElementById("p2Select");
const nameP1 = document.getElementById("nameP1");
const nameP2 = document.getElementById("nameP2");
const boton2 = document.getElementById("boton2");
const p1Juega = document.getElementById("p1Juega");
const p2Juega = document.getElementById("p2Juega");
const botonSaqueP1 = document.getElementById("botonSaqueP1");
const botonSaqueP2 = document.getElementById("botonSaqueP2");
const ganador = document.getElementById("ganador");

const selectPersonaje = (nombre) =>{
    console.log(nombre);
    switch (nombre){
        case "bela":
            players.push(bela);
            pintarPlayers(bela);
            document.getElementById("bela").style.pointerEvents = "none";
            break;
        case "lebron":
            players.push(lebron);
            pintarPlayers(lebron);
            document.getElementById("lebron").style.pointerEvents = "none";
            break;
        case "paquito":
            players.push(paquito);
            pintarPlayers(paquito);
            document.getElementById("paquito").style.pointerEvents = "none";
            break;
        case "lamperti":
            players.push(lamperti);
            pintarPlayers(lamperti);
            document.getElementById("lamperti").style.pointerEvents = "none"
            break;
    }
    if (players.length === 2){
        disablePlayers();
        document.getElementById("boton2").disabled = false ;  
    }
} 

const pintarPlayers = (player) =>{
    if (players.length < 2){
        playerSelect1.style.backgroundImage = `url(${player.img})`;
        p1Juega.style.backgroundImage = `url(${player.img})`;
        nameP1.innerHTML = `PLAYER 1: ${player.nombre}`;
    }else{
        playerSelect2.style.backgroundImage = `url(${player.img})`;
        p2Juega.style.backgroundImage =`url(${player.img})`;
        nameP2.innerHTML = `PLAYER 2: ${player.nombre}`;
    }
}

const disablePlayers = () =>{
    document.getElementById("bela").style.pointerEvents = "none";
    document.getElementById("paquito").style.pointerEvents = "none";
    document.getElementById("lebron").style.pointerEvents = "none";
    document.getElementById("lamperti").style.pointerEvents = "none"
}

const sacar = (jugador) =>{
    if (jugador === 1){
        botonSaqueP1.style.display = "none";
        botonSaqueP2.style.display = "block";
        players[1].recibeSaque(players[0].ataque);
        console.log(players[1].puntos);
        if (players[1].puntos <= 0){
            cambioPantalla(4);
            pintarGanador(players[0])
            console.log("Jugador 1 ha ganado")
        }
    }else{
        botonSaqueP2.style.display = "none";
        botonSaqueP1.style.display = "block";
        players[0].recibeSaque(players[1].ataque);
        console.log(players[0].puntos);
        if (players[0].puntos <= 0){
            cambioPantalla(4);
            pintarGanador(players[1])
            console.log("Jugador 2 ha ganado");
        }
    }
}

const pintarGanador = (player) =>{
    ganador.style.backgroundImage = `url(${player.img})`;

}

const reiniciar = () =>{
    window.location.reload();
}