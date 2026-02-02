var textInput

function runScript() {
    textInput = document.forms["textInput"]["text"].value;
    document.getElementById('welcomeMessage').textContent = textInput;
}