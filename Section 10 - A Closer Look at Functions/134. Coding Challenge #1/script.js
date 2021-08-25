

const poll = {
  question: "What is your favourite programming language?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],

  optionsString() {
    let str = ''
    for (const item of this.options) {
      str = str + item + '\n'
    }

    return str
  },

  answers: [0, 0, 0, 0],

  displayResults() {



    let str = 'Poll results are '

    for (const item of this.answers) {
      str = str + item + ', '
    }

    return str.slice(0, -2) + '.'


  },

  registerNewAnswer() {

    const result = Number(prompt(`${this.question}\n\n${this.optionsString()} \n\n (Write option number)`))

    if (typeof result === 'number' && result < this.answers.length) {
      this.answers[result]++
    } else {
      console.log('Wrong number');
    }


    console.log(this.displayResults());


  }

};


document.querySelector('.btn-answer').addEventListener('click', poll.registerNewAnswer.bind(poll))





