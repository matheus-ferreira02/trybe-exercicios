import IEnrollable from "../interfaces/Enrollable";
import Person from "./Person";

export default class Employee extends Person implements IEnrollable {
  private _enrollment: number = 0;
  constructor(name: string, birthDate: Date, private _salary: number, private _admissionDate: Date) {    
    super(name, birthDate);
    this.salary = _salary;
    this.generateEnrollment();
    this.admissionDate = _admissionDate
  }

  generateEnrollment(): void {
    const enrollment = Math.random() * 999999;
    this.enrollment = enrollment
  }

  set enrollment(enr: number) {
    this._enrollment = enr
  }

  set salary(salary: number) {
    if (salary < 0) throw new Error('O salário não pode ser negativo.');
    this._salary = salary;
  }

  get salary() {
    return this._salary;
  }

  get enrollment() {
    return this._enrollment;
  }

  get admissionDate() {
    return this._admissionDate;
  }

  set admissionDate(admissionDate: Date) {
    const currentDate = new Date().getTime();
    const newDate = admissionDate.getTime();

    if (currentDate - newDate < 0) throw new Error('A data de nascimento não pode ser uma data no futuro');
    this._admissionDate = admissionDate;
  }
}