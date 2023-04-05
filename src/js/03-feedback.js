
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