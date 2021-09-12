const signOut = document.querySelector('.sign-out');
const registerForm = document.querySelector('.register');
const loginForm = document.querySelector('.login');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

// sign out
signOut.addEventListener('click', () => {
    firebase.auth().signOut()
      .then(() => console.log('signed out'));
  });
const setupUI = (user) => {
if (user) {
    // toggle user UI elements
    loggedInLinks.forEach(item => item.style.visibility = 'visible');
    loggedOutLinks.forEach(item => item.style.visibility = 'hidden');
} else {
    // toggle user elements
    loggedInLinks.forEach(item => item.style.visibility = 'visible');
    loggedOutLinks.forEach(item => item.style.visibility = 'hidden');
}
};