import { Component, OnInit } from '@angular/core';
import { addition } from "../addition/addition";
import { substraction } from '../substraction/substraction';
import { multiplication } from '../multiplication/multiplication';
import { division } from '../division/division';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.css']
})
export class UiComponent implements OnInit {
  result = 0;
  operator1: string = ''; // Cambiado a string para permitir múltiples dígitos
  operator2: string = ''; // Cambiado a string para permitir múltiples dígitos
  numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]; // Botones numéricos
  activeField: 'operator1' | 'operator2' = 'operator1'; // Campo activo

  ngOnInit() {}

  // Método para agregar un número al operador correspondiente
  appendNumber(num: number) {
    if (this.activeField === 'operator1') {
      this.operator1 += num.toString(); // Agrega el número al primer operador
    } else {
      this.operator2 += num.toString(); // Agrega el número al segundo operador
    }
  }

  addition() {
    const num1 = Number(this.operator1);
    const num2 = Number(this.operator2);
    this.result = addition(num1, num2);
  }

  substraction(){
    const num1 = Number(this.operator1);
    const num2 = Number(this.operator2);
    this.result = substraction(num1, num2);
  }

  multiplication(){
    const num1 = Number(this.operator1);
    const num2 = Number(this.operator2);
    this.result = multiplication(num1, num2);
  }

  division(){
    const num1 = Number(this.operator1);
    const num2 = Number(this.operator2);
    this.result = division(num1, num2);
  }
  // Métodos para establecer el campo activo
  setActiveField(field: 'operator1' | 'operator2') {
    this.activeField = field;
  }
}
