var correctName = 'xuanquoc';
var correctPass = '123';


var inputName = document.getElementById('inputName');
var inputPassword = document.getElementById('inputPassword');


var formLogin = document.getElementById('form-login');
if(formLogin.attachEvent){
    formLogin.attachEvent('submit', onFormSubmit);
}else{
    formLogin.addEventListener('submit', onFormSubmit);
}

function onFormSubmit(){
    var username = inputName.value;
    var password = inputPassword.value;
    
    if(username == correctName && password == correctPass ){
        window.location= "http://127.0.0.1:5500/homePage.html";
    }else{
        alert('Đăng nhập thất bại');
    }
}