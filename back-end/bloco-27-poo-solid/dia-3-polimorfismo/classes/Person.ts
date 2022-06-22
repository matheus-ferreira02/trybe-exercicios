export default abstract class Person {
  private _name: string = '';
  private _birthDate: Date = new Date();

  constructor(name: string, birthDate: Date){
    this.name = name;
    this.birthDate = birthDate;
  }

  get birthDate(): Date {
    return this._birthDate
  }

  getAge(): number {
    const currentDate = new Date().getTime();
    const birthDate = this.birthDate.getTime();
    const timeDiff = Math.abs(currentDate - birthDate);
    return Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
  }

  set birthDate(date: Date) {
    const currentDate = new Date().getTime();
    const newDate = date.getTime();

    if (currentDate - newDate < 0) throw new Error('A data de nascimento não pode ser uma data no futuro');
    if (this.getAge() > 120) throw new Error('A pessoa não pode possuir mais de 120 anos');
    this._birthDate = date;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {    
    if(name.length < 3) throw new Error('O nome deve ter no mínimo três caracteres');
    this._name = name;
  }
}
