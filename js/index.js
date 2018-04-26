$('.phone').mask('+7 (999) 999-99-99');

const kirylicPattern = /[А-Яа-яЁё\s]+/;
var submitBtn=document.querySelector('#submit');
var execBtn=document.querySelector('#execute');
var fioMain=document.querySelector('#fio-main');
var phoneMain=document.querySelector('#phone-main');
var fioReq=document.querySelector('#fio-req');
var phoneReq=document.querySelector('#phone-req');

function validate() {
  const target = this.event.target;
  const eventValue = this.event.data;

switch (target.name) {
    case 'fio':
      if (!eventValue.match(kirylicPattern)) {
        target.value = target.value.slice(0, target.value.length-1);
      }
      break;
    case 'mail':
      console.log(this.event.data);
      if (eventValue.match(kirylicPattern)) {
        target.value = target.value.slice(0, target.value.length-1);
      }
      break;
    default: return;
  }
}
/*function changes(){

}*/

const emailSub = document.querySelector('section.request .email');
const emailExec = document.querySelector('div.request-window .email');

submitBtn.addEventListener('click', submitHandlerSub);
execBtn.addEventListener('click', submitHandlerExec);
emailSub.onfocus = function (event) {
  event.target.value="";
};
emailExec.onfocus = function (event) {
  event.target.value="";
};

function submitHandlerSub(event) {
  console.log(emailSub.value);
  if (!emailSub.value.match(/^[a-zA-Z0-9][\w/.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w/.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z/.]*[a-zA-Z]$/)) {
    emailSub.value = "Некорретный E-mail!";
    event.preventDefault();
  }
}
function submitHandlerExec(event) {
  if (!emailExec.value.match(/^[a-zA-Z0-9][\w/.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w/.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z/.]*[a-zA-Z]$/)) {
    emailExec.value = "Некорретный E-mail!";
    event.preventDefault();
  }
}