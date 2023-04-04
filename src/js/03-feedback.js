/*
?В HTML есть разметка формы. Напиши скрипт который будет сохранять значения полей в локальное хранилище когда пользователь что-то печатает.
*Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message, в которых сохраняй текущие значения полей формы. Пусть ключом для хранилища будет строка "feedback-form-state".
*При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы. В противном случае поля должны быть пустыми.
*При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
*Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй библиотеку lodash.throttle.
 */

import throttle from 'lodash.throttle';
const STORAGE_KEY = 'feedback-form-state';
const formEl = document.querySelector('.feedback-form');
formEl.addEventListener('submit', onBtnSubmit);
function onBtnSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}
let savedData = {};
formEl.addEventListener('input', throttle(saveData, 500));
populateForm();

function saveData(e) {

  let savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    savedData = JSON.parse(savedData);
  } else {
    savedData = {};
  }
  savedData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(savedData));
}

function populateForm() {
  let savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    savedData = JSON.parse(savedData);
    formEl.elements.message.value = savedData.message ? savedData.message : '';
    formEl.elements.email.value = savedData.email ? savedData.email : '';
  }
}