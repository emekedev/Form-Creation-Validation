document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('registration-form');
    let feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event){
        event.preventDefault();
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        let isValid = true;
        const messages = [];

        if(username.length < 3){
            isValid = false;
            messages.push('Username is less than three char')
        }

        if (!email.includes('@') || !email.includes('.')) {
        isValid = false;
        messages.push("Email must include both '@' and '.' characters.");
        }

        if (password.length < 8) {
            isValid = false;
            messages.push("Password is less tahn 8 char");
        }

        feedbackDiv.style.display = 'block';

        if(isValid) {
            feedbackDiv.textContent = "Registeration successful!"
            feedbackDiv.style.color = "#28a745";
            feedbackDiv.style.display = "block";
        }

        if (!isValid) {
        // let feedbackDiv = document.getElementById("feedbackDiv");
        feedbackDiv.innerHTML = messages.join("<br>");
        feedbackDiv.style.color = "#dc3545";
        feedbackDiv.style.display = "block";
}

    })
});