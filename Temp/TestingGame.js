const moneycounter = document.getElementById('moneycounter');
const avatar = document.getElementById('sushi');
const avatar1 = '/Images/CHAR/charDIAM.png'
const avatar2 = '/Images/CHAR/charSENANG.png';

// let clicks = false;

var money = 0;
var currentcharsize = parseInt(window.getComputedStyle(avatar).getPropertyValue('width'));

function AddMoney(){
    money++;
    moneycounter.textContent = "Your Score : " + money;
    avatar.src = avatar2;
    avatar.style.width = '18vw';
    var animation = setTimeout(function(){
        avatar.src = avatar1;
        avatar.style.width = '20vw';
    }, 250)
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