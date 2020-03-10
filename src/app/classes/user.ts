export default class User {

  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  get userName(): string {
    return this.name;
  }

}
