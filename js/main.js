
var darkBack=document.querySelector('div.dark-bg');
var popupWin=document.querySelector('div.request-window');
var closet=document.querySelector('div.close-popup');
var openRequest1=document.querySelector("aside button.want-banner-btn");
var openRequest2=document.querySelector("aside button.select-banner-btn");
var darkBgConf=document.querySelector('div.dark-bg-confid');
var closetConf=document.querySelector('div.confid-popup .close-popup');
var openConf=document.querySelector('.confirm-politic span');
var Confid=document.querySelector('.confid-popup');

darkBgConf.addEventListener("click", hideConfid);
closetConf.addEventListener("click", hideConfid);
openConf.addEventListener("click", showConfid);

function hideConfid(){
    darkBgConf.classList.add('hide-request');
    Confid.classList.add('hide-request');
    }
    function showConfid(){
        darkBgConf.classList.remove('hide-request');
        Confid.classList.remove('hide-request');
    }

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

var submitBtn=document.querySelector('#submit');
var execBtn=document.querySelector('#execute');
var darkBgThanks=document.querySelector('div.dark-bg-popup');
var closetExec=document.querySelector('div.popup-thanks .close-popup');
var thanksWin=document.querySelector('div.popup-thanks');

submitBtn.addEventListener("click", showThanksSub);
darkBgThanks.addEventListener("click", hideThanks);
closetExec.addEventListener("click", hideThanks);
execBtn.addEventListener("click", function(){
    hideRequest();
    showThanksExec();
});
function showThanksExec(){
    darkBgThanks.classList.remove('hide-request');
    thanksWin.classList.remove('hide-request');
}
function showThanksSub(e){
   e.preventDefault();
    darkBgThanks.classList.remove('hide-request');
    thanksWin.classList.remove('hide-request');
}

function hideThanks(){
   darkBgThanks.classList.add('hide-request');
    thanksWin.classList.add('hide-request');
}
