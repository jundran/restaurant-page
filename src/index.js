import Home from './pages/home.js'
import Menu from './pages/menu.js'
import Contact from './pages/contact.js'
import './styles.css'

// FUNCTIONS
function createPageHolder() {
  const pageHolder = document.createElement('div')
  pageHolder.id = 'page-holder'
  pageHolder.appendChild(Home())
  return pageHolder
}

function createMenuBar() {
  document.title = 'Restaurant'
  const menuContainer = document.createElement('div')
  menuContainer.className = 'menu-container'
  createMenuItems().forEach(item => menuContainer.appendChild(item))
  return menuContainer
}

function createMenuItems() {
  return ['Home', 'Menu', 'Contact'].map(pageName => {
    const active = pageName === 'Home'
    return createMenuItem(pageName, active)
  })

  function createMenuItem(pageName, active) {
    const item = document.createElement('div')
    item.textContent = pageName
    item.className = `menu-item${active ? ' active' : ''}`
    item.addEventListener('click', handleMenuClick)
    return item
  }

  function handleMenuClick(e) {
    document.querySelectorAll('.menu-item')
      .forEach(item => item.classList.remove('active'))

    e.target.classList.add('active')
    const page = e.target.textContent
    let pageRenderFn = Home
    if(page === 'Menu') pageRenderFn = Menu
    else if(page === 'Contact') pageRenderFn = Contact
    document.querySelector('#page-holder').replaceChildren(pageRenderFn())
  }
}

// ENTRY POINT
const content = document.querySelector('#content')
content.appendChild(createMenuBar())
content.appendChild(createPageHolder())
