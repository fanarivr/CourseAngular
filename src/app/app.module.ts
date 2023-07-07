import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterModule } from './counter/counter.module';
import { HeroModule } from './heroes/heros.module';
import { DbzModule } from './dbz/dbz.module';

@NgModule({
  declarations: [
    AppComponent,
   // HeroComponent,
   // ListComponent// ruta del componente
  ],
  imports: [// cuando se import de otro componetes MODULES
    BrowserModule,
    CounterModule,
    HeroModule,
    DbzModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
