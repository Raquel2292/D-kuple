document.getElementById('submit-code').addEventListener('click', (event) => {
    event.preventDefault();
    checkCode();
});

document.getElementById("code-cadeau").addEventListener("keypress", (event) => {
    event.preventDefault();
    if (event.key === "Enter")
        checkCode();

});

function checkCode() {
    const message = document.getElementById('message');
    const code = document.getElementById('code-cadeau').value;

    const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,10}$/;

    if (regex.test(code)) {
        message.textContent = 'Ok';
        message.style.color = 'white';
    } else {
        message.textContent = 'Le code est incorrect. Veuillez réessayer.';
        message.style.color = 'red';
    }
}

