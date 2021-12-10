import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MonturasService {
  [x: string]: any;
  constructor(private httpClient: HttpClient) { }
  public recuperarMonturas(): Observable<any> {
    return this.httpClient.get<any>('https://my-json-server.typicode.com/DarknessYamii/jsonMontures/monturas');
    }
}
