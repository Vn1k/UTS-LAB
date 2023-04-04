/*
function gamepressed(){
    hide();
    var iframe = document.createElement('iframe');
    iframe.src = "../main/main.html";
    iframe.id = 'frame';
    var parentiframe = document.getElementById('kotak');
    parentiframe.insertBefore(iframe, parentiframe.firstChild);
    setTimeout(function(){
        parentiframe.removeChild(iframe); 
    }, 18000)
}
*/

function popup()
{
    hide();
    var popup = document.createElement('popup');
    popup.src = "/temp/PopUp.html";
    popup.id = 'frame';
    parentpopup.insertBefore(popup, parentpopup.firstChild);
    setTimeout(function()
    {
        parentpopup.removeChild(popup);
    }, 18000)
}
