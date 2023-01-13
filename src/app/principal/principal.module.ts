import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ejercicio01Component } from './ejercicio01/ejercicio01.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Ejercicio01Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    Ejercicio01Component
  ]
})
export class PrincipalModule {

 }
