const fs = require('fs')

function myCallback(data){
  console.log(data)
} 

fs.readFile('./data.json')

