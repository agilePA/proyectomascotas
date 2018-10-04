import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { PetsService } from '../../services/pets.service';
import { environment } from '../../../environments/environment';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  
  @Input() placeholder: string;
  @Input() type: string;
  @Input() icon: string;
  @Output() changeValue = new EventEmitter();
  value: string;

  validators: FormGroup;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  nameFormControl = new FormControl('', [Validators.required]);

  specieFormControl = new FormControl('', [Validators.required]);

  breedFormControl = new FormControl('', [Validators.required]);

  ageFormControl = new FormControl('', [Validators.required]);

  sexFormControl = new FormControl('', [Validators.required]);
  
  sexs: AnimalSex[] = [
    {type: 'HEMBRA'},
    {type: 'MACHO'},
  ];

  originFormControl = new FormControl('', [Validators.required]);
  diseasesFormControl = new FormControl('', [Validators.required]);
  desFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();

  constructor(public petServ: PetsService, public formBuilder: FormBuilder) { 
  	this.validators = new FormGroup({
      name: new FormControl('', Validators.required),
      species: new FormControl('', Validators.required),
      breed: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      sex: new FormControl('', Validators.required),
      origin: new FormControl('', Validators.required),
      diseases: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {

  }

  submit() {
    var data = {
      nombre : this.nameFormControl.value,
      especie : this.specieFormControl.value,
      raza : this.breedFormControl.value,
      edad : this.ageFormControl.value,
      sexo : this.sexFormControl.value.type,
      origen : this.originFormControl.value,
      enfermedades : this.diseasesFormControl.value,
      descripcion : this.desFormControl.value,
    }
    console.log(data);
    this.petServ.add(data).subscribe();
  }

  valueChanged() {
    this.changeValue.emit(this.value);
  }

}


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

export interface AnimalSex {
  type: string;
}