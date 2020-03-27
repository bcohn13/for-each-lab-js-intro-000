function iterativeLog(array) {

  array.forEach((element,index) => {console.log(`${index}: ${element}`)})
}

function iterate(callback) {

  var array=[]
  array.forEach(callback => {array.append(callback)})
  return array
}
