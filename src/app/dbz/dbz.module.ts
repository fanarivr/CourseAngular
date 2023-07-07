import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/addCharacter/addCharacter.component';



@NgModule({
  declarations:[
    MainPageComponent,
    ListComponent,
    AddCharacterComponent],//no se exportan porque estan dentro de la misma carpetas

  exports:[MainPageComponent],// CLASE DECLARADA E IMPORTADA

  imports: [
    CommonModule
  ]
})
export class DbzModule { }// Clase a ser exportada para acceder a ella desde cualquier lugar
