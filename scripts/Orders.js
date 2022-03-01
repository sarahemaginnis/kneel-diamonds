import { getOrders, getSizes, getStyles, getMetals, getSettings } from "./database.js"

const metals = getMetals()
const sizes = getSizes()
const styles = getStyles()
const settings = getSettings()

// Remember that the function you pass to find() must return true/false

const buildOrderListItem = (order) => {
    const foundMetal = metals.find(metal => metal.id === order.metalId)
    const foundSize = sizes.find(size => size.id === order.sizeId)
    const foundStyle = styles.find(style => style.id === order.styleId)
    const foundSetting = settings.find(setting => setting.id === order.settingId)
    let totalCost = ""
    if (foundSetting.id === 1) {
        totalCost = foundMetal.price + foundSize.price + foundStyle.price
    } else if (foundSetting.id === 2) {
        totalCost = (foundMetal.price + foundSize.price + foundStyle.price) * 2
    } else {
        totalCost = (foundMetal.price + foundSize.price + foundStyle.price) * 4
    }
    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
        Order #${order.id} cost ${costString}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}

