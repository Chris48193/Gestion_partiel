import { Component, OnInit } from '@angular/core';
import { Partiel } from './partiel.model';
import { PartielsService } from './partiels.service';

@Component({
  selector: 'app-partiels',
  templateUrl: './partiels.component.html',
  styleUrls: ['./partiels.component.css']
})
export class PartielsComponent implements OnInit {

  partielCourant: Partiel = this.partielsService.partielCourant;

  constructor(private partielsService: PartielsService) { }



  ngOnInit(): void {
  }

}
