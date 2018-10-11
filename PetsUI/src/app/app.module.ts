import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { PetsService } from './services/pets.service';

import { 
  MatTableModule,
  MatButtonModule, 
  MatMenuModule, 
  MatIconModule, 
  MatToolbarModule, 
  MatSidenavModule, 
  MatListModule, 
  MatCardModule, 
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { IndexComponent } from './components/index/index.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from './components/form-input/form-input.component';
import { HttpClientModule } from '@angular/common/http';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';
import { MaterialModule } from "./material.module";

import { InputComponent } from "./components/input/input.component";
import { ButtonComponent } from "./components/button/button.component";
import { SelectComponent } from "./components/select/select.component";
import { DynamicFieldDirective } from "./components/dynamic-field/dynamic-field.directive";
import { DynamicFormComponent } from "./components/dynamic-form/dynamic-form.component";
import { CreatePetComponent } from "./components/create_pet/create_pet.component";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    IndexComponent,
    FormInputComponent,
    FieldErrorDisplayComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    CreatePetComponent
  ],
  imports: [
    MatTableModule,
    MaterialModule,
    BrowserModule,
    LayoutModule,
    BrowserAnimationsModule,
	  MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    MatSelectModule
  ],
  providers: [PetsService],
  bootstrap: [AppComponent],
  entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
  ]
})
export class AppModule { }
