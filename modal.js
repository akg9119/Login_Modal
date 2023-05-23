function validate(event) {
    event.preventDefault();

    var name = document.getElementById('name');
    var email = document.getElementById('email');
    var phone = document.getElementById('phone');
    var password = document.getElementById('password');

    if (name.value === "" && email.value === "" && phone.value === "" && password.value === "") {
        alert("Login successful");
    } else {
        alert("No blank values allowed");
    }
}