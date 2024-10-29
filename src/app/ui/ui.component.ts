import { Component, OnInit } from '@angular/core';
import { addition } from "../addition/addition";
import { substraction } from '../substraction/substraction';
import { multiplication } from '../multiplication/multiplication';
import { division } from '../division/division';
import { exp } from '../exp/exp';
import { sqrt } from '../sqrt/sqrt';
import { sqr } from '../sqr/sqr';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {
  result = 0;
  operator1: number = 0; // Cambiado a number
  operator2: number = 0; // Cambiado a number
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; // Botones numéricos
  activeField: 'operator1' | 'operator2' = 'operator1'; // Campo activo

  ngOnInit() {}

  // Método para agregar un número al operador correspondiente
  appendNumber(num: number) {
    if (this.activeField === 'operator1') {
      this.operator1 = this.operator1 * 10 + num; // Agrega el número al primer operador
    } else {
      this.operator2 = this.operator2 * 10 + num; // Agrega el número al segundo operador
    }
  }

  addition() {
    this.result = addition(this.operator1, this.operator2);
  }

  substraction(){
    this.result = substraction(this.operator1, this.operator2);
  }

  multiplication(){
    this.result = multiplication(this.operator1, this.operator2);
  }

  division(){
    this.result = division(this.operator1, this.operator2);
  }

  exponente(){
    this.result = exp(this.operator1, this.operator2);
  }

  raiz(){
    this.result = sqrt(this.operator1);
  }

  exponente2(){
    this.result = sqr(this.operator1);
  }

  // Métodos para establecer el campo activo
  setActiveField(field: 'operator1' | 'operator2') {
    this.activeField = field;
  }
}
