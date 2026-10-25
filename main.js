const welcomeButton = document.querySelector("#button");
const buttonMessage = document.querySelector("#button-message");

welcomeButton.addEventListener("click", () => {
    buttonMessage.textContent = "Takk fyrir að smella!";
});