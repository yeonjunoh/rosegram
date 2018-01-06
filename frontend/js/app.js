/* function sayHello() {
    alert("hello");
}

function add(x, y) {
    return x + y;
}

function minus(x, y) {
    return x - y;
}

function devide(x, y) {
    return x / y;
}

function powerUp(x, y) {
    return x ** y;
}

function multiply(x, y) {
    return x * y;
}

function all(x, y) {
    return (
        console.log("Add:", add(x, y)),
        console.log("Minus:", minus(x, y)),
        console.log("Devide:", devide(x, y)),
        console.log("PowerUp:", powerUp(x, y)),
        console.log("Multiply:", multiply(x, y))
    );
}

all(3, 5) */
/* 
var ageOfUser = prompt("What is your age?");

if (ageOfUser < 18) {
    console.log("You can't drink");
} else if (ageOfUser > 18 && ageOfUser < 50) {
    console.log("go ahead");
} else if (ageOfUser > 50) {
    console.log("think of your health");
} else {
    console.log("whatever");
} */

/* 
var week = ["mon"]; */

movies = ["1", "2", "3", "4"];

var person1 = {
    name: "Alex",
    age: 44,
    favMovies: movies[1]
    married: true,
    exWives: ["1", "2"],
    dog: {
        name: "Fluffer",
        age: 13,
        color: "Brown"
    },
    greet: function (name) {
        console.log("Hello", name);
    }
}

var person2 = {
    name: "Rose",
    age: 24,
    favMovies: movies[2],
    married: true,
    exWives: ["1", "2"],
    dog: {
        name: "Fluffer",
        age: 13,
        color: "Brown"
    },
    greet: function (name) {
        console.log("Hello", name);
    }
}