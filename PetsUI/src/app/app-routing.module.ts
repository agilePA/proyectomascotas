import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import { CreatePetComponent } from './components/create_pet/create_pet.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'lista_mascotas', component: IndexComponent },
      { path: 'registrar_mascota', component: CreatePetComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }