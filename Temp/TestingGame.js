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
    }, 10)
}

function SellSushi(){
    if(currentmoney < 85){
        alert("Tidak Cukup");
    }
    else{
        RemoveMoney(85);
    }
}

function SellOnigiri(){
    if(currentmoney < 35){
        alert("Tidak Cukup");
    }
    else{
        RemoveMoney(35);
    }
}

function SellTempura(){
    if(currentmoney < 65){
        alert("Tidak Cukup");
    }
    else{
        RemoveMoney(65);
    }
}

// function change(){
//     avatar.addEventListener("mousedown", function(){
//         clicks = true;
//         avatar.style.width = "22vw";
//         avatar.style.height =  "22vw";
//         setTimeout(function(){
//             if(clicks){
//                 avatar.src = '/Assets/charDIAM.png';
//                 clicks = false;
//                 avatar.style.width = "20vw";
//                 avatar.style.height = "20vw";
//             }
//         },50);
//     });
//     avatar.addEventListener("mouseup", function(){
//         clicks = false;
//     });
// }