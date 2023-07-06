import { Component } from '@angular/core';
//corazón cerebro del component
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Mi Primera clase';
  public counter: number = 10;

  increaseby(value: number): void {//void no regresa nada
    this.counter += value;
  }
  reset() {
    this.counter = 10
  }
}
