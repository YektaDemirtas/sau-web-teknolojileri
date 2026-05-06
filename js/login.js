function validateLogin() {
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const errorArea = document.getElementById("loginError");

    const emailPattern = /^b[0-9]{9}@sakarya\.edu\.tr$/;

    if (email === "" || password === "") {
        errorArea.innerHTML = "E-posta ve şifre boş bırakılamaz.";
        return false;
    }

    if (!emailPattern.test(email)) {
        errorArea.innerHTML = "E-posta formatı b123456789@sakarya.edu.tr şeklinde olmalıdır.";
        return false;
    }

    return true;
}

window.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const error = params.get("error");
    const errorArea = document.getElementById("loginError");

    if (!errorArea) {
        return;
    }

    if (error === "empty") {
        errorArea.innerHTML = "E-posta ve şifre boş bırakılamaz.";
    } else if (error === "wrong") {
        errorArea.innerHTML = "E-posta veya şifre hatalı.";
    }
});