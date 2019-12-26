//create parent class
class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  //create getters
  get name() {
    return this._name;
  }
  get level() {
    return this._level;
  }
  get numberOfStudents() {
    return this._numberOfStudents;
  }

  //create setter for method
  set numberOfStudents(value) {
    if (value.isNaN()) {
      consosle.log('Invalid input: please enter a number.');
    } else {
      this._numberOfStudents = value;
    }
  }

  //create method that logs a string to console
  quickFacts() {
    console.log(
      `${this.name} edcuated ${this.numberOfStudents} students at the ${this.level} school level.`
    );
  }

  static pickSubstituteTeacher(substituteTeachers) {
    const randInt = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[randInt];
  }
}

//create PrimarySchool class
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name, 'primary', numberOfStudents);
    this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy() {
    return this._pickupPolicy;
  }
}

//create HighSchool class
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams() {
    return this._sportsTeams;
  }
}

//create primary school instance
const lorraineHansbury = new PrimarySchool(
  'Lorraine Hansbury',
  514,
  'Students must be picked up by a parent, guardian, or a family member over the age of 13.'
);
lorraineHansbury.quickFacts();
const sub = School.pickSubstituteTeacher([
  'Jamal Crawford',
  'Lou Williams',
  'J. R. Smith',
  'James Harden',
  'Jason Terry',
  'Manu Ginobli'
]);
console.log(`Substitute Teacher: ${sub}`);

//create high school instance
const alSmith = new HighSchool('Al E. Smith', 415, [
  'Baseball',
  'Basketball',
  'Volleyball',
  'Track and Field'
]);
console.log(alSmith.sportsTeams);
