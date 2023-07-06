
import {NgModule} from '@angular/core';
import { HeroComponent } from './hero/hero.component';

import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';


@NgModule({
  exports:[
    HeroComponent,
    ListComponent],

  declarations: [
    HeroComponent,
    ListComponent],

  imports:[CommonModule]

})
export class HeroModule{}// para que se pueda importar y utilizar fuera del muodulo
