'use strict';



/**
 * navbar toggle
 */

const header = document.querySelector("[data-header]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");

navToggleBtn.addEventListener("click", function () {
  header.classList.toggle("nav-active");
  this.classList.toggle("active");
});

/**
 * toggle the navbar when click any navbar link
 */

const navbarLinks = document.querySelectorAll("[data-nav-link]");

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    header.classList.toggle("nav-active");
    navToggleBtn.classList.toggle("active");
  });
}





/**
 * back to top & header
 */

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


const form = document.getElementById('contact-form');
const submitBtn = document.getElementById('btn-submit');
const email = document.getElementById('email');

const isvalid = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email));
}

const setErrorMessage = (input, message) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector('error');
  formControl.className = 'form-control error';
  small.innerText = message;
}

const setSuccessMessage = (input) => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

const checkEmail = () => {
  let valid = false;
  const emailValue = email.value.trim();
  if (emailValue === '') {
    setErrorMessage(email, 'Email cannot be blank');
  }else if(emailValue !== emailValue.toLowerCase()){
    setErrorMessage(email, 'Email must be lowercase');
  }
   else if (!isvalid(emailValue)) {
    setErrorMessage(email, 'Looks like this is not an email');
  } else {
    setSuccessMessage(email);
    valid = true;
  }
  return valid;
}


form.addEventListener('submit', (e) => {
  e.preventDefault();

  checkEmail();
});
