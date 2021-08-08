// Different types of 
class MutantX {
  constructor(
    public secretName: string,
    public superPowers: string | Array<string>,
    protected isMutant: boolean,
  ) { }

  public listOfSuperPowers(): string | Array<string> {
    return this.superPowers;
  }

}

let professorX = new MutantX('Kereki', ['Programmer', 'Guru', 'Powerful psychic abilities'], true);
let mystique = new MutantX('Raven', 'Transformation', true);
professorX.listOfSuperPowers(); // ['Programmer', 'Guru', 'Powerful psychic abilities']
mystique.listOfSuperPowers(); // 'Transformation'