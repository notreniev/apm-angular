import { Component, OnInit, Input } from '@angular/core';
import { Card } from 'src/shared/models/card.model';
import colors from 'src/shared/enums/color-system';

@Component({
  selector: 'apm-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.css']
})
export class ContentWrapperComponent implements OnInit {

  // Header
  cardRendimentosMensal: Card
  cardRendimentosAnual: Card
  cardTasks: Card
  cardPending: Card

  // content
  cardContentLeft: Card
  cardContentRight: Card
  cardProgressAngular: Card
  cardProgressReact: Card
  cardProgressJava: Card
  cardProgressJavaScript: Card
  cardProgressVueJs: Card

  colors = []

  constructor() { }

  ngOnInit(): void {
    this.cardRendimentosMensal = { name: 'Rendimentos (Mensal)', value: 'R$ 40.000', type: colors.PRIMARY, icon: 'fa-calendar' }
    this.cardRendimentosAnual = { name: 'Rendimentos (Anual)', value: 'R$ 215.000', type: colors.SUCCESS, icon: 'fa-dollar-sign' }
    this.cardTasks = { name: 'Tasks', type: colors.INFO, icon: 'fa-clipboard-list', percentage: 20 }
    this.cardPending = { name: "Requisições pendentes", type: colors.WARNING, value: '18', icon: 'fa-comments' }

    this.cardContentLeft = { name: 'Inscrições' }
    this.cardContentRight = { name: 'Cursos' }

    this.cardProgressAngular = { name: 'Curso de Angular 9', type: colors.SUCCESS, percentage: 70 }
    this.cardProgressReact = { name: 'Curso de React', type: colors.PRIMARY, percentage: 60 }
    this.cardProgressJava = { name: 'Curso de Java', type: colors.DANGER, percentage: 50 }
    this.cardProgressJavaScript = { name: 'Curso de JavaScript', type: colors.INFO, percentage: 80 }
    this.cardProgressVueJs = { name: 'Curso de VueJS', type: colors.WARNING, percentage: 20 }

    this.colors = [
      {
        name: colors.PRIMARY,
        hexa: '#f6c23e'
      },
      {
        name: colors.SUCCESS,
        hexa: '#1cc88a'
      },
      {
        name: colors.INFO,
        hexa: '#36b9cc'
      },
      {
        name: colors.WARNING,
        hexa: '#f6c23e'
      },
      {
        name: colors.DANGER,
        hexa: '#e74a3b'
      },
      {
        name: colors.SECONDARY,
        hexa: '#858796'
      }
    ]

  }

}
