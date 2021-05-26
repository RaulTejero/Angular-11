import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {
  valueFormTemplate: any;
  // tipoModel es tipo formControl importar en el app.module ReactiveFormsModule
  formTypeModel: FormGroup;
  valueFormModel: any;

  constructor() {

    this.valueFormTemplate = {};
    this.valueFormModel = {};

    this.formTypeModel = new FormGroup({

      /**
       * clases y propiedades
       * valid --invalid
       * pritine -- dirty
       * untouched --touche
       */

      //recibe un obj y creas los campòs aqui 
      // FormControl("parametro por defecto",[validaciones])
      nombre: new FormControl("",
        [Validators.required, Validators.minLength(3), Validators.maxLength(10)
        ]),
      dni: new FormControl("", [this.dniValidator]),
      dia: new FormControl(""),
      edad: new FormControl("", [this.edadValidator/**valiator personalizado en una function */]),
      password: new FormControl(""),
      repitePassword: new FormControl(""),
      //pattern = expresion regular "regexlib.com"
      email: new FormControl("", [Validators.pattern(/^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i)])
      //los validadores van creando clases para aplicar estilos y aunque ya tiene clases al inicio como si han escrito ...ng-dirty/pristine
    })

  }

  ngOnInit(): void {
  }
  onSubmit(e) {
    this.valueFormTemplate = e;
  }
  onSubmit2() {
    this.valueFormModel = this.formTypeModel.value;
  }

  // validador personalizado, tiene que retornar null par validar
  edadValidator(pEdadFormControl) {
    const edad = pEdadFormControl.value;
    const min = 20;
    const max = 50;
    if (edad <= 50 && edad >= 20) {
      // null validacion ok 
      return null
    } else {
      return { edadValidator: { max: max, min: min } }
    }
  }
  dniValidator(pDniFormControl) {
    const dni = pDniFormControl.value;
    const letras = "TRWAGMYFPDXBNJZSQVHLCKET"
    if (/^\d{8}[a-zA-Z]$/.test(dni)) {
      const numero = dni.substr(0, dni.length - 1);
      const letra = dni.charAt(dni.length - 1);
      console.log(numero, letra);

      const calculo = numero % 23;

      const letraSelect = letras.charAt(calculo);
      if (letra.toUpperCase() === letraSelect) {

        return null
      } else {
        return { dniValidator: "no coincide" }
      }
    } else {
      return { dniValidator: "no coincide" }
    }
  }

}
