function Calculator() {
  this.display = document.querySelector('.display')

  this.start = () => {
    this.captureClicks()
    this.pressEnter()
    this.pressBackspace()
    this.pressDelete()
  }

  this.addNumberToDisplay = el => this.display.value += el.innerText

  this.clearDisplay = () => this.display.value = ''

  this.deleteOne = () => this.display.value = this.display.value.slice(0, -1)

  this.pressEnter = function () {
    this.display.addEventListener('keyup', e => {
      if (e.keyCode === 13) {
        this.calcNow()
      }
    })
  }

  this.pressBackspace = function () {
    this.display.addEventListener('keydown', e => {
      if (e.keyCode === 8) {
        e.preventDefault()
        this.deleteOne()
      }
    })
  }

  this.pressDelete = function () {
    this.display.addEventListener('keydown', e => {
      if (e.keyCode === 46) {
        e.preventDefault()
        this.clearDisplay()
      }
    })
  }

  this.captureClicks = () => {
    document.addEventListener('click', (e) => {
      const el = e.target

      if (el.classList.contains('btn-num')) this.addNumberToDisplay(el)

      if (el.classList.contains('btn-clear')) this.clearDisplay()

      if (el.classList.contains('btn-del')) this.deleteOne()

      if (el.classList.contains('btn-eq')) this.calcNow()

      this.display.focus()
    })
  };

  this.calcNow = function () {
    let count = this.display.value
    try {
      count = eval(count)

      if (!count) {
        alert('Invalid values!')
        return
      }

      this.display.value = count
    } catch (e) {
      alert('Invalid values!')
      return
    }
  }
}

const calculator = new Calculator()
calculator.start()