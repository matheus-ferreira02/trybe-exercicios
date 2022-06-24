class BankAccount {
  public numAccount: number = 0;

  constructor(
    protected typeAccount: string,
    private _accountOwner: string,
    private _balance: number,
    private _status: boolean,
  ) {
    this.accountOwner = _accountOwner;
    this.balance = 0;
    this.status = false;
  }

  set accountOwner(name: string) {
    this._accountOwner = name;
  }

  get accountOwner() {
    return this._accountOwner;
  }

  set balance(balance: number) {
    this._balance = balance;
  }

  get balance() {
    return this._balance;
  }

  set status(status: boolean) {
    this._status = status;
  }

  get status() {
    return this._status;
  }

  private generateNumberAcc() {
    const numberAcc = Math.random() * 99999999;
    return numberAcc;
  }

  openAccount(type: string) {
    if (type !== 'CC' && type !== 'CP') throw new Error('Tipo de conta inválido');

    this.numAccount = this.generateNumberAcc();

    if (type === 'CC') this.balance = 50;
    else this.balance = 150;

    this.status = true;
  }

  closeAccount() {
    this.status = false;
  }

  deposit(value: number) {
    if(!this.status) throw new Error('A conta está fechada');

    if (value < 1) throw new Error('Insira um valor válido');

    this.balance += value;
  }

  withdraw(value: number) {
    if(!this.status) throw new Error('A conta está fechada');

    if (value > this.balance) throw new Error('Não pode sacar mais do que tem');

    this.balance -= value;
  }
}
