import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';

@Injectable({// decorador
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [
    {
      id:uuid(),
      name:'Krillin',
      power:1000
    },
    {
      id:uuid(),
      name:'Gamora',
      power:9500,
    },
    {
      id:uuid(),
      name:'Goku',
      power:7800,
    }
  ];

 addCharacter(character:Character):void{
    const newCharacter:Character={id:uuid(),...character}
    this.characters.push(newCharacter);

  }
   // const newCharacter:Character={
    //   id:uuid(),
    //   name:character.name,
    //   power:character.power
    // }

  // onDeleteCharacter(index:number){//remover posición
  //   this.characters.splice(index,1);
  // }


  deleteCharacterById(id:string){//remover posición
  this.characters=this.characters.filter(Character=>Character.id !== id)
  console.log(this.characters)
  }
}
