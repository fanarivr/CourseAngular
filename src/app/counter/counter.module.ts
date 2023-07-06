
import {NgModule} from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';


@NgModule({
  declarations: [CounterComponent],
  exports:[CounterComponent]

})
export class CounterModule{}// para que se pueda importar y utilizar fuera del muodulo
