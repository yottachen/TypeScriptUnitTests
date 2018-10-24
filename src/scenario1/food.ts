export class Food {
  private name: string;
  constructor(name: string) {
    this.name = name;
  }

  public getDeliciousFoodName(): string {
    return this.name;
  }
}
