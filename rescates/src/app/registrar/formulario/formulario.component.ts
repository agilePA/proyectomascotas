import { Component, OnInit } from '@angular/core';
import { Mascota } from "../../models/mascota.interface";
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  mascota:Mascota={
    raza:"",
    nombre:"",
    especie:"",
    edad:"",
    sexo:"",
    enfermedades:"",
    descripcion:"",
    procedencia:"",
    imagen:"",
    estado:true
  }
  especies:string[]=["gato","perro"];
  sexos:string[]=["hembra","macho"];
  
  constructor(private servicio:ServicioService) {
    
   }

  ngOnInit() {
  }
  yesAction(){
    this.servicio.add(this.mascota).subscribe(
      (data)=>{console.log("se creo exitosamente "+ data);},
      (error)=>{console.log("error"+error);},
      ()=>{}
    );
  }
  noAction(){


  }
}
