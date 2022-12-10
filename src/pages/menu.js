import '../styles/menu.sass'
import { MENU_ITEMS } from '../data.js'

export default function Menu() {
  const menu = document.createElement('div')
  const title = document.createElement('h1')
  title.textContent = 'Menu'
  menu.appendChild(title)

  MENU_ITEMS.forEach(i => menu.appendChild(menuEntry(i.title, i.price, i.image, i.text)))
  return menu
}

function menuEntry(name, price, imageSrc, text) {
  const title = document.createElement('h2')
  title.textContent = name

  const image = new Image()
  image.src = imageSrc

  const description = document.createElement('div')
  description.className = 'description'
  description.textContent = text
  const itemPrice = document.createElement('p')
  itemPrice.textContent = `$${price}`
  description.appendChild(itemPrice)

  const main = document.createElement('div')
  main.appendChild(image)
  main.appendChild(description)

  const menuEntry = document.createElement('div')
  menuEntry.className = 'menu-entry'
  menuEntry.appendChild(title)
  menuEntry.appendChild(main)
  return menuEntry
}
