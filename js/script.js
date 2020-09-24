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
    formControl.classList.add('success');
    formControl.classList.remove('error');
}

function validateEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input)
    } else {
        showError(input, `${getFieldName(input)} is not valid.`);
    }
}

function checkRequired(inputArray) {
    inputArray.forEach(input=>{
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required.`);
        } else {
            showSuccess(input);
        }
    });
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkPasswordMatch(input1, input2) {
    if(input1.value === input2.value){
        showSuccess(input1);
        showSuccess(input2);
    } else {
        showError(input2, 'Passwords do not match.')
    }
}

function checkLength(input, min, max) {
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if(input.value.length > max){
        showError(input, `${getFieldName(input)} can't be longer than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// Event Listeners
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const input_feids = [username, email, password, password2];
    checkRequired(input_feids);
    validateEmail(email);
    checkLength(password, 6, 30);
    checkPasswordMatch(password, password2)
});