import { Component, OnInit } from '@angular/core';
import { Mascota } from "../../models/mascota.interface";
import { ServicioService } from '../servicio.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  imagenSeleccionada:File=null;
  image=null;
  imagen:string="";
  onFileSelected(event){
    this.imagenSeleccionada=<File>event.target.files[0];
  }
  getBase64(file){
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      console.log(reader.result);
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };
 }
  mascota:Mascota={
    raza:"",
    nombre:"",
    especie:"",
    edad:"",
    sexo:"",
    enfermedades:"",
    descripcion:"",
    procedencia:"",
    imagen:"No hay imagen",
    estado:true
  }
  especies:string[]=["gato","perro"];
  sexos:string[]=["hembra","macho"];
  formulario:FormGroup;
  submitted=false;
  constructor(private servicio:ServicioService,private formBuilder: FormBuilder) {
    
   }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      nombre:['',Validators.required],
      especie:['',Validators.required],
      raza:['',Validators.required],
      edad:['',Validators.required],
      sexo:['',Validators.required],
      origen:['',Validators.required],
      enfermedades:['',Validators.required],
      descripcion:['',Validators.required]
    });

  }
  get f(){
    return this.formulario.controls;
  }
  onSubmit() {
    this.submitted = true;

    if (this.formulario.invalid) {
        return;
    }

    alert('HECHO!')
}
  yesAction(){
    this.servicio.add(this.mascota).subscribe(
      (data)=>{console.log("se creo exitosamente ",data);},
      (error)=>{console.log("error",error);},
      ()=>{}
    );
    //[disabled]="!formulario.valid"
  }
  noAction(){


  }
}
