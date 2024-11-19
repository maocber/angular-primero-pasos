import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid'
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name:'krillin',
      power:100
    },
    {
      id: uuid(),
      name:'goku',
      power:9000
    },
    {
      id: uuid(),
      name:'vegueta',
      power:7000
    },
    {
      id: uuid(),
      name:'picoro',
      power:6000
    },
  ];

  addCharacter(character: Character): void {
    character.id = uuid();
    this.characters.push(character);
  }

  // onDeleteCharacter(index: number): void {
  //   this.characters.splice(index, 1);
  // }

  deleteCharacterById(id: string){
    this.characters = this.characters.filter(character => character.id !== id);
  }
}
