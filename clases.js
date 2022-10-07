// class is the blueprint

// object is the instantiation

class Fighter {
    // propeties

    // this.propety refers to each object
    constructor(name, attack, defense, luck, agility) {
        this.hp = 100
        this.stamina = 100
        this.name = name
        this.attack = attack
        this.defense = defense
        this.luck = luck
        this.agility = agility
    }

    // methods
    punch(enemy) {
        enemy.hp -= (this.attack - enemy.defense) / enemy.luck * (Math.floor(Math.random() * 10))
    }

    run() { }

    block() { }
}

// Instantiation
let luchador1 = new Fighter("Rey Misterio", 60, 40, 9, 60)
let luchador2 = new Fighter("Joan Macarra", 100, 20, 9, 70)
let luchador3 = new Fighter("Goku", 80, 35, 10, 60)
let luchador4 = new Fighter("Manuel Calavera", 10, 100, 10, 15)

console.log(luchador1)
console.log(luchador2)
console.log(luchador3)
console.log(luchador4)


// Calling methods

luchador1.punch(luchador2)
luchador2.punch(luchador1)

console.log(luchador1)
console.log(luchador2)