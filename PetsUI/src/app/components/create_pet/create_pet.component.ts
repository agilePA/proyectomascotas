import { Component, ViewChild } from "@angular/core";
import { Validators } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
import { DynamicFormComponent } from "../dynamic-form/dynamic-form.component";
import { PetsService } from '../../services/pets.service';
import { Router } from "@angular/router";

@Component({
  selector: "app-create-pet",
  templateUrl: "./create_pet.component.html",
  styleUrls: ["./create_pet.component.css"]
})

export class CreatePetComponent {
  
  constructor(private petServ: PetsService, private router: Router){};

  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  
  regConfig: FieldConfig[] = [
    {
      label: "Nombre",
      name: "nombre",
      inputType: "text",
      type: "input",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Nombre es requerido"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Nombre solo debe contener texto"
        }
      ]
    },
    {
      type: "input",
      label: "Raza",
      inputType: "text",
      name: "raza",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Raza es requerido"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Raza solo debe contener texto"
        }
      ]
    },
    {
      type: "input",
      label: "Especie",
      inputType: "text",
      name: "especie",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Especie es requerido"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Especie solo debe contener texto"
        }
      ]
    },
    {
      type: "input",
      label: "Edad",
      inputType: "text",
      name: "edad",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Edad es requerido"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^(0|[1-9][0-9]*)$"),
          message: "Edad solo debe contener numeros"
        }
      ]
    },
    {
      type: "select",
      label: "Sexo",
      name: "sexo",
      //value: "UK",
      options: ["MACHO", "HEMBRA"],
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Sexo es requerido"
        },
      ]
    },
    {
      type: "input",
      label: "Procedencia",
      inputType: "text",
      name: "procedencia",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Procedencia es requerido"
        },
      ]
    },
    {
      type: "input",
      label: "Enfermedades",
      inputType: "text",
      name: "enfermedades",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Enfermedades es requerido"
        },
      ]
    },
    {
      type: "input",
      label: "Descripcion",
      inputType: "text",
      name: "descripcion",
    },
    {
      type: "button",
      label: "Save",
    }
  ];

  submit(value: any) {
    //console.log((this.form.form.value);
    this.petServ.add(this.form.form.value).subscribe();
    //location.reload();
  }
}
