const div = document.querySelector('div')
const table = document.createElement('table')

for (let i = 0; i < 10; i++) {
  let tr = document.createElement('tr')
  for (let k = 0; k < 10; k++) {
    let td = document.createElement('td')
    let counter = i * 10 + k + 1
    let number = document.createElement('div')
    number = counter
    td.append(number)
    tr.append(td)
  }
  table.append(tr)
}

div.append(table)
