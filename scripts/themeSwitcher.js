export default function themeSwitcher() {
  const root = document.querySelector(":root")
  const main = document.querySelector("main")

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
}
