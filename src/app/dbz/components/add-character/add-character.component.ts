import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  public character: Character = {
    name: '',
    power: 0
  };

  // Este evento se emite al presionar el botón de agregar
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter<Character>();

  public emmitCharacter(): void {

    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.cleanCharacter();

  }

  //limpiar el formulario
  private cleanCharacter(): void {
    this.character = {
      name: '',
      power: 0
    };
  }
}
