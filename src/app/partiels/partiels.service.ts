import { Injectable } from '@angular/core';
import { Partiel } from './partiel.model';

@Injectable({
  providedIn: 'root'
})
export class PartielsService {
  partielCourant!: Partiel;

  partiels: Partiel[] = [
    {matiere: 'Mathematique', description: 'L\'examen de mathématique aura lieu en salle 303 au campus du technopôle sous la surveillance de Mr. Ginoux.', date_evaluation: '25-05-2022', imageURL: 'https://lycee-marchal.com/sites/default/files/imce/spe-maths-image.jpg'},
    {matiere: 'Anglais', description: 'Vous voulez tester votre niveau en anglais ? Vous êtes la bienvenue à notre test anglais prévu pour ce 22 mai 2022. Il est gratuit et accessible à tous.', date_evaluation: '22-05-2022', imageURL: 'https://i.unimedias.fr/2021-08/3.png?auto=format%2Ccompress&crop=faces&cs=tinysrgb&fit=crop&h=675&w=1200'},
    {matiere: 'Chimie', description: 'Retrouvez nous pour l\'examen de chimie au bridoux le 22 juin, n\'oubliez pas de vous enregistrer avant à l\'email enregistement@univ-lorraine.fr.', date_evaluation: '22-06-2022', imageURL: 'https://cdn.futura-sciences.com/buildsv6/images/wide1920/b/b/5/bb5ab61f3e_50151085_quiz-chimie-bac-mg-fotolia.jpg'},
  ]
  constructor() { }

  getPartiels(): Partiel[] {
    return this.partiels.slice();
  }

  setPartiels(partiel: Partiel): void {
    this.partielCourant = partiel;
  }

  addPartiel(partiel: Partiel): void {
    this.partiels.unshift(partiel);
  }

  deletePartiel(id: number) {
    // this.partiels = this.partiels.splice(id, 1);
    this.partiels = this.partiels.filter(function(value, index, arr) {
      return index != id;
    })
  }
}
