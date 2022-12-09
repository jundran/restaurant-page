import { p1, p2 } from '../data.js'
import RestaurantImage from '../images/restaurant.jpg'

export default function Home() {
  const homepage = document.createElement('div')
  homepage.className = 'page'

  const title = document.createElement('h1')
  title.textContent = 'Restaurant'

  const image = new Image()
  image.src = RestaurantImage

  const para1 = addParagraph(p1)
  const para2 = addParagraph(p2)

  ;[title, image, para1, para2].forEach(el => homepage.appendChild(el))
  return homepage
}

function addParagraph(text) {
  const el = document.createElement('p')
  el.textContent = text
  return el
}
