var message = prompt("Enter your message", "‎");
var counter = parseInt(prompt("How many Times ?", 10));
window.InputEvent = window.Event || window.InputEvent;
var event = new InputEvent("input", { bubbles: true });
var textbox = document.getElementsByClassName("selectable-text copyable-text iq0m558w g0rxnol2")[1];
for (let index = 0; index < counter; index++) {
  textbox.innerHTML = message;
  textbox.dispatchEvent(event);
  document.getElementsByClassName("tvf2evcx oq44ahr5 lb5m6g5c svlsagor p2rjqpw5 epia9gcq")[0].click();
}
