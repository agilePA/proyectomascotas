import { Component, OnInit } from '@angular/core';
import { PetsService } from '../../services/pets.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  
  servicios: PetsService;
  displayedColumns: string[] = ['id', 'nombre', 'raza', 'edad', 'procedencia', 'sexo', 'especie', 'estado', 'created_at'];
  public dataSource:any;

  constructor(public serv: PetsService) { }

  ngOnInit() {
    this.serv.getAll().subscribe(data => {
      this.dataSource = data;
      console.log(data);
  	});
  }

}
