

function validateValue() {
    var x, text;
    var inputNumber, valorJson;

    x = document.getElementById("number").value;

    if (x > 1 && x < 100000000000) {
        text = "Valor informado esta sendo verificado...";
    } else {
        text = "Por favor digite um numero no campo";
    }
    document.getElementById("demo").innerHTML = text;

    inputNumber = Number(x);

    valorJson = {"valor":inputNumber};

    return valorJson;

}
