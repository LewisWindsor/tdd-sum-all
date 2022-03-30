const sumAll = (array) => {
  let result = 0

  for(let i =0; i < array.length; i++){
    const currentNumber = array[i]

    result = currentNumber + result
  }
  return result
}

module.exports = sumAll