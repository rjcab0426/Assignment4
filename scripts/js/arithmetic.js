function add() {
    var txtA = document.getElementById('txtA');
    var txtB = document.getElementById('txtB');

    var answer = parseInt(txtA.value) + parseInt(txtB.value);

    var result = document.getElementById('result');

    result.innerText = 'Answer :: ' + answer;
}

function subtract() {
    var txtA = document.getElementById('txtA');
    var txtB = document.getElementById('txtB');

    var answer = parseInt(txtA.value) - parseInt(txtB.value);

    var result = document.getElementById('result');

    result.innerText = 'Answer :: ' + answer;
}


function multiply() {
    var txtA = document.getElementById('txtA');
    var txtB = document.getElementById('txtB');

    var answer = parseInt(txtA.value) * parseInt(txtB.value);

    var result = document.getElementById('result');

    result.innerText = 'Answer :: ' + answer;
}

function divide() {
    var txtA = document.getElementById('txtA');
    var txtB = document.getElementById('txtB');

    var answer = parseInt(txtA.value) / parseInt(txtB.value);

    var result = document.getElementById('result');

    result.innerText = 'Answer :: ' + answer;
}