import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');



form.addEventListener('input', throttle( () => {
    const inputSettings = {
        email: form.email.value,
        message: form.message.value,
    }

    localStorage.setItem('feedback-form-state', JSON.stringify(inputSettings))
}, 500));




const savedFormInput = localStorage.getItem('feedback-form-state')
const parsedFormInput = JSON.parse(savedFormInput)

if (parsedFormInput) {
    form.email.value = parsedFormInput.email;
    form.message.value = parsedFormInput.message;
};

// // clear after submit input
form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log({
        email: form.email.value,
        message: form.message.value,
    });
    localStorage.removeItem('feedback-form-state')
    form.reset()
})