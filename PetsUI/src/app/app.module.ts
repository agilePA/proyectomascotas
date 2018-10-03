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

import { IndexComponent } from './components/index/index.component';
import { CreateComponent } from './components/create/create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from './components/form-input/form-input.component';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'list_pets', component: IndexComponent},
  { path: 'create_pet', component: CreateComponent},
  //{ path: 'third-page', component: ThirdPageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    IndexComponent,
    CreateComponent,
    FormInputComponent
  ],
  imports: [
    MatTableModule,
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
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    CommonModule,
    MatSelectModule
  ],
  providers: [PetsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
