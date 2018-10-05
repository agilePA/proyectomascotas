import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './components/index/index.component';
import { CreateComponent } from './components/create/create.component';
import { TestComponent } from './components/test/test.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'list_pets', component: IndexComponent },
      { path: 'create_pet', component: CreateComponent },
      { path: 'test', component: TestComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }