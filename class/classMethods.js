// class methods have 'static' in front of them
// they are methods that are pertinent to CLASSES
// and not really to INSTANCES
// they are utility functions for the class
// and cant be used by instances

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
  static enrollStudents() {
    return "Enrolling students";
  }
}

const studentOne = new Student("Jim", "Raynor", "Senior")
Student.enrollStudents()