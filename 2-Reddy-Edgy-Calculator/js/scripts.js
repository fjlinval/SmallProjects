let input1 = document.getElementById("inputcalc1");
let input2 = document.getElementById("inputcalc2");
let result = document.getElementById("resultText");
function nostyleborder (){
    input1.style.border = ("none");
    input2.style.border = ("none");
}
function nonumber() {
    alert("Introduzca ALGÚN dato, que no hacemos magia...");
    nostyleborder();
}
function nonumberleft() {
    nostyleborder();
    result.innerText = "Inserte un número en la caja izquierda";
    input1.style.border = ("5px solid white");
}
function nonumberright() {
    nostyleborder();
    result.innerText = "Inserte un número en la caja derecha";
    input2.style.border = ("5px solid white");
}

function basicOperationNum(nID) {
    if (input1.value.length === 0 && input2.value.length === 0) {
        nonumber();
    }else if(input1.value.length === 0){
        nonumberleft();
    }else if(input2.value.length === 0){
        nonumberright();
    }else{
        nostyleborder();
        let operation;
        // EN ESTE SWITCH 1:SUMA; 2:RESTA; 3:MULTIPLICA; 4:DIVIDE
        switch (nID) {
            case 1:
                operation = Number(input1.value) + Number(input2.value);
                result.innerHTML = input1.value + " + " + input2.value + " = <br>" + operation;
            break;
            case 2:
                operation = Number(input1.value) - Number(input2.value);
                result.innerHTML = input1.value + " - " + input2.value + " = <br>" + operation;
            break;
            case 3:
                operation = Number(input1.value) * Number(input2.value);
                result.innerHTML = input1.value + " x " + input2.value + " = <br>" + operation;
            break;
            case 4:
                operation = Number(input1.value) / Number(input2.value);
                result.innerHTML = input1.value + " / " + input2.value + " = <br>" + operation;
            break;
        }

    }
}

function potenciaNum() {
    if (input1.value.length === 0 && input2.value.length === 0) {
        nonumber();
    }else if(input1.value.length === 0){
        nonumberleft();
    }else if(input2.value.length === 0){
        nonumberright();
    }else{
        nostyleborder();
        let potencia = Math.pow(Number(input1.value),Number(input2.value));
        result.innerText = input1.value + " elevado a " + input2.value + " = <br>" + potencia;
    }
}
function Raiz_AbsolutoYRandomNum(nID) {
    if(input2.value.length === 0){
        nonumberright();
    }else{
        nostyleborder();
        switch (nID) {
            case 1:
                operation = Math.sqrt(Number(input2.value));
                result.innerHTML = "La raíz cuadrada de " + input2.value + " es = <br>" + operation;
                input1.value = "";
            break;
            case 2:
                let minNumber = Number(input1.value);
                let maxNumber = Number(input2.value);
                if (minNumber > maxNumber) {
                    result.innerHTML = "El número insertado a la izquierda debe ser MENOR que el de la derecha";
                }else{
                    operation = Math.floor(Math.random() * ((maxNumber + 1) - minNumber) + minNumber);
                    result.innerHTML = "El número aleatorio entre " + input1.value + " y " +  input2.value + " es = <br>" + operation;
                }

            break;
            case 3:
                operation = Math.abs(Number(input2.value));
                result.innerHTML = "El valor absoluto de " + input2.value + " es = <br>" + operation;
                input1.value = "";
            break;
        }
    }
}
function RoundResult (nID){
    if (result.innerText != "Aquí aparecerá el resultado") {
        let searchTerm = result.innerText.lastIndexOf("=");
        let resultNum = result.innerText.substring(searchTerm + 1);
        let finalResult;
        // EN ESTE SWITCH 1:ROUND; 2:FLOOR; 3:CEIL
        switch (nID) {
            case 1:
                finalResult =  Math.round(resultNum);
                document.getElementById("resultText").innerText = finalResult;
            break;
            case 2:
                finalResult =  Math.floor(resultNum);
                document.getElementById("resultText").innerText = finalResult;
                break;
            case 3:
                finalResult =  Math.ceil(resultNum);
                document.getElementById("resultText").innerText = finalResult;
            break;
        }
    }else{
        alert ("No se ha encontrado ninguna operación");
    }
}