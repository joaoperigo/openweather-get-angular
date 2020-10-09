import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Previsao } from './model/previsao';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrevisoesService {

  constructor (private httpClient: HttpClient){

  }


  public obterPrevisoes(): Observable<Previsao[]>{
    return this.httpClient.get<Previsao[]>('http://api.openweathermap.org/data/2.5/forecast?q=itu&appid=ef0b0973b783e0614ac87612ec04344b&units=metric&lang=pt_br&cnt=16');
  }
}
