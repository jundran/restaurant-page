export default function Contact() {
  const hoursTitle = document.createElement('h2')
  hoursTitle.textContent = 'Hours'

  const addressTitle = document.createElement('h2')
  addressTitle.textContent = 'Address'
  addressTitle.style.marginTop = '64px'

  const contact = document.createElement('div')
  contact.appendChild(hoursTitle)
  contact.appendChild(addInfo(hours))
  contact.appendChild(addressTitle)
  contact.appendChild(addInfo(address))
  return contact
}

const address = [
  "1214 Fake Street",
  "Faketown FS",
  "Tel: 555-555-5555",
  "Email: restaurant@example.com"
]

const hours = [
  "Monday: 08:00 to 22:00",
  "Tueday: 08:00 to 22:00",
  "Wednesday: 08:00 to 22:00",
  "Thursday: 08:00 to 22:00",
  "Friday: 08:00 to 22:00",
  "Saturday: 09:00 to 22:00",
  "Sunday: 11:00 to 20:00"
]

function addInfo(data) {
  const info = document.createElement('div')
  data.forEach(line => info.appendChild(addLine(line)))
  return info
}

function addLine(text) {
  const line = document.createElement('p')
  line.textContent = text
  line.style.margin = '0 8px 0 32px'
  return line
}
