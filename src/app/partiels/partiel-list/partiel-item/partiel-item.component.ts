import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Partiel } from '../../partiel.model';

@Component({
  selector: 'app-partiel-item',
  templateUrl: './partiel-item.component.html',
  styleUrls: ['./partiel-item.component.css']
})
export class PartielItemComponent implements OnInit {

  @Input() partiel!: Partiel;
  @Input() id!: number;
  @Output() deletePartielEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  deletePartiel(id: number) {
    this.deletePartielEvent.emit(id);
  }
}
