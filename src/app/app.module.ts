import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { HeroModule } from './heroes/heros.module';

@NgModule({
  declarations: [
    AppComponent,
   // HeroComponent,
   // ListComponent// ruta del componente
  ],
  imports: [// cuando se import de otro componete
    BrowserModule,
    CounterModule,
    HeroModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
