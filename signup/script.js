const container = document.querySelector('.container');
const signupButton = document.querySelector('.green-bg button');

signupButton.addEventListener('click', () => {
  container.classList.toggle('change');
});
