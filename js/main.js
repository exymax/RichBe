/*const darkBack=document.querySelector('div.dark-bg');
const popupWin=document.querySelector('div.request-window');
const closetReq=document.querySelector('section.request div.close-popup');
//const closetExec=document.querySelector('div.popup-thanks div.close-popup');
const openRequest1=document.querySelector("aside button.want-banner-btn");
const openRequest2=document.querySelector("aside button.select-banner-btn");
/*const submitBtn=document.querySelector('#submit');
const execBtn=document.querySelector('#execute');

darkBack.addEventListener("click", hideRequest);
closetReq.addEventListener("click", hideRequest);
openRequest1.addEventListener("click", showRequest);
openRequest2.addEventListener("click", showRequest);

function hideRequest(){
darkBack.classList.add('hide-request');
popupWin.classList.add('hide-request');
}
function showRequest(){
    darkBack.classList.remove('hide-request');
    popupWin.classList.remove('hide-request');
}*/
const darkBack=document.querySelector('div.dark-bg');
const popupWin=document.querySelector('div.request-window');
const closet=document.querySelector('div.close-popup');
const openRequest1=document.querySelector("aside button.want-banner-btn");
const openRequest2=document.querySelector("aside button.select-banner-btn");

darkBack.addEventListener("click", hideRequest);
closet.addEventListener("click", hideRequest);
openRequest1.addEventListener("click", showRequest);
openRequest2.addEventListener("click", showRequest);

function hideRequest(){
darkBack.classList.add('hide-request');
popupWin.classList.add('hide-request');
}
function showRequest(){
    darkBack.classList.remove('hide-request');
    popupWin.classList.remove('hide-request');
}
