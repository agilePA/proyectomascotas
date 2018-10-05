import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  imports: [MatButtonModule , MatSelectModule , MatCardModule , MatInputModule , MatCheckboxModule, MatToolbarModule],
  exports: [MatButtonModule , MatSelectModule ,MatCardModule ,MatInputModule , MatCheckboxModule ,MatToolbarModule],
  declarations: []
})
export class MaterialModule { }
