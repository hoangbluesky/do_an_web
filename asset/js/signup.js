var listData = localStorage.getItem("list_accounts") ? JSON.parse(localStorage.getItem("list_accounts")) : [];

function login() {
    let username = document.getElementById('inputName').value;
    let password = document.getElementById('inputPassword').value;
if(username.length == 0 && password.length == 0){
        alert('vui lòng nhập user và password')
    }
   else  if(username.length == 0){
        alert('vui lòng nhập user');
    }
    else if(password.length == 0){
        alert('vui lòng nhập mật khẩu')
    }
    else
    
    for (i = 0; i < listData.length; i++) {
        var count = 0;
        if (listData[i].username == username && listData[i].password == password) {
            alert('Đăng nhập thành công');
            window.location.href = 'homePage.html';
            break;
        } else if (listData[i].username == username && listData[i].password != password) {
            alert('Mật khẩu của bạn không đúng vui lòng nhập lại!');
            break;
        } else if (listData[i].username != username) {
            count++;
        }
    }
    if (count > 0 ) {
        alert('tài khoản không tồn tại !');
    }

   
   
}

function logup(){
    let username = document.getElementById('username').value; 
    let password = document.getElementById('password').value;
   
    let rule = document.getElementById('checkbox');
// CHECK 
     let check = true;
    if(username.length == 0){
        alert('Nhập username')
        check = false;
        
    }
    else if (password.length == 0){
        check = false;
        alert('Nhập password')
    }
    else if (!rule.checked){
        alert('Vui lòng chấp nhận điều khoản')
    }else{
        
        var dem = 0;
        if (listData != null) {
            for (i = 0; i < listData.length; i++) {
            
            if (listData[i].username == username) {
                alert('Tai khoan da ton tai!');
                break;
                
            } else dem++;
        }
        }
        
        if (dem == listData.length) {
                let account = {
                    username : username,
                    password : password,
                };
                alert('Dang ky thanh cong');
                listData.push(account);
                
                window.location.href="homePage.html";
            }
            
    
    
        let json = JSON.stringify(listData);
        localStorage.setItem( 'list_accounts' , json);
        
    }
}