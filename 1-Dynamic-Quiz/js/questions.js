let totalTime = 30;
function startAll () {
    comenzarQuiz();
    tictac();
}

function randomInt (maxNumber) {
    return Math.floor(Math.random() * maxNumber);
}

function comenzarQuiz() {
    let contentQuiz = document.getElementById("content");
    // Borramos hijos anteriores.
    while (contentQuiz.firstChild) {
        contentQuiz.removeChild(contentQuiz.firstChild);
    }
    // Pintamos preguntas.
    contentQuiz.innerHTML=`
    <div class="instrucciones">
        <ul>
            <li id="li1">¿Es CRM un lenguaje de programación?</li>
            <input type="text" id="input1">

            <li id="li2">¿Sirve GitHub para llevar un seguimiento de proyectos?</li>
            <input type="text" id="input2">

            <li id="li3">¿Una web necesita HTML?</li>
            <input type="text" id="input3">

            <li id="li4">¿CSS son las siglas de 'Cientific Seasoned Sample'?</li>
            <input type="text" id="input4">

            <li id="li5">¿Ser programador significa buscarte las habichuelas?</li>
            <input type="text" id="input5">
            <br>
            </ul>
            <div id="wrap1">
                <button onclick="btnclick()" id="idbtn1">Contestar</button>
                <p id="timeText"></p>
            </div>
    </div>`;


}
function tictac (){
    document.getElementById("timeText").textContent = totalTime;
    let contentQuiz = document.getElementById("content");
    if (totalTime == -1) {
        alert("¡Has Perdido!")
        contentQuiz.innerHTML=`
        <div class="instrucciones">
        <h2>Instrucciones a seguir:</h2>
        <ul>
        <li>Habrá un total de 5 preguntas.</li>
        <li>Todas las preguntas deberán ser contestadas antes de 60 segundos, de lo contrario se perderá automáticamente.</li>
        <li>Al finalizar se mostrará la cantidad de preguntas acertadas y los aciertos obtenidos.</li>
        <li>Responde con <b>S</b> (Sí) o <b>N</b> (No).</li>
        </ul>
        </div>
        <button id="btncomenzar" onclick="startAll()">COMENZAR</button>`;
        totalTime = 30;
    }

    else {
        totalTime -= 1;
        setTimeout(tictac,1000);
        if (totalTime <= 9){
            document.getElementById("timeText").style.color = "red";
        }
    }
}


function btnclick (){
    let points = 0;
    let contentQuiz = document.getElementById("content");
    let answ1 = document.getElementById("input1").value;
    let answ2 = document.getElementById("input2").value;
    let answ3 = document.getElementById("input3").value;
    let answ4 = document.getElementById("input4").value;
    let answ5 = document.getElementById("input5").value;
    if (answ1 == "N") {
        points += 1;
    }
    if (answ2 == "S") {
        points += 1;
    }
    if (answ3 == "S") {
        points += 1;
    }
    if (answ4 == "N") {
        points += 1;
    }
    if (answ5 == "S") {
        points += 1;
    }
    alert("Has acertado " + points + " preguntas.");
    contentQuiz.innerHTML=`
        <div class="instrucciones">
        <h2>Instrucciones a seguir:</h2>
        <ul>
            <li>Habrá un total de 5 preguntas.</li>
            <li>Todas las preguntas deberán ser contestadas antes de 60 segundos, de lo contrario se perderá automáticamente.</li>
            <li>Al finalizar se mostrará la cantidad de preguntas acertadas y los aciertos obtenidos.</li>
            <li>Responde con <b>S</b> (Sí) o <b>N</b> (No).</li>
        </ul>
        </div>
        <button id="btncomenzar" onclick="startAll()">COMENZAR</button>`;
        totalTime = 30;
}

// N S S N S

// //CÓDIGO LEGACY
// //Creamos y añadimos id:
// const createul = document.createElement("ul");
// createul.setAttribute("id","ul1");
// // let ul1 = document.getElementById("ul1");

// const createli1 = document.createElement("li");
// createli1.setAttribute("id","li1");
// // let li1 = document.getElementById("li1");

// const createli2 = document.createElement("li");
// createli2.setAttribute("id","li2");
// // let li2 = document.getElementById("li2");

// const createli3 = document.createElement("li");
// createli3.setAttribute("id","li3");
// // let li3 = document.getElementById("li3");

// const createli4 = document.createElement("li");
// createli4.setAttribute("id","li4");
// // let li4 = document.getElementById("li4");

// const createli5 = document.createElement("li");
// createli5.setAttribute("id","li5");
// // let li5 = document.getElementById("li5");

// const createinput1 = document.createElement("input");

// //Unimos con append al árbol
// contentQuiz.append(createul);
// createul.append(createli1);createul.append(createli2);createul.append(createli3);createul.append(createli4);createul.append(createli5);
// createli1.append(createinput1);

// //Insertamos texto en li
// createli1.textContent = "¿Es CRM un lenguaje de programación?";
// createli2.textContent = "¿Sirve GitHub para llevar un seguimiento de proyectos?";
// createli3.textContent = "¿Una web necesita HTML?";
// createli4.textContent = "¿CSS son las siglas de 'Cientific Seasoned Sample'?";
// createli5.textContent = "¿Ser programador significa buscarte las habichuelas?";