function sayHello() {
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

all(3, 5)