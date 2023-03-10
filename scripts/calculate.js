export default function calculate() {
  const resultInput = document.querySelector("#result")
  try {
    const result = `${eval(input.value)}`
    if (resultInput.classList.contains("error")) {
      resultInput.classList.remove("error")
    }
    if (result === 'undefined') {
      resultInput.value = ""
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
