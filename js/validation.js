function isEmailValid(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

function isPhoneValid(phone) {
    const pattern = /^[0-9]+$/;
    return pattern.test(phone);
}

function validateNative() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value.trim();

    let errors = [];

    if (name === "") errors.push("Ad Soyad boş bırakılamaz.");
    if (email === "") errors.push("E-posta boş bırakılamaz.");
    else if (!isEmailValid(email)) errors.push("E-posta formatı hatalı.");
    if (phone === "") errors.push("Telefon boş bırakılamaz.");
    else if (!isPhoneValid(phone)) errors.push("Telefon sadece rakamlardan oluşmalıdır.");
    if (subject === "") errors.push("Konu seçilmelidir.");
    if (message === "") errors.push("Mesaj boş bırakılamaz.");

    const errorArea = document.getElementById("nativeErrors");

    if (errors.length > 0) {
        errorArea.innerHTML = errors.join("<br>");
        return false;
    }

    errorArea.innerHTML = "Native JavaScript kontrolü başarılı.";
    errorArea.style.color = "green";
    return true;
}

const { createApp } = Vue;

createApp({
    data() {
        return {
            form: {
                name: "",
                email: "",
                phone: "",
                gender: "",
                subject: "",
                message: ""
            },
            vueError: ""
        };
    },
    methods: {
        validateVue() {
            let errors = [];

            if (this.form.name.trim() === "") errors.push("Vue: Ad Soyad boş bırakılamaz.");
            if (this.form.email.trim() === "") errors.push("Vue: E-posta boş bırakılamaz.");
            else if (!isEmailValid(this.form.email)) errors.push("Vue: E-posta formatı hatalı.");
            if (this.form.phone.trim() === "") errors.push("Vue: Telefon boş bırakılamaz.");
            else if (!isPhoneValid(this.form.phone)) errors.push("Vue: Telefon sadece rakam olmalıdır.");
            if (this.form.gender === "") errors.push("Vue: Cinsiyet seçilmelidir.");
            if (this.form.subject === "") errors.push("Vue: Konu seçilmelidir.");
            if (this.form.message.trim() === "") errors.push("Vue: Mesaj boş bırakılamaz.");

            if (errors.length > 0) {
                this.vueError = errors.join(" | ");
                return false;
            }

            this.vueError = "Vue kontrolü başarılı.";
            return true;
        }
    }
}).mount("#contactApp");
