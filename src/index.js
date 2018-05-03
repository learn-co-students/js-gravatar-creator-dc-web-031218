function handleSubmit(e) {
	e.preventDefault()
	clearDOM();
	let input = e.target.children[0].children[0].value;
	updateDOM(input);

}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
})
