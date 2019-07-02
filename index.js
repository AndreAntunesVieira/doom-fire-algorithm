const fireColorsPalette = ["rgba(7, 7, 7, 1)", "rgba(31, 7, 7, 1)", "rgba(47, 15, 7, 1)", "rgba(71, 15, 7, 1)", "rgba(87, 23, 7, 1)", "rgba(103, 31, 7, 1)", "rgba(119, 31, 7, 1)", "rgba(143, 39, 7, 1)", "rgba(159, 47, 7, 1)", "rgba(175, 63, 7, 1)", "rgba(191, 71, 7, 1)", "rgba(199, 71, 7, 1)", "rgba(223, 79, 7, 1)", "rgba(223, 87, 7, 1)", "rgba(223, 87, 7, 1)", "rgba(215, 95, 7, 1)", "rgba(215, 95, 7, 1)", "rgba(215, 103, 15, 1)", "rgba(207, 111, 15, 1)", "rgba(207, 119, 15, 1)", "rgba(207, 127, 15, 1)", "rgba(207, 135, 23, 1)", "rgba(199, 135, 23, 1)", "rgba(199, 143, 23, 1)", "rgba(199, 151, 31, 1)", "rgba(191, 159, 31, 1)", "rgba(191, 159, 31, 1)", "rgba(191, 167, 39, 1)", "rgba(191, 167, 39, 1)", "rgba(191, 175, 47, 1)", "rgba(183, 175, 47, 1)", "rgba(183, 183, 47, 1)", "rgba(183, 183, 55, 1)", "rgba(207, 207, 111, 1)", "rgba(223, 223, 159, 1)", "rgba(239, 239, 199, 1)", "rgba(255, 255, 255, 1)"]
const fireWidth = 100
const fireHeight = 50
const totalFields = fireWidth * fireHeight
const main = document.querySelector('main')
const fields = [...new Array(totalFields)]

const rand = () => Math.round(Math.random() * 2)

const updateField = (i) => {
  if (i >= totalFields - fireWidth) return fields[i] = fireColorsPalette.length - 1
  fields[i - rand()] = fields[i + fireWidth] - rand()
}

const renderRow = (a, i) => {
  updateField(i)
  return `<div style="background-color: ${fireColorsPalette[fields[i]]}"></div>`
}

const updateFire = () => {
  const render = fields.map(renderRow)
  document.querySelector('main').innerHTML = render.join('')
}

const start = () => {
  main.style.width = fireWidth * 5
  setInterval(updateFire, 50)
}

start()

