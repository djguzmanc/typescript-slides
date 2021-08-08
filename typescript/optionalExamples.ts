// Set a property as optional in an interfaces,
// classes and function
interface IHero {
  secretName: string;
  superPower: string;
  superAge?: number;
}

class Marvel implements IHero {
 
  constructor(
    public secretName: string, 
    public superPower: string
    ) { }
  

  public getSuperHero(): void {
    console.log(
      `The name is ${this.secretName} and his/her superpower is ${this.superPower}`
      );
  }
}

let wonderWoman = new Marvel('Diana', 'Programmer');
wonderWoman.getSuperHero();