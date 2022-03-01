import { getSettings, setSetting } from "./database.js"

const settings = getSettings()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.name === "setting") {
            setSetting(parseInt(event.target.value))
        }
    }
)

export const Settings = () => {
    let html = ""

    // This is how you have been converting objects to <li> elements
    for (const setting of settings) {
        html += `<input type="radio" name="setting" value="${setting.id}" /> ${setting.setting}`
    }

    return html
}
