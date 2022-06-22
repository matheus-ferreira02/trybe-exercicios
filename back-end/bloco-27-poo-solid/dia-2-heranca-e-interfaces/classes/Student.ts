import Person from './Person';

export default class Student extends Person {
  private _enrollment: number = Math.random() * 999999;
  private _examsGrades: number[] = [];
  private _worksGrades: number[] = [];

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

  set worksGrades(grades: number[]) {
    if (grades.length >= 2) throw new Error('A pessoa estudante deve possuir no máximo 2 notas de trabalhos');
  }

  set examsGrades(grades: number[]) {
    if (grades.length >= 4) throw new Error('A pessoa estudante deve possuir no máximo 4 notas de provas');
  }
}
 