const loggedOutLinks = document.querySelector('.theOldOne')
const loggedInLinks = document.querySelector('.thenNewOne')
const db=firebase.firestore()

const setupUI = (user) => {
    if (user) {
      // toggle user UI elements
      loggedInLinks.forEach(item => item.style.visibility = 'visible  ');
      loggedOutLinks.forEach(item => item.style.visibility = 'hidden ');
    } else {
      // toggle user elements
      loggedInLinks.forEach(item => item.style.visibility = 'hidden');
      loggedOutLinks.forEach(item => item.style.visibility = 'visible');
    }
  };

  
// listen for auth status changes
firebase.auth().onAuthStateChanged(user => {
    if (user) {
      db.collection('guides').get().then(() => {
        setupUI(user);
      });
    } else {
      setupUI();
    }
  });