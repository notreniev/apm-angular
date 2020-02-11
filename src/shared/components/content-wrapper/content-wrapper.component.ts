import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/shared/models/card.model';

@Component({
  selector: 'apm-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.css']
})
export class ContentWrapperComponent implements OnInit {

  cardRendimentosMensal: Card = { name: 'Rendimentos (Mensal)', value: 'R$ 40.000', type: 'primary', icon: 'fa-calendar' }
  cardRendimentosAnual: Card = { name: 'Rendimentos (Anual)', value: 'R$ 215.000', type: 'success', icon: 'fa-dollar-sign' }
  cardTasks: Card = { name: 'Tasks', type: 'info', icon: 'fa-clipboard-list', percentage: 20 }

  constructor() { }

  ngOnInit(): void {
  }

}
