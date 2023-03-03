const main = document.querySelector("main")
const root = document.querySelector(":root")
const input = document.querySelector("#input")
const resultInput = document.querySelector("#result")

const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll(".charKey").forEach(btn => {
  btn.addEventListener('click', () => {
    const btnValue = btn.dataset.value
    input.value += btnValue
  })
})

document.querySelector("#clear").addEventListener('click', () => {
  input.value = null
  input.focus()
})

document.querySelector("#equal").addEventListener('click', calculate)

document.querySelector("#themeSwitcher").addEventListener("click", () => {
  const theme = {
    light: {
      bgColor: "#f1f5f9",
      borderColor: "#aaaaaa",
      fontColor: "#212529",
      primaryColor: "#26834a"
    },
    dark: {
      bgColor: "#212529",
      borderColor: "#555555",
      fontColor: "#f1f5f9",
      primaryColor: "#4dff91"
    }
  }

  if (main.dataset.theme === "dark") {
    root.style.setProperty("--bg-color", theme.light.bgColor)
    root.style.setProperty("--border-color", theme.light.borderColor)
    root.style.setProperty("--font-color", theme.light.fontColor)
    root.style.setProperty("--primary-color", theme.light.primaryColor)
    main.dataset.theme = "light"
  }
  else {
    root.style.setProperty("--bg-color", theme.dark.bgColor)
    root.style.setProperty("--border-color", theme.dark.borderColor)
    root.style.setProperty("--font-color", theme.dark.fontColor)
    root.style.setProperty("--primary-color", theme.dark.primaryColor)
    main.dataset.theme = "dark"
  }
})

document.querySelector("#copyToClipboard").addEventListener("click", (ev) => {
  const btn = ev.currentTarget
  btn.innerText = "Copied!"
  btn.classList.add("success")
  navigator.clipboard.writeText(resultInput.value)
  setTimeout(() => {
    btn.innerText = "Copy"
    btn.classList.remove("success")
  }, 3000)
})

input.addEventListener('keydown', (ev) => {
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
})

function calculate() {
  try {
    const result = `${eval(input.value)}`
    if (resultInput.classList.contains("error")) {
      resultInput.classList.remove("error")
    }
    if (result === 'undefined') {
      resultInput.value = "0"
    }
    else if (result === 'Infinity' || result === 'NaN') {
      throw new Error("Error")
    }
    else {
      resultInput.value = result
    }
  }
  catch (error) {
    resultInput.value = "Error"
    resultInput.classList.add("error")
  }
}
