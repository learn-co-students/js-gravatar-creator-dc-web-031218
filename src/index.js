function handleSubmit(e) {
  e.preventDefault();
  updateDOM(document.querySelector("form input[type='text']").value);
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form");
  form.addEventListener("submit", handleSubmit);
});
