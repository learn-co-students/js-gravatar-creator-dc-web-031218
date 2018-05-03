function handleSubmit(e) {
//   e.preventDefault();
//   const text = document.getElementById("text-material")
//   // console.log(text.value)
//   const hash = md5.array(text.value)
//   const ident => new Identicon(hash)
//   const color = `${hash[0].toString(16)}${hash[1].toString(16)}${hash[2].toString(16)}`;
//   // const temp = document.body
//   // temp.style.backgroundColor = color;
//   // document.body.style.backgroundColor = color;
//   const temp = document.getElementById("text-material")
//   temp.backgroundColor = color
//   // debugger;
      e.preventDefault()
      const inputValue = e.target.querySelector("input").value
      updateDOM(inputValue)
      e.target.reset()
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("identicon-form")
  form.addEventListener("submit", handleSubmit)
})
