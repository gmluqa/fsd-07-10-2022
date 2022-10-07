// for of is used with an array

// returns exact values

let videojuegos = ["dota 2", "quake", "doom"]

for (let joc of videojuegos) {
    console.log(joc)
}

// loops for each element in array

// for in returns index positions, as a string

for (let indice in videojuegos) {
    console.log(indice)
}

// for each, similar to for of, but mutates the array

videojuegos.forEach(xoc => console.log(xoc))

// OBJECT ORIENTED PROGRAMING!

// let jose = {
//     edad: 21,
//     nacionalidad: "Española",
//     nombre: "Jose",
//     residencia: "Nazaret",
//     hobbies: {
//         hobbie1: "anime",
//         hobbie2: "lol",
//         hobbie3: "mascotas",
//         hobbie4: "programar"
//     }
// }