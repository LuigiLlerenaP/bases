import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { JsonPipe } from '@angular/common';

const loadFromLocalStorage = () => {
  const characters = localStorage.getItem('characters'); //Null coalescing

  //Validar que el objeto sea correcto
  return characters ? JSON.parse(characters) : [];
};

@Injectable({ providedIn: 'root' })
export class DragonBallServices {
  constructor() {}

  characters = signal<Character[]>(loadFromLocalStorage());

  addCharacter(character: Character) {
    this.characters.update((listCurrent) => {
      return [...listCurrent, character];
    });
  }

  //Efecto -> dispara cada vez que algo suceda recibe un callback
  //Solo una tarea , y effect solo se usa para guarda en local storage
  saveToLocalStorage = effect(() => {
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  });
}
