// Отслеживай на форме событие input, и каждый раз записывай в
// локальное хранилище объект с полями email и message, в которых
//  сохраняй текущие значения полей формы.
//  Пусть ключом для хранилища будет строка "feedback-form-state".

const refs = {
  email: document.querySelector('.feedback-form email'),
  message: document.querySelector('.feedback-form message'),
  form: document.querySelector('.feedback-form'),
};

// refs.email.addEventListener('input', onEmailInput);

refs.message.addEventListener('input', onMessageInput);

// refs.form.addEventListener('submit', onFormSubmit);

function onEmailInput() {}

function onMessageInput(event) {
  const value = event.currentTarget.value;
  console.log(value);
  //   localStorage.setItem('feedback-form-state', string);
}

function onFormSubmit() {}
