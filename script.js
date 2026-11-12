
function showWelcome() {

    alert("Welcome to KIET University Karachi!");

}

function submitForm(event) {

    event.preventDefault();

    var name = document.getElementById("name").value;

    document.getElementById("form-message").innerHTML =
        "Thank you " + name + "! Your inquiry has been submitted successfully.";

}
