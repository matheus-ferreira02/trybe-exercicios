import IEnrollable from '../interfaces/Enrollable';
import Person from './Person';

export default class Student extends Person implements IEnrollable {
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

  constructor(name: string, birthDate: Date, private _enrollment: number) {
    super(name, birthDate);
    this.generateEnrollment
  }

  generateEnrollment(): void {
    const enrollment = Math.random() * 999999;
    this.enrollment = enrollment
  }

  sumGrades(): number {
    const sumExams = this._examsGrades.reduce((a, b) => a + b);
    const sumWorks = this._worksGrades.reduce((a, b) => a + b);
    return sumExams + sumWorks;
  }

  averageGrade(): number {
    const sumGrades = this.sumGrades();
    const qntGrades = this._examsGrades.length + this._worksGrades.length;
    return sumGrades / qntGrades;
  }

  get enrollment() {
    return this._enrollment;
  }

  set enrollment(enr: number) {
    this._enrollment = enr;
  }

  set worksGrades(grades: number[]) {
    if (grades.length >= 2) throw new Error('A pessoa estudante deve possuir no máximo 2 notas de trabalhos');
  }

  set examsGrades(grades: number[]) {
    if (grades.length >= 4) throw new Error('A pessoa estudante deve possuir no máximo 4 notas de provas');
  }
}
