import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({//ENRUTAMIENTO
  selector: 'app-dbz-main-page',// COMO SE LLAMA EL COMPONENTE EN LA VISTA QUE SE DESEA
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {//CLASE A EXPORTAR PARA ACCEDER A ELLA
  public characters: Character[] = [
    {
      name:'Krillin',
      power:1000
    },
    {
      name:'Gamora',
      power:9500,
    },
    {
      name:'Goku',
      power:7800,
    }
  ]

}


