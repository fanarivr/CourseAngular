import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input()
  public CharacterLis: Character[] = [{
    name: 'Trunk',
    power: 10

  }];

@Output()
  public onDelete:EventEmitter<string>=new EventEmitter();
// onDelete=Index value:number
  //delete character by index number and emit event to parent component for refreshing the list of characters


  OnDeleteCharacter(index?:string):void{
   // console.log(this.CharacterLis[index]);

   if (!index) return;

   this.onDelete.emit(index)//emite evento
   console.log(index)
  }
}
