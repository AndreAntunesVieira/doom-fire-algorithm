import fireColorsPalette from './FireColorsPalette.js'

const [fireWidth, fireHeight] = [90, 50]
const totalFields = fireWidth * fireHeight
const main = document.querySelector('main')
const lastColorIndex = fireColorsPalette.length - 1

const fields = [...new Array(totalFields)].map(setFireBase)

start()

function start() {
  setInterval(updateFire, 30)
}

function updateFire() {
  main.innerHTML = fields.map(getFieldHTML).join('')
}

function getFieldHTML(a, i) {
  return `<div style="background-color: ${newFieldColor(i)}"></div>`
}

function newFieldColor(i) {
  if (isFireBase(i) === false) updateFieldColor(i)
  return fireColorsPalette[fields[i]]
}

function updateFieldColor(i) {
  fields[i - rand()] = fields[i + fireWidth] - rand()
}

function isFireBase(i) {
  return i >= totalFields - fireWidth
}

function setFireBase(a, i) {
  return isFireBase(i) && lastColorIndex
}

function rand() {
  return Math.round(Math.random() * 2)
}
