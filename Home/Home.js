const moneycounter2 = document.getElementById('moneycard');
const moneycounter = document.getElementById('moneycounter');
const avatar = document.getElementById('sushichar');
const currentsushiprice = document.getElementById('jsushi').getElementsByClassName("harga");
const currentonigiriprice = document.getElementById('jonigiri').getElementsByClassName("harga");
const currenttempuraprice = document.getElementById('jtempura').getElementsByClassName("harga");
const currentautoprice = document.getElementById('autoclicker').getElementsByClassName("harga");

const avatar1 = '/Images/CHAR/charDIAM.png'
const avatar2 = '/Images/CHAR/gabConSen.png';

// let clicks = false;

var currentmoney = 0;
var bonusmoney = 0;
var sushiprice = 10;
var onigiriprice = 1000;
var tempuraprice = 100000;
var autoprice = 100;
var counterauto = 0;

function DisplayMoney(x)
{
    moneycounter.textContent = "Your Money : " + x;
    moneycounter2.textContent = "Your Money : " + x;
}

function AddMoney(){
    currentmoney += (1 + bonusmoney);
    DisplayMoney(currentmoney);
    avatar.src = avatar2;
    avatar.style.width = '18vw';
    setTimeout(function(){
        avatar.src = avatar1;
        avatar.style.width = '20vw';
    }, 250)
}

function RemoveMoney(removedmoney){
    var counter = 1;
    var money = currentmoney;
    currentmoney -= removedmoney;
    var DecreasingAnimation = setInterval(function(){
        if(counter == removedmoney){
            clearInterval(DecreasingAnimation);
        }
        money--;
        counter++;
        DisplayMoney(money);
    }, 5)
}

function NotEnoughMoney(){
    var popup = document.createElement('div');
    popup.id = 'popup';
    var insidepopup = document.createElement('div');
    insidepopup.id = 'content';
    var inside2popup = document.createElement('p');
    inside2popup.textContent = "UANG TIDAK MENCUKUPI!";

    insidepopup.appendChild(inside2popup);
    popup.appendChild(insidepopup);
    document.body.insertBefore(popup, document.body.firstChild);
    setTimeout(function(){
        container.removeChild(popup);
    }, 2000)
}

function SellSushi(){
    console.log(sushiprice)
    if(currentmoney < sushiprice){
        NotEnoughMoney();
    }
    else{
        bonusmoney++;
        RemoveMoney(sushiprice);
        sushiprice = Math.round(sushiprice += (sushiprice * 0.25));
        currentsushiprice.textContent = rounded;
    }
}

function SellOnigiri(){
    if(currentmoney < onigiriprice){
        NotEnoughMoney();
    }
    else{
        bonusmoney += 10;
        RemoveMoney(onigiriprice);
        onigiriprice = Math.round(onigiriprice += (onigiriprice * 0.25));
        currentonigiriprice.textContent = onigiriprice;
    }
}

function SellTempura(){
    if(currentmoney < tempuraprice){
        NotEnoughMoney();
    }
    else{
        bonusmoney += 100;
        RemoveMoney(tempuraprice);
        tempuraprice = Math.round(tempuraprice += (tempuraprice * 0.25));
        currenttempuraprice.textContent = tempuraprice;
    }
}

function autoclicker(){
    if(currentmoney < autoprice){
        NotEnoughMoney();
    }
    else{
        counterauto++;
        RemoveMoney(autoprice);
        for(var i = 0; i < counterauto; i++){
            setInterval(function() {
                currentmoney += 1;
                DisplayMoney(currentmoney);
              }, 1000);
        }
        autoprice = Math.round(autoprice += (autoprice * 0.5));
        currentautoprice.textContent = autoprice;
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("main").style.overflow = "hidden";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.overflow = "auto";
  }