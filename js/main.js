var darkBack=document.querySelector('div.dark-bg');
var popupWin=document.querySelector('div.request-window');
var closet=document.querySelector('div.close-popup');
var openRequest1=document.querySelector("aside button.want-banner-btn");
var openRequest2=document.querySelector("aside button.select-banner-btn");
var darkBgConf=document.querySelector('div.dark-bg-confid');
var closetConf=document.querySelector('div.confid-popup .close-popup');
var openConf=document.querySelector('.confirm-politic span');
var openConfRequest=document.querySelector('.request-window .confirm-politic span');
var Confid=document.querySelector('.confid-popup');

var submitBtn=document.querySelector('#submit');
var execBtn=document.querySelector('#execute');
var darkBgThanks=document.querySelector('div.dark-bg-popup');
var closetExec=document.querySelector('div.popup-thanks .close-popup');
var thanksWin=document.querySelector('div.popup-thanks');

const emailSub = document.querySelector('section.request .email');
const emailExec = document.querySelector('div.request-window .email');

darkBgConf.addEventListener("click", hideConfid);
closetConf.addEventListener("click", hideConfid);
openConf.addEventListener("click", showConfid);
openConfRequest.addEventListener("click", showConfid);
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
  checkFillIn('main');
  checkFillIn('popup');
}

function clearFields(emailField, formIdentifier) {
  emailField.value = "";
  const formInputs = document.getElementsByClassName(formIdentifier+'-form-input');
  Array.prototype.forEach.call(formInputs, (item) => {
      item.value = "";
    })
}
function showRequest(){
    darkBack.classList.remove('hide-request');
    popupWin.classList.remove('hide-request');
}

submitBtn.addEventListener("click", submitHandler.bind(null, emailSub, "main"));
execBtn.addEventListener("click", submitHandler.bind(null, emailExec, "popup"));

darkBgThanks.addEventListener("click", hideThanks);
closetExec.addEventListener("click", hideThanks);
function showThanksExec(){
    darkBgThanks.classList.remove('hide-request');
    thanksWin.classList.remove('hide-request');
}
function showThanksSub(event){
  event.preventDefault();
  darkBgThanks.classList.remove('hide-request');
  thanksWin.classList.remove('hide-request');
}

function hideThanks(){
  darkBgThanks.classList.add('hide-request');
  thanksWin.classList.add('hide-request');
}





$('.phone').mask('+7 (999) 999-99-99');

const kirylicPattern = /[А-Яа-яЁё\s]+/;

function validate(formIdentifier) {
  const target = this.event.target;
  const eventValue = this.event.data;
  if (eventValue) {
    switch (target.name) {
      case 'fio':
        validateRussian.call(this);
        break;
      case 'mail':
        if (eventValue.match(kirylicPattern)) {
          target.value = target.value.slice(0, target.value.length-1);
        }
        target.classList.remove('incorrect-email');
        break;
    }
  }
  checkFillIn(formIdentifier);
}

function validateRussian(formIdentifier) {
  const target = this.event.target;
  const eventValue = this.event.data;

  if (eventValue) {
    if (!eventValue.match(kirylicPattern)) {
      target.value = target.value.slice(0, target.value.length-1);
    }
  }
  formIdentifier ? checkFillIn(formIdentifier) : "";
}

function checkFillIn(formIdentifier) {
  const formInputs = document.getElementsByClassName(formIdentifier+'-form-input');
  // console.log(formIdentifier);
  if (document.querySelector('.'+formIdentifier+'-checkbox').checked) {
    if (Array.prototype.every.call(formInputs, (item) => {
        return !!item.value;
      })) {
      document.getElementsByClassName(formIdentifier)[0].classList.remove('disabled');
      return true;
    }
  }
  document.getElementsByClassName(formIdentifier)[0].classList.add('disabled');
  return false;
}

function cleaner() {
    this.event.target.value="";
}

function submitHandler(emailField, formIdentifier, event) {
  event.preventDefault();
  if (checkFillIn(formIdentifier)) {
    validateEmailForSubmit(emailField, formIdentifier);
  }
}

function validateEmailForSubmit(emailField, formIdentifier) {
  if (!emailField.value.match(/^[a-zA-Z0-9][\w/.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w/.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z/.]*[a-zA-Z]$/)) {
    emailField.classList.add('incorrect-email');
    // emailField.classList.add('incorrect-email');
    document.getElementsByClassName(formIdentifier)[0].classList.add('disabled');
  }
  else {
    hideRequest();
    clearFields(emailField, formIdentifier);
    showThanksExec();
  }
}