const stockProductos = [
    { 
        id: 1,
        nombre: "Crash Bandicoot",
        cantidad: 1,
        desc: "Juego plataformero, niveles dificiles",
        precio: 1200,
        img: "img/Crash.jpg",
      },
      {
        id: 2,
        nombre: "Mortal Kombat X",
        cantidad: 1,
        desc: "Luchas con los mejores graficos",
        precio: 1500,
        img: "img/mortal.jpg",
      },
      {
        id: 3,
        nombre: "Pac Man",
        cantidad: 1,
        desc: "Juego plataformero, niveles basicos",
        precio: 1570,
        img: "img/pacman.jpg",
      },
      {
        id: 4,
        nombre: "Dragon Ball Xenoverse",
        cantidad: 1,
        desc: "Vive la experiencia dragon ball",
        precio: 1000,
        img: "img/dragonball.jpg",
      },
      {
        id: 5,
        nombre: "Naruto Ninja Storm 4",
        cantidad: 1,
        desc: "La historia de Naruto",
        precio: 1200,
        img: "img/naruto.jpg",
      },
      {
        id: 6,
        nombre: "Shingeki Final Attack",
        cantidad: 1,
        desc: "Eren Jeager vuelve en formato gamer...",
        precio: 1200,
        img: "img/shingeki.jpg",
      },
      {
        id: 7,
        nombre: "League of Legends",
        cantidad: 1,
        desc: "No compres esto por tu bien",
        precio: 1400,
        img: "img/league.jpg",
      },
      {
        id: 8,
        nombre: "Call Of Duty Warzone",
        cantidad: 1,
        desc: "Dispara como nunca",
        precio: 1200,
        img: "img/callduty.jpg",
      },
      {
        id: 9,
        nombre: "Fifa 2019",
        cantidad: 1,
        desc: "Juego de futbol",
        precio: 1400,
        img: "img/fifa.jpg",
      },
      {
        id: 10,
        nombre: "Fornite",
        cantidad: 1,
        desc: "Battle Royale",
        precio: 1200,
        img: "img/fornite.jpg",
      },
];

const pedirProductos = () => {
    return new Promise ((resolve, reject) => {
        resolve(stockProductos);
    })
}

let productos = [];
const contenedor = document.querySelector("#contenedor");

function mostrarProductos(array) {
  array.forEach(item => {
    const li = document.createElement ("li");
    li.id = item.id;
    li.textContent = $(item.nombre) - $(item.precio)
    
    lista.append(li);
  });  
}

pedirProductos()
   .then((res) => {
    productos = res;
    mostrarProductos 
   })