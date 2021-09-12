const functions = require('firebase-functions');
functions.initializeApp();
const requestModal = document.querySelector('.new-request');
const requestLink = document.querySelector('.add-request');
const requestForm = document.querySelector('.new-request form');
const submit = document.querySelector('.submit')

// open request modal
requestLink.addEventListener('click', () => {
  requestModal.classList.add('open');
  document.querySelector('.section1').classList.add('blur')
});

// close request modal
submit.addEventListener('onclick',(e)=>{
  requestModal.classList.remove('open');
  document.querySelector('.section1').classList.remove('blur')
})

// add a new request
requestForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const addRequest = firebase.functions().httpsCallable('addRequest');
  addRequest({ 
    text: requestForm.request.value ,
    name: requestForm.name.value
  })
  .then(() => {
    requestForm.reset();
    requestForm.querySelector('.error').textContent = '';
    requestModal.classList.remove('open');
  })
  .catch(error => {
    requestForm.querySelector('.error').textContent = error.message;
  });
});

// notification
const notification = document.querySelector('.notification');

const showNotification = (message) => {
  notification.textContent = message;
  notification.classList.add('active');
  setTimeout(() => {
    notification.classList.remove('active');
    notification.textContent = '';
  }, 4000);
};