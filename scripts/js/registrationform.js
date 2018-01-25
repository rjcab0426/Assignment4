function validate() {
    var firstName = document.getElementById('firstName');
    var lastName = document.getElementById('lastName');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var confirmPassword = document.getElementById('confirmPassword');

    var firstNameErr = document.getElementById('firstNameErr');
    var emailErr = document.getElementById('emailErr');
    var passwordErr = document.getElementById('passwordErr');
    var confirmPasswordErr = document.getElementById('confirmPasswordErr');   
    
    if(firstName.value === ''){
        firstNameErr.innerText = 'First Name can not be blank'
    } 

    if(email.value === ''){
        emailErr.innerText = 'Email can not be blank'
    }

    if(password.value === ''){
        passwordErr.innerText = 'Password can not be blank'
    }
    if(confirmPassword.value != password.value){
        confirmPasswordErr.innerText = 'Password not matched'
    } else {
        confirmPasswrodErr.innerText('');
    }
}

