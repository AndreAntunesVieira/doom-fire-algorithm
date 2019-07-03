import * as colors from './FireColorsPalette.js'

const fireColorsPalette = colors.blue
const [width, height] = [90, 50]
const totalFields = width * height
const main = document.querySelector('main')
const lastColorIndex = fireColorsPalette.length - 1

const rand = () => Math.round(Math.random() * 2)

const isFireBase = i => i >= totalFields - width

const setFireBase = (a, i) => isFireBase(i) && lastColorIndex

const fields = [...new Array(totalFields)].map(setFireBase)

const updateFieldColor = i => (fields[i - rand()] = fields[i + width] - rand())

const newFieldColor = i => {
  if (isFireBase(i) === false) updateFieldColor(i)
  return fireColorsPalette[fields[i]]
}

const getFieldHTML = (a, i) => `<div style="background-color: ${newFieldColor(i)}"></div>`

const updateFire = () => (main.innerHTML = fields.map(getFieldHTML).join(''))

setInterval(updateFire, 100)
