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


  public obterPrevisoes(cidade): Observable<Previsao[]>{ //WHY OBSERVABLE DON't RELOAD WHEN CHANGE?????
    let converte = cidade.replace(" ", "+"); //remove spaces
    console.log(cidade); //here shows parameters pass in the page loading
    return this.httpClient.get<Previsao[]>('http://api.openweathermap.org/data/2.5/forecast?q=' + converte + '&appid=e3e02e318d0e5cbfd0bc372729e4e5c0&units=metric&lang=pt_br&cnt=3');
  }
}
