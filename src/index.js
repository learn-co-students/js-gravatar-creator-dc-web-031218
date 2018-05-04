function handleSubmit(e) {
  e.preventDefault();
  updateDOM(document.querySelector("form input[type='text']").value);
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form");
  form.addEventListener("submit", handleSubmit);
});

function randomText() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 10; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  document.querySelector("form input[type='text']").value = text;
}
