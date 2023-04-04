const moneycounter = document.getElementById('moneycounter');

var money = 0;

function AddMoney(){
    money++;
    moneycounter.textContent = "Your Score : " + money;
}