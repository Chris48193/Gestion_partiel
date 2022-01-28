import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Partiel } from '../partiel.model';
import { PartielsService } from '../partiels.service';

@Component({
  selector: 'app-partiel-list',
  templateUrl: './partiel-list.component.html',
  styleUrls: ['./partiel-list.component.css']
})
export class PartielListComponent implements OnInit {
  partiels!: Partiel[];
  error!: string;
  partielsExist = false;

  addPartielEvent: EventEmitter<any> = new EventEmitter();

  displayForm: boolean = false;

  matiere!: string;
  description!: string;
  date!: string;
  imageURL!: string;

  constructor(private partielService: PartielsService) { }

  ngOnInit(): void {
    this.updatePartiels();
  }

  onNewPartiel() {
    this.displayForm = !this.displayForm;
  }

  onAddPartiel() {
    if(this.matiere == "" || this.description == "" || this.date == "" || this.imageURL == "") {
      this.error = "Veillez remplir tout les champs s'il vous plaît";
    } else {
      this.partielService.addPartiel(new Partiel(this.matiere, this.description, this.date, this.imageURL));
      this.updatePartiels();
      this.matiere = "";
      this.description = "";
      this.date = "";
      this.imageURL = "";
    }
  }

  onDeletePartiel(id: number) {
    this.partielService.deletePartiel(id);
    this.updatePartiels();
  }

  /**
   * Met à jour les partiels de ce composant à chaque changement du partiel du service partiels
   */
  updatePartiels() {
    this.partiels = this.partielService.getPartiels();
    this.partielsExist = this.partiels.length != 0;
  }

}
