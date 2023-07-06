import { Component } from '@angular/core';
// clases y componentes tienen el control absoluto
@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'iroman';
  public age: number = 45;

  get capitalizedName(): string//propiedades: caracteristicas del elemento
  {
    return this.name.toUpperCase()
  }

  getHeroDescription(): string {//metodo: actividades que se van hacer haciendo uso de las propiedades
    return `${this.name}-${this.age}`//Se invocan con parentesis
  }
  changeHero(): void {
    this.name = 'spiderman'
  }
  changeAge(): void {
    this.age = 24

  }

  resetForm():void{
    this.name='iroman';
    this.age=45;
  }
}
