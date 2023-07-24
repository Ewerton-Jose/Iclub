import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface Cliente{
  id: string;
  user: string;
  senha: string;
}
@Injectable({
  providedIn: 'root'
})
export class ClienteService {
 url = 'http://localhost/teste/api/api/app.php';

  constructor(private http: HttpClient) { }

  getall(){
    return this.http.get<[Cliente]>(this.url);
  }
}
