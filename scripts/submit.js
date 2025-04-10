document.getElementById("registrationForm").addEventListener("submit", function(e) {
    const pw1 = document.getElementById("password");
    const pw2 = document.getElementById("confirm");

    if (pw1.value !== pw2.value) {
        e.preventDefault();
        alert("Passwords do not match!");
        pw1.value = "";
        pw2.value = "";
        pw1.focus();
    }
});
