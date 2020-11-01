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

  cidade: string = 'campo grande'; //this value is passed to service, but observable dont observe
  show: boolean;

  adicionarCidade(cidadeInput) {
    this.cidade = cidadeInput.value;
    console.log(this.cidade);
    if(this.cidade != '')
      this.show = true;
  }

  constructor (private previsoesService: PrevisoesService){
    // if( this.cidade != '') { //don't create the object if after load, so I removed if()
    // previsoesService.obterPrevisoes(this.cidade).subscribe((previsoes) => {


    //   //I don't know why, but this function only at load page, does this have to emmit something to service observable after change??



    //   if( this.cidade != '') { //I'm trying t
    //       console.log(this.previsoes);
    //       console.log(this.cidade);

    //       this.previsoes = previsoes['list'];
    //       console.log(this.previsoes);
    //   }
    // });


    setTimeout(()=>{                           //<<<---using ()=> syntax
      previsoesService.obterPrevisoes(this.cidade).subscribe((previsoes) => {
        //I don't know why, but this function only at load page, does this have to emmit something to service observable after change??
        if( this.cidade != '') { //I'm trying t
            console.log(this.previsoes);
            console.log(this.cidade);

            this.previsoes = previsoes['list'];
            console.log(this.previsoes);
        }
      });
    }, 9000);

  }

}
