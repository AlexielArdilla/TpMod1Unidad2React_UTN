function suma() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = `Resultado: ${num1 + num2}`;
}

function resta() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = `Resultado: ${num1 - num2}`;
}

function multiplicacion() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = `Resultado: ${num1 * num2}`;
}

function division() {
    let num1 = parseInt(document.getElementById("num1").value);
    let num2 = parseInt(document.getElementById("num2").value);
    document.getElementById("resultado").innerHTML = `Resultado: ${num1 / num2}`;
}