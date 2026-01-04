const password= document.getElementById("password");;
const ConfirmPassword = document.getElementById("ConfirmPassword");

function SamePassword() {
    if (password.value === ConfirmPassword.value) {
        password.style.background-color = blue;
    }
}

SamePassword();