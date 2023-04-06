const container = document.getElementById('container');
const moneycounter = document.getElementById('moneycounter');
const avatar = document.getElementById('sushichar');

const avatar1 = '/Images/CHAR/charDIAM.png'
const avatar2 = '/Images/CHAR/gabConSen.png';

// let clicks = false;

var currentmoney = 0;

function AddMoney(){
    currentmoney++;
    moneycounter.textContent = "Your Score : " + currentmoney;
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
        moneycounter.textContent = "Your Score : " + money;
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
    container.insertBefore(popup, container.firstChild);
    setTimeout(function(){
        container.removeChild(popup);
    }, 2000)
}

function SellSushi(){
    if(currentmoney < 85){
        NotEnoughMoney();
    }
    else{
        RemoveMoney(85);
    }
}

function SellOnigiri(){
    if(currentmoney < 35){
        NotEnoughMoney();
    }
    else{
        RemoveMoney(35);
    }
}

function SellTempura(){
    if(currentmoney < 65){
        NotEnoughMoney();
    }
    else{
        RemoveMoney(65);
    }
}

function autoclicker(){
    if(currentmoney < 250){
        NotEnoughMoney();
    }
    else{
        RemoveMoney(250);
        setInterval(function() {
            currentmoney += 1;
            moneycounter.textContent = "Your Score : " + currentmoney;
          }, 3000);
    }
}

