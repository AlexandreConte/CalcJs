import calculate from "./calculate.js"

const input = document.querySelector("#input")
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]


export function handleButtonPress(ev) {
  const btn = ev.target
  const btnValue = btn.dataset.value
  input.value += btnValue
}

export function handleClearButton() {
  input.value = ''
  input.focus()
}

export function handleTyping(ev) {
  ev.preventDefault()
  if (allowedKeys.includes(ev.key)) {
    input.value += ev.key
    return
  }
  if (ev.key === "Backspace") {
    input.value = input.value.slice(0, -1)
    return
  }
  if (ev.key === "Enter") {
    calculate()
    return
  }
}