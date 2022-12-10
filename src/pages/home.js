import { HOME_PARAGRAPH_ONE, HOME_PARAGRAPH_TWO } from '../data.js'
import RestaurantImage from '../images/restaurant.jpg'

export default function Home() {
  const title = document.createElement('h1')
  title.textContent = 'Restaurant'

  const image = new Image()
  image.src = RestaurantImage

  const para1 = addParagraph(HOME_PARAGRAPH_ONE)
  const para2 = addParagraph(HOME_PARAGRAPH_TWO)

  const homepage = document.createElement('div')
  ;[title, image, para1, para2].forEach(el => homepage.appendChild(el))
  return homepage
}

function addParagraph(text) {
  const el = document.createElement('p')
  el.textContent = text
  return el
}
