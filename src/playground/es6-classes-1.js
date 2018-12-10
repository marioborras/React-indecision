class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name
        this.age = age
    }
    getGreeting() {
        return `Hi my name is ${this.name}`
    }
    getDescription() {
        return `${this.name} is ${this.age} years old`
    }
}

class Student extends Person {
    constructor(name, age, major){
        super(name, age )
        this.major = major
    }
    hasMajor(){
        return !!this.major
    }
    getDescription() {
        let description = super.getDescription()

        if (this.hasMajor()) {
            description += ` their major is ${this.major}.`
        }
        return description
    }
}

const me = new Student("Mario Borras",33, "English")

const other = new Student()

console.log(me.getDescription())
console.log(other.hasMajor())
console.log(me.hasMajor())
console.log(me.getDescription())

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }
    hasHome() {
        return this.homeLocation
    }
    getGreeting() { 
        let greeting = super.getGreeting()
        if (this.homeLocation) {
            greeting += ` I'm visiting from Miami!`
        }
        return greeting
    }
}

const mariob = new Traveler("Mario", 33, "Miami")
const other2 = new Traveler("jim",33)
console.log(mariob.getGreeting())
console.log(other2.getGreeting())
