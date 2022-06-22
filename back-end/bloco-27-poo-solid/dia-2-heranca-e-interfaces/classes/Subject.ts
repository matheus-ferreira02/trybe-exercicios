export default class Subject {
  private _name: string = '';

  constructor(name: string) {
    this.name = name;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    if (name.length < 3) throw new Error('O nome tem que possuir no mínimo 3 caracteres');
    this._name = name
  }
}
