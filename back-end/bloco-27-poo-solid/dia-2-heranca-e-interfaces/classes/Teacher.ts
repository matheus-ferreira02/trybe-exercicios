import IEmployee from "../interfaces/Employee";
import Person from "./Person";
import Subject from "./Subject";

export default class Teacher extends Person implements IEmployee {
  private _registration: string;
  
  constructor(
    name: string,
    birthDate: Date,
    private _subject: Subject,
    private _salary: number,
    private _admissionDate: Date
  ) {
    super(name, birthDate);
    this._registration = this.generateRegistration();
  }

  generateRegistration() {
    return 'seiladadadawdadadadadadawdawddadadadadadadada'
  }

  set salary(salary: number) {
    if (salary < 0) throw new Error('O salário não pode ser negativo.');
    this._salary = salary;
  }

  set admissionDate(admissionDate: Date) {
    const currentDate = new Date().getTime();
    const newDate = admissionDate.getTime();

    if (currentDate - newDate < 0) throw new Error('A data de nascimento não pode ser uma data no futuro');
    this._admissionDate = admissionDate;
  }

  get registration(): string {
    return this._registration;
  }
}

const teste = new Teacher('matheus', new Date('2002/05/04'), new Subject('Matematica'), 12000, new Date());
