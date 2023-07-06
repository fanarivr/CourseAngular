import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <p><strong>Contador: </strong> {{counter}}</p>
  <button class="btn btn-primary mx-2" (click)="increaseby(+1)">Sumar +1</button>
  <button class="btn btn-primary mx-2" (click)="reset()">Reset</button>
  <button class="btn btn-primary mx-2" (click)="increaseby(-1)">Restar -1</button>

  `
})

export class CounterComponent {
  constructor() { }
  public title: string = 'Mi Primera clase';
  public counter: number = 10;

  increaseby(value: number): void {//void no regresa nada
    this.counter += value;
  }
  reset() {
    this.counter = 10
  }
}
