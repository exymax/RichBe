$('.phone').mask('+7 (999) 999-99-99');

const kirylicPattern = /[А-Яа-яЁё\s]+/;

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

const emailField = document.querySelector('.email');
emailField.onfocus = function (event) {
  event.target.value="";
};

function submitHandler() {
  if (!emailField.value.match(/^[a-zA-Z0-9][\w/.-]*[a-zA-Z0-9]@[a-zA-Z0-9][\w/.-]*[a-zA-Z0-9]\.[a-zA-Z][a-zA-Z/.]*[a-zA-Z]$/)) {
    emailField.value = "Некорретный E-mail!";
    this.event.preventDefault();
  }
}