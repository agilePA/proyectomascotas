import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from './formulario/formulario.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, MaterialModule,FormsModule,ReactiveFormsModule
  ],
  exports:[MaterialModule,FormularioComponent,FormsModule],
  declarations: [FormularioComponent]
})
export class RegistrarModule { }
