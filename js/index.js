
emailSub.onfocus = function (event) {
    event.target.value="";
};
emailExec.onfocus = function (event) {
    event.target.value="";
};

submitBtn.addEventListener('click', submitHandlerSub);
execBtn.addEventListener('click', submitHandlerExec);

function submitHandlerExec(event) {
  if (!emailExec.value.match(/^[a-zA-Z0-9][\w/.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w/.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z/.]*[a-zA-Z]$/)) {
    emailExec.value = "Некорретный E-mail!";
    event.preventDefault();
  }
}

const emailField = document.querySelector('.email');
emailField.onfocus = function (event) {
  event.target.value="";
};


var fioMain=document.querySelector('#fio-main');
var phoneMain=document.querySelector('#phone-main');
var fioReq=document.querySelector('#fio-req');
var phoneReq=document.querySelector('#phone-req');