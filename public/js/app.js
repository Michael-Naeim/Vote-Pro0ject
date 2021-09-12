const requestModal = document.querySelector('.card-2-body');
const requestLink = document.querySelector('.my-btn-is-here'); //my button for adding the hobby
const requestForm = document.querySelector('.mySecondCard');
// getting all data to send it to the back end
const select1 = document.querySelector('.my-select-1');
const select2 = document.querySelector('.my-select2');
// some variables for exit hobby box
const exit = document.querySelector('.exit');
const upload = document.querySelector('.btn-uploading');
// first select element
const blurEl1 = document.querySelector('.section1');
const blurEl2 = document.querySelector('.third-el');
const blurEl3 = document.querySelector('.h2-div-1');


// open request modal
requestLink.addEventListener('click', () => {
  requestModal.classList.add('open');
  blurEl1.style.filter = "blur(3px)" ;
  blurEl2.style.filter = "blur(3px)" ;
  blurEl3.style.filter = "blur(3px)" ;
});

// close request modal
exit.addEventListener('click', (e) => {
        requestModal.classList.remove('open')
        blurEl2.style.filter = "blur(0px)" ;
        blurEl1.style.filter = "blur(0px)" ;
        blurEl3.style.filter = "blur(0px)" ;
  });
upload.addEventListener('click', (e) => {
    requestModal.classList.remove('open')
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


// add a new request
requestForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const addRequest = firebase.functions().httpsCallable('addRequest');
  addRequest({ 
    firstSelect: select1.value,
    secondInput : select2.value,
    linkOfTheProject : data.linkOfTheProject,
    importFile : data.importFile,
    upvotes: 0 
  })
  .then(() => {
    requestForm.reset();
    requestModal.classList.remove('open');
  })
  .catch(error => {
    console.log(error.message) ;
  });
});
