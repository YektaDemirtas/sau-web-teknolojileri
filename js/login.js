function validateLogin() {
    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();
    const errorArea = document.getElementById("loginError");

    const emailPattern = /^b[0-9]{10}@sakarya\.edu\.tr$/;

    if (email === "" || password === "") {
        errorArea.innerHTML = "E-posta ve şifre boş bırakılamaz.";
        return false;
    }

    if (!emailPattern.test(email)) {
        errorArea.innerHTML = "E-posta formatı b0000000000@sakarya.edu.tr şeklinde olmalıdır.";
        return false;
    }

    return true;
}
