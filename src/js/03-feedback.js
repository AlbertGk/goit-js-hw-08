const form = document.querySelector('form.feedback-form');

const inputCatcher = (event) => {
    event.preventDefault();
    const {
      elements: { email, message },
    } = event.currentTarget;
    localStorage.setItem('feedback-form-state', JSON.stringify({
        email: email.value,
        message: message.value
    }));
};

form.addEventListener('input', inputCatcher);

const inputVal = localStorage.getItem('feedback-form-state');
// const parsedInputVal = JSON.parse(inputVal);

console.log(inputVal);