
function cal(){
    let sl1 = document.getElementById('pr1').value;
    let sl2 = document.getElementById('pr2').value;
    let sl3 = document.getElementById('pr3').value;
    let sl4 = document.getElementById('pr4').value;
    let sl5 = document.getElementById('pr5').value;

    var vnd = ".000Đ";
    let money = (sl1*56000 + sl2*425000+sl3*45490 + sl4*30000 + sl5*56990);
    console.log(money);
    document.getElementById('money1').innerHTML =money+ vnd;
    document.getElementById('total').innerHTML = money + 45 + vnd;
    
}
