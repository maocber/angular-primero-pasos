import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Counter Component : {{ counter }}</p>
    <button (click)="incrementar(5)">+1</button>
    <button (click)="reset()">reset</button>
    <button (click)="decrementar(10)">-1</button>
  `
})

export class CounterComponent {
  private start:number = 50;
  public counter:number=this.start;
  constructor() { }

  incrementar(increment: number) {
    this.counter += increment;
  }

  decrementar(value: number = 1) {
    if (this.counter > 0) {
      this.counter -= value;
    }
  }

  reset() {
    this.counter = this.start;
  }

}
