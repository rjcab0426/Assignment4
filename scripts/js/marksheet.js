function validate() {
    var name = document.getElementById('name');
    var cs = document.getElementById('cs');
    var english = document.getElementById('english');
    var math = document.getElementById('math');
    var science = document.getElementById('science');
    var history = document.getElementById('history');
    var computer = document.getElementById('computer');
    
    var nameErr = document.getElementById('nameErr');
    var csErr = document.getElementById('csErr');
    var englishErr = document.getElementById('englishErr')
    var mathErr = document.getElementById('mathErr');
    var historyErr = document.getElementById('historyErr')
    var computerErr = document.getElementById('computerErr')

    if(name.value === '') {
        nameErr.innerText = 'Name can not be blank.';
    }
    if(cs.value === '') {
        csErr.innerText = 'Class/Semester can not be blank';
    }

    if(english.value >100) {
        englishErr.innerText = 'it should be between 0 to 100'
    }
    if(english.value === '') {
        englishErr.innerText = 'can not be blank'
    }
    
    if(math.value >100) {
        mathErr.innerText = 'it should be between 0 to 100'
    }
    if(math.value === '') {
        mathErr.innerText = 'can not be blank'
    }
    
    if(science.value >100) {
        scienceErr.innerText = 'it should be between 0 to 100'
    }
    if(science.value === '') {
        scienceErr.innerText = 'can not be blank'
    }
    
    if(history.value >100) {
        historyErr.innerText = 'it should be between 0 to 100'
    }
    if(history.value === '') {
        historyErr.innerText = 'can not be blank'
    }
    
    if(computer.value >100) {
        computerErr.innerText = 'it should be between 0 to 100'
    }
    if(computer.value === '') {
        computerErr.innerText = 'can not be blank'
    }
}


function calResults() {
    var math = document.getElementById('math');
    var science = document.getElementById('science');
    var history = document.getElementById('history');
    var english = document.getElementById('english');
    var computer = document.getElementById('computer');

    var answer = parseInt(english.value) + parseInt(math.value) + parseInt(science.value) + parseInt(history.value) + parseInt(computer.value);
    
    var add = document.getElementById('add');
    
    add.innerText = 'TOTAL :: ' + answer;
  
    
       
    var answer = ((parseInt(english.value) + parseInt(math.value) + parseInt(science.value) + parseInt(history.value) + parseInt(computer.value)) / 500) * 100;
    
    var percentage = document.getElementById('percentage');
    
    percentage.innerText = 'PERCENTAGE :: ' + answer.toFixed(0) + '%';  

    

    var answer = ((parseInt(english.value) + parseInt(math.value) + parseInt(science.value) + parseInt(history.value) + parseInt(computer.value)) / 500) * 100;
    
    var grade = document.getElementById('grade');
    
    if(answer >=90) {
        grade.innerText = 'GRADE :: A';
    } 
    
    else if(answer >=80) {
        grade.innerText = 'GRADE :: B'; 
    } 
    
    else if(answer >=70) {
        grade.innerText = 'GRADE :: C';
    }

    else if(answer >=60) {
        grade.innerText = 'GRADE :: D';
    }

    if(answer <60) {
        grade.innerText = 'GRADE :: F';
    }
}
