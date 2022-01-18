// a class is a blueprint for blueprint for creating objects with predefined
// properties and methods
// js added classes in 2015, but they are purely syntactical sugar over js's existing
// prototype-based inheritance. The class syntax does not introduce a new object-oriented inheritance model to js
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
  }
}

const studentOne = new Student("Jim", "Raynor", "Senior")
