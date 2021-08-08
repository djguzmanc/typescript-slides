// Two classes three ways to access data
// POO encapsulation examples
class Hero {
  constructor(
    public secretName: string,
    private _superPower: string,
    protected isMutant: boolean,
  ) { }

  public getHero(): void {
    console.log(`${this.secretName} and ${this._superPower}`);
  }

  private getSuperPower(): void {
    console.log(`${this._superPower}`);
  }

  protected verifyHero(): string {
    return this.isMutant ? "Es mutante" : "Heroe de sangre pura";
  }

}

class Mutant extends Hero {
  constructor(
    secretName: string,
    superPower: string,
    isMutant: boolean
  ) {
    super(secretName, superPower, isMutant);
  }

  getMutant(): void {
    this.getHero();
    console.log(this.verifyHero());
  }
}

let scarletWitch = new Hero('Wanda', 'Tester', false);
let wolverine = new Mutant('Logan', 'Project Manager', true);

scarletWitch.getHero();
wolverine.getMutant();