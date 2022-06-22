import Employee from "./Employee";
import Person from "./Person";
import Subject from "./Subject";

export default class Teacher extends Employee {  
  constructor(
    name: string,
    birthDate: Date,
    private _subject: Subject,
    _salary: number,
    _admissionDate: Date
  ) {
    super(name, birthDate, _salary, _admissionDate);
  }
}

const teste = new Teacher('matheus', new Date('1979/07/25'), new Subject('Matematica'), 12000, new Date());
