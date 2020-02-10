import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'apm-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.css']
})
export class ContentWrapperComponent implements OnInit {

  titulo: string = 'teste2'

  constructor() { }

  ngOnInit(): void {
  }

}
