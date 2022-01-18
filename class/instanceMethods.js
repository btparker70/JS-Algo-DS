// instance methods are methods that provide functionality that
// pertain to a single instance of an object

// they need an instance of the class!

// calling fullName for instance only works on one object at a time
// studentOne.fullName() Your full name is Jim Raynor.'

class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.absences = 0;
    this.scores = [];
  }
  fullName() {
    return `Your full name is ${this.firstName} ${this.lastName}.`;
  }
  markLate() {
    this.absences += 1;
    if(this.absences >= 3) {
      return `You have been expelled!`
    }
    return `${this.firstName} ${this.lastName} has been absent ${this.absences} times.`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores
  }
  calculateAverage() {
    const sum = this.scores.reduce((a, b) => a + b);
    return sum/this.scores.length
  }
}

const studentOne = new Student("Jim", "Raynor", "Senior")
studentOne.fullName()
studentOne.markLate()