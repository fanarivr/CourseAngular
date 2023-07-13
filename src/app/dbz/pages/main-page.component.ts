import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';

@Component({//ENRUTAMIENTO
  selector: 'app-dbz-main-page',// COMO SE LLAMA EL COMPONENTE EN LA VISTA QUE SE DESEA
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {//CLASE A EXPORTAR PARA ACCEDER A ELLA

  constructor(private dbzService: DbzService) {

  }

  get characters(): Character[] {
    return [...this.dbzService.characters];
  }

  onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id);
  }

  OnNewCharacter(character: Character):void{
    this.dbzService.addCharacter(character);
  }


}


