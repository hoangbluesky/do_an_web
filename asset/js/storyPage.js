
(function () {
    var imageUpload = function () {
        var self = this;
        this.selector = {
            fileInput: document.getElementById('imageUploadInput'),
            fileInputBtn: document.getElementById('imageUploadInputBtn'),
            imagePreview: document.getElementById('imagePreview'),
            status: document.getElementById('uploadFileStatus'),
            sendBtn: document.getElementById('sendData'),
            infoName: document.getElementById('fileInfomation_name'),
            infoType: document.getElementById('fileInfomation_type'),
            infoSize: document.getElementById('fileInfomation_size')
        };
        this.imageData = "";
        this.fileTypes = ['image/png', 'image/jpeg'];
        this.maxSize = 30 * 1024 * 1024; // 30MB
        this.uploadUrl = 'https://tutrithuc.com/TestAPI/imageUpload';
        this.onChangeInput = function (e) {
            // Reset file data / image preview
            self.selector.status.innerHTML = '';
            self.selector.imagePreview.setAttribute('src', "img/default.jpg");
            self.imageData='';
            
            // Get the current file upload
            var file = e.target.files[0];
            this.selector.infoName.innerHTML = file.name;
            this.selector.infoType.innerHTML = file.type;
            this.selector.infoSize.innerHTML = file.size + " bytes"; // in bytes

            // Validate file type
            if (this.fileTypes.indexOf(file.type) == -1) {
                self.selector.status.innerHTML = "File không hợp lệ (chỉ file hình jpg và hình png được chấp nhận)";
                return;
            }
            
            // Validate file size
            if (file.size > this.maxSize) {
                self.selector.status.innerHTML = "Dung lượng file vượt quá giới hạn (tối đa 30MB được chấp nhận)";
                return;
            }

            var reader = new FileReader();
            reader.onload = function (e) {
                self.imageData = e.target.result;
                
                // Validate file content
                self.selector.imagePreview.onerror = function(){
                    self.imageData = "";
                    self.selector.imagePreview.setAttribute('src', "img/default.jpg");
                    self.selector.status.innerHTML = 'Nội dung hình không hợp lệ';
                };
                self.selector.imagePreview.setAttribute('src', self.imageData);
            };
            reader.readAsDataURL(file);
        };
        this.sendData = function () {
            // Validate when file content is empty
            if (this.imageData == ""){
                self.selector.status.innerHTML = 'Vui lòng chọn hình để tải lên';
                return;
            }
            
            // Prevent double click
            var data = {
                'imageData': this.imageData
            };
            this.imageData = "";
            
            var request = new XMLHttpRequest();
            request.open("POST", this.uploadUrl);
            request.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
            request.onreadystatechange = function () {
                if (this.readyState === 4 && this.status === 200) {
                    self.selector.status.innerHTML = "Upload thành công";
                } else {
                    console.log(this.responseText);
                    self.selector.status.innerHTML = "Đã có lỗi xảy ra, không upload được hình";
                }
            };

            // Send request to server
            request.send(JSON.stringify(data));
        };

        /*
         * Event trigger
         */
        this.selector.fileInput.addEventListener('change', function (e) {
            self.onChangeInput(e);
        });
        this.selector.fileInputBtn.addEventListener('click', function () {
            self.selector.fileInput.click();
        });
        this.selector.sendBtn.addEventListener('click', function () {
            self.sendData();
        });
    };
    window.addEventListener("DOMContentLoaded", function () {
        console.log('DOM is loaded');
        new imageUpload();
    });
})();
var count=1;
function setColor(){
    var property = document.getElementById('btn');
    console.log(property);
    if (count == 0){
        property.style.backgroundColor = "rgb(189, 171, 10)";
        count=1;        
    }
    else{
        property.style.backgroundColor = "rgb(239, 239, 239)";
        count=0;
    }
 
}

function setColor1(){
    
    
    var property1 = document.getElementById('btn1');
   console.log(property1)
    
    if (count == 0){
        
        property1.style.backgroundColor = "rgb(189, 171, 10)";
        count=1;        
    }
    else{
        property1.style.backgroundColor = "rgb(239, 239, 239)";
        count=0;
    }
 
}

function setColor2(){
    var property2 = document.getElementById('btn2');
    console.log(property2);
    if (count == 0){
        
        property2.style.backgroundColor = "rgb(189, 171, 10)";
        count=1;        
    }
    else{
        
        property2.style.backgroundColor = "rgb(239, 239, 239)";
        count=0;
    }
 
}

function setColor3(){
    var property3 = document.getElementById('btn3');
    console.log(property3);
    if (count == 0){
        
        property3.style.backgroundColor = "rgb(189, 171, 10)";
        count=1;        
    }
    else{
        
        property3.style.backgroundColor = "rgb(239, 239, 239)";
        count=0;
    }
 
}
function setColor4(){
    var property4 = document.getElementById('btn4');
    console.log(property4);
    if (count == 0){
        
        property4.style.backgroundColor = "rgb(189, 171, 10)";
        count=1;        
    }
    else{
        
        property4.style.backgroundColor = "rgb(239, 239, 239)";
        count=0;
    }
 
}
function setColor5(){
    var property5 = document.getElementById('btn5');
    console.log(property5);
    if (count == 0){
        
        property5.style.backgroundColor = "rgb(189, 171, 10)";
        count=1;        
    }
    else{
        
        property5.style.backgroundColor = "rgb(239, 239, 239)";
        count=0;
    }
 
}
function setColor6(){
    var property6 = document.getElementById('btn6');
    console.log(property2);
    if (count == 0){
        
        property6.style.backgroundColor = "rgb(189, 171, 10)";
        count=1;        
    }
    else{
        
        property6.style.backgroundColor = "rgb(239, 239, 239)";
        count=0;
    }
 
}
function setColor7(){
    var property7 = document.getElementById('btn7');
    console.log(property7);
    if (count == 0){
        
        property7.style.backgroundColor = "rgb(189, 171, 10)";
        count=1;        
    }
    else{
        
        property7.style.backgroundColor = "rgb(239, 239, 239)";
        count=0;
    }
 
}
function setColor8(){
    var property8 = document.getElementById('btn8');
    console.log(property8);
    if (count == 0){
        
        property8.style.backgroundColor = "rgb(189, 171, 10)";
        count=1;        
    }
    else{
        
        property8.style.backgroundColor = "rgb(239, 239, 239)";
        count=0;
    }
 
}
function setColor9(){
    var property9 = document.getElementById('btn9');
    console.log(property9);
    if (count == 0){
        
        property9.style.backgroundColor = "rgb(189, 171, 10)";
        count=1;        
    }
    else{
        
        property9.style.backgroundColor = "rgb(239, 239, 239)";
        count=0;
    }
 
}