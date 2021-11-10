import { Component, OnInit } from '@angular/core';

import{FormBuilder,FormGroup, Validators} from '@angular/forms';

import{ ListaNoticias  }from'../interfaces/noticias';
import{ Noticias  }from'../interfaces/noticias';

@Component({
  selector: 'app-servicioalcliente',
  templateUrl: './servicioalcliente.component.html',
  styleUrls: ['./servicioalcliente.component.scss']
})
export class ServicioalclienteComponent implements OnInit {



  activarMsg:boolean=false;

  formulario:FormGroup;
  nombre:any;
  apellido:any;
  ciudad:any;
  pais:any;
  hombre:any;
  mujer:any;
  otro:any;
  lista:Array<any>= ListaNoticias;

  constructor(public Form: FormBuilder) {
    this.formulario=this.Form.group({
      nombre: ["", [Validators.required,Validators.maxLength(50)]],
      apellido: ["", [Validators.required,Validators.maxLength(50)]],
      "Pais": ["", Validators.required],
      ciudad: ["", [Validators.required,Validators.maxLength(15)]],
    })
  }

  ngOnInit(): void {
  }

  agregar(){
    let radio:string;
    if(this.hombre.value=="femenino"){
      radio="mujer"
    }else if(this.hombre.value=="masculino"){
      radio="hombre"
    }else{
      radio="otro"
    }
    let persona:Noticias ={id:5,nombre:this.nombre.value, apellido:this.apellido.value, ciudad:this.ciudad.value,pais:this.pais.value,genero:radio}
    ListaNoticias.push(persona);
    console.log(persona.nombre,persona.pais,persona.apellido,persona.ciudad,persona.genero);
  }


  validacion(){
    console.log(this.formulario.get("nombre")?.value);

    this.activarMsg=true;
  }

}
