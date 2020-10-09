import { Component } from '@angular/core';
import { Previsao } from './model/previsao';
import { PrevisoesService }  from './previsoes.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public previsoes: Previsao[];

  constructor (private previsoesService: PrevisoesService){
    previsoesService.obterPrevisoes().subscribe((previsoes) => {
      this.previsoes = previsoes['list'];
      console.log(this.previsoes);
    });
  }

}
