import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `El héroe ${this.name} tiene ${this.age} años.`;
  }

  changeName(): void {
    this.name = 'Thor';
  }

  changeAge(): void {
    this.age = 40;
  }
}
