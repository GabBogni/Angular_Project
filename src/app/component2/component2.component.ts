import { Component, OnInit } from '@angular/core';
import { lista_filmes } from '../lista_filmes';
import {Filme} from '../filme';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  franquia = "Exterminador do Futuro";
  filmes: Filme[] = lista_filmes;

}
