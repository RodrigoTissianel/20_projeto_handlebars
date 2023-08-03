

const userInfoLink = document.querySelector('.update-user-info');
const userInfoForm = document.querySelector('.user-info-form');

userInfoLink.addEventListener('click', () => {
    const inputs = [...userInfoForm.getElementsByTagName('input')]
    inputs.forEach((input)=> input.removeAttribute('readonly'));
    inputs[0].focus();
})
