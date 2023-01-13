import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ejercicio01',
  templateUrl: './ejercicio01.component.html',
  styleUrls: ['./ejercicio01.component.css']
})
export class Ejercicio01Component {
    valor : any;
    fileJson =[
      {
        "apellido":"Arcila",
        "casado":false,
        "direccion":"calle 35 # 43 28",
        "nombre":"Diego",
        "telefono":1234567
      },
      {
        "apellido":"Bueno",
        "casado":false,
        "direccion":"CR 16A # 53 28",
        "nombre":"kevin",
        "telefono":1234567
      },
      {
        "apellido":"Palomino",
        "casado":false,
        "direccion":"CR 25 # 52 33",
        "nombre":"Natalia",
        "telefono":1234567890
      },
    ]
}
