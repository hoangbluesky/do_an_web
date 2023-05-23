function checkForm(option){
    var formElement = document.querySelector(option.form);
    if (formElement) {
        formElement.onsubmit = function (e) {
            e.preventDefault();
            var checkAll = true;
            var emptyField = null; // Lưu trường dữ liệu đầu tiên còn trống
            option.rules.forEach(function (rule) {
                var inputElement = formElement.querySelector(rule.selecter);
                var check = checkError(inputElement, rule);
                if (!check) {
                    checkAll = false;
                    if (emptyField === null) {
                        emptyField = inputElement;
                    }
                }
            });
        }
        
        function checkError(inputElement, rule){
            var errorMessage= rule.test(inputElement.value);
            var messageElement = inputElement.parentElement.querySelector(".message");
            if(errorMessage){
                messageElement.innerText = errorMessage;
                inputElement.classList.add('error');
                inputElement.classList.remove('accept');
            }else{
                messageElement.innerText = '';
                inputElement.classList.remove('error');
                inputElement.classList.add('accept');
            }
            return !errorMessage;
        }

        option.rules.forEach(function (rule){
            var inputElement = formElement.querySelector(rule.selecter)
            if(inputElement){
                inputElement.onblur = function(){
                    var errorMessage= rule.test(inputElement.value);
                    var messageElement = inputElement.parentElement.querySelector(".message");
                    checkError(inputElement, rule);
                }
            }
        })
    }
}
// hang namsx phienban

checkForm.isHang = function(selecter){
    return {
        selecter: selecter,
        test: function(value){
            return value.trim() ? undefined : 'Vui lòng nhập tên hãng';
        }
    }
}

checkForm.isNamSX = function(selecter){
    return {
        selecter: selecter,
        test: function(value){
            var namSX = /([1|2])+([0-9]{3})\b/g;
            return namSX.test(value)? undefined : 'vui lòng nhập năm sản xuất';
        }
    }
}

checkForm.isPhienBan = function(selecter){
    return {
        selecter: selecter,
        test: function(value){
            return value.trim() ? undefined : 'Vui lòng nhập phiên bản';
        }
    }
}

checkForm.isSoKM = function(selecter){
    return {
        selecter: selecter,
        test: function(value){
            var soKM = /([0-9]{1})\b/g;
            return soKM.test(value)? undefined : 'vui lòng nhập số km đã đi';
        }
    }
}

checkForm.isGia = function(selecter){
    return {
        selecter: selecter,
        test: function(value){
            var soKM = /([0-9])+(0{3})\b/g;
            return soKM.test(value)? undefined : 'vui lòng nhập giá';
        }
    }
}

checkForm.isDiaChi = function(selecter){
    return {
        selecter: selecter,
        test: function(value){
            return value.trim() ? undefined : 'Vui lòng nhập địa chỉ';
        }
    }
}