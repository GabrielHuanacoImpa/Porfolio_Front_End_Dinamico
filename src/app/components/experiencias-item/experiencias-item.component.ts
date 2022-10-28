import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {Experiencia} from '../../Experiencia';
import {EXPERIENCIAS} from '../../mock-experiencias';

import { faTrashCan, faTrash, faTimes, faPen, faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experiencias-item',
  templateUrl: './experiencias-item.component.html',
  styleUrls: ['./experiencias-item.component.css']
})
export class ExperienciasItemComponent implements OnInit {
  @Input() experiencia: Experiencia = EXPERIENCIAS[0];
  @Output() onDeleteExperiencia: EventEmitter<Experiencia> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Experiencia> = new EventEmitter();
  faTimes = faTimes;
  faPen = faPen;
  faPencil = faPencil; 
  faTrash = faTrash;
  faTrashCan=faTrashCan;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(experiencia: Experiencia){
    /*console.log(task);*/
    this.onDeleteExperiencia.emit(experiencia);
  }

  onToggle(experiencia: Experiencia){
    /*console.log(task);*/
    this.onToggleReminder.emit(experiencia);
  }
}

