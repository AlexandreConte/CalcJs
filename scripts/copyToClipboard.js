export default function copyToClipboard(ev) {
  const resultInput = document.querySelector("#result")
  const btn = ev.currentTarget
  btn.innerText = "Copied!"
  btn.classList.add("success")
  navigator.clipboard.writeText(resultInput.value)
  setTimeout(() => {
    btn.innerText = "Copy"
    btn.classList.remove("success")
  }, 3000)
}
