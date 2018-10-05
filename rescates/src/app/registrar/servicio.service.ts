import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Mascota } from "../models/mascota.interface";
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  url: string="https://petsapi20181004121208.azurewebsites.net/api/mascotas";
  constructor(public http: HttpClient) { }
  add(data: Mascota):Observable<Mascota> {
    return this.http.post<Mascota>(this.url, data);
  }

  getAll() {
    return this.http.get<Mascota[]>(this.url);
  }

  getOne(id:number) {
    return this.http.get<Mascota>(this.url + '/' + id);
  }

  edit(id:number, data: Mascota) {
    return this.http.put(this.url + '/' + id, data);
  }

  delete(id:number) {
    return this.http.get(this.url + '/' + id);
}
}
