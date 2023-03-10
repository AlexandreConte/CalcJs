import calculate from "./calculate.js"
import copyToClipboard from "./copyToClipboard.js"
import { handleButtonPress, handleClearButton, handleTyping } from "./keyHandler.js"
import themeSwitcher from "./themeSwitcher.js"

document.querySelectorAll(".charKey").forEach(btn => btn.addEventListener('click', handleButtonPress))
document.querySelector("#clear").addEventListener('click', handleClearButton)
document.querySelector("#equal").addEventListener('click', calculate)
document.querySelector("#themeSwitcher").addEventListener("click", themeSwitcher)
document.querySelector("#copyToClipboard").addEventListener("click", copyToClipboard)
document.querySelector("#input").addEventListener('keydown', handleTyping)
