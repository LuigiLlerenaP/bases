import { DecimalPipe, UpperCasePipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
  race: string;
  skills: string[];
}

@Component({
  selector: 'app-dragonball',
  imports: [UpperCasePipe, DecimalPipe],
  templateUrl: './dragonball.component.html',
  styleUrl: './dragonball.component.css',
})
export class DragonballComponent {
  name = signal<string>('Dragon Ball Z');
  power = signal<number>(9000);
  race = signal<string>('Saiyan');
  skills = signal<string[]>([]);

  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Son Goku',
      power: 9001,
      race: 'Saiyan',
      skills: ['Kamehameha', 'Kaioken', 'Spirit Bomb'],
    },
    {
      id: 2,
      name: 'Vegeta',
      power: 9002,
      race: 'Saiyan',
      skills: ['Final Flash', 'Big Bang Attack', 'Galick Gun'],
    },
    {
      id: 3,
      name: 'Piccolo',
      power: 7000,
      race: 'Namekian',
      skills: ['Special Beam Cannon', 'Regeneration', 'Hellzone Grenade'],
    },
    {
      id: 4,
      name: 'Gohan',
      power: 8000,
      race: 'Saiyan',
      skills: ['Masenko', 'Super Saiyan', 'Potential Unleashed'],
    },
    {
      id: 5,
      name: 'Krillin',
      power: 6000,
      race: 'Human',
      skills: ['Destructo Disc', 'Solar Flare', 'Kamehameha'],
    },
  ]);

  powerClasses = computed(() => {
    return {
      'power-highlight': true,
    };
  });

  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
      race: this.race(),
      skills: this.skills(),
    };

    this.characters.update((current) => {
      return [
        // -> Regresa el valor actual del array `current` y agrega un nuevo objeto al final
        ...current, //spread operator -> copia todos los elementos del array actual
        newCharacter,
      ];
    });
    this.cleanInputs();
  }

  cleanInputs() {
    this.name.set('');
    this.power.set(0);
    this.race.set('');
    this.skills.set([]);
  }
}
