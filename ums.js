
document.addEventListener("DOMContentLoaded", function(){
    const studentLogin = document.getElementById('studentLogin');
    const studentSubmit = document.getElementById('studentSubmit');
    const passwordInput = document.getElementById('passwordInput');
    const eyeIcon = document.getElementById('eyeIcon');

    eyeIcon.addEventListener('click', function () {
       
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            eyeIcon.classList.remove("fa-solid", "fa-eye");
            eyeIcon.classList.add("fa-solid", "fa-eye-slash");
        } else {
            passwordInput.type = 'password';
            eyeIcon.classList.remove("fa-solid", "fa-eye-slash");
            eyeIcon.classList.add("fa-solid", "fa-eye");
        }
    });
    
    // Update captcha
    function updateCaptcha() {
        const captchaText = generateCaptcha();
        const captchaImage = document.getElementsByClassName('captchaImage')[0];
        captchaImage.textContent = captchaText;
        return captchaText;
    }

    // Generate captcha
    function generateCaptcha() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let captcha = '';
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            captcha += chars[randomIndex];
        }
        return captcha;
    }

    // Initial setup
    studentLogin.style.display = "block";

    // Generate and display the CAPTCHA text and image
    const captchaText = generateCaptcha();
    const captchaImage = document.getElementsByClassName('captchaImage')[0];
    captchaImage.textContent = captchaText;

    studentSubmit.addEventListener('click', function (e) {
        e.preventDefault();
        const userInput = studentLogin.querySelectorAll('input');
        const id = userInput[0].value;
        const pswd = userInput[1].value;
        const enteredCaptcha = userInput[2].value;
        console.log(enteredCaptcha);
        if (id === "") {
            alert("User ID is required.");
        } else if (pswd === "") {
            alert("Password is required.");
        }
        // else if(pswd.length < 8){
        //     alert("Password length is less than 8");
        // }
        else if (enteredCaptcha === "") {
            alert("CAPTCHA is required.");
        } else if (enteredCaptcha !== captchaText) {
            alert("CAPTCHA does not match. Please try again.");

            // Generate and display a new CAPTCHA on failure
            updateCaptcha();
        } else {
            alert('Student login successful.');
            window.location = "project2.html";
        }
    });
});
