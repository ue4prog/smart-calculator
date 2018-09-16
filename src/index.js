class SmartCalculator {

constructor(initialValue) {
  this.operands = ['^', '*','/', '-', '+']
  this.toCount = [initialValue]
  }

add(number) {
  this.toCount.push('+')
  this.toCount.push(number)
  return this
}

subtract(number) {
  this.toCount.push('-')
  this.toCount.push(number)
  return this

}

multiply(number) {
  this.toCount.push('*')
  this.toCount.push(number)
  return this
}

devide(number) {
  this.toCount.push('/')
  this.toCount.push(number)
  return this
}

pow(number) {
  this.toCount.push('^')
  this.toCount.push(number)
  return this
}

valueOf() {
  this.operands.forEach((operand) => {
  for (let j = 0; j <= this.toCount.length; j++) {
    if (this.toCount[j] === operand) {
      switch (operand) {
        case '^': this.toCount[j] = Math.pow(this.toCount[j - 1], this.toCount[j + 1])
        break
        case '*': this.toCount[j] = this.toCount[j - 1] * this.toCount[j +1]
        break
        case '/': this.toCount[j] =  this.toCount[j - 1] / this.toCount[j +1]
        break
        case '+': this.toCount[j] =  this.toCount[j - 1] + this.toCount[j +1]
        break
        case '-': this.toCount[j] =  this.toCount[j - 1] - this.toCount[j +1]
        break
        default: return 'wow'
      }
      this.toCount.splice(j + 1, 1)
      this.toCount.splice(j - 1, 1)
      j = 0

    }

  }
 
})

    return  this.toCount[0]

  }

}
module.exports = SmartCalculator;