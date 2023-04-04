const moneycounter = document.getElementById('moneycounter');
const avatar = document.getElementById('gmbr');
const avatar2 = '/Assets/charSENANG.png';

let clicks = false;

var money = 0;

function AddMoney(){
    money++;
    moneycounter.textContent = "Your Score : " + money;
}

function change(){
    avatar.addEventListener("mousedown", function(){
        avatar.src = avatar2;
        clicks = true;
        avatar.style.width = "22vw";
        avatar.style.height =  "22vw";
        setTimeout(function(){
            if(clicks){
                avatar.src = '/Assets/charDIAM.png';
                clicks = false;
                avatar.style.width = "20vw";
                avatar.style.height = "20vw";
            }
        },50);
    });
    avatar.addEventListener("mouseup", function(){
        clicks = false;
    });
}