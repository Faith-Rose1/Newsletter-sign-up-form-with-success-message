const signUPSection = document.getElementById('sign-up-section');
const form = document.getElementById('newsletter-form');
const errorMSG = document.getElementById('email-error');
const inputElement = document.getElementById('email');
const successSection = document.getElementById('success-section');
const dismissBtn = document.getElementById('dismiss-btn');

form.addEventListener('submit', e => {
  e.preventDefault(); 

  if(!inputElement.checkValidity() || !inputElement.value) {
    errorMSG.classList.remove('is-hidden');
    inputElement.classList.add('input-error');
    return;
  } else {
    toggleClass();
  }

  const data = new FormData(form); 

  const formData = Object.fromEntries(data);
});

dismissBtn.addEventListener('click', () => {
  toggleClass();
  form.reset();
  errorMSG.classList.add('is-hidden');
  inputElement.classList.remove('input-error');
});

function toggleClass(){
  signUPSection.classList.toggle("is-hidden");
  successSection.classList.toggle('is-hidden');
}
