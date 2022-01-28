export class Partiel {
  public matiere: string;
  public description: string;
  public date_evaluation: string;
  public imageURL: string;

  constructor(matiere: string, desc: string, date_evaluation: string, imageURL: string) {
    this.matiere = matiere;
    this.description = desc;
    this.date_evaluation = date_evaluation;
    this.imageURL = imageURL;
  }
}
