const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

function showError(element, message){
    const formControl = element.parentElement;
    const messageEL = formControl.querySelector('small');
    formControl.classList.add('error');
    formControl.classList.remove('success');
    messageEL.textContent = message;
}

function showSuccess(element){
    const formControl = element.parentElement;
    const messageEL = formControl.querySelector('small');
    formControl.classList.add('success');
    formControl.classList.remove('error');
}

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function checkRequired(input) {
    console.log(input)
}

// Event Listeners
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const input_feids = [username, email, password, password2]
    checkRequired(input_feids);
});