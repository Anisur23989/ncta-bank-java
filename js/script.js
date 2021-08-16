document.getElementById('login-submit').addEventListener('click', function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    
    // get user Password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;

    if(userEmail == 'kazianis23@gmail.com' && userPassword == 'Ncta1234') {
        window.location.href ='blance.html';
    }
})


