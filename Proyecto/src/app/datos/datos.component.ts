import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  derechos: String = " © Yelsin Cruz";
  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
