import {
  ChangeDetectionStrategy,
  Component,
  output,
  signal,
} from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-add-character',
  imports: [],
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddCharacterComponent {
  name = signal<string>('');
  power = signal<number>(0);
  race = signal<string>('');
  skills = signal<string[]>([]);

  newCharacter = output<Character>();

  addCharacter() {
    if (!this.name() || !this.power() || !this.race() || !this.skills()) {
      console.log('Error: Ingrese los valores');
      return;
    }

    const newCharacter: Character = {
      id: Math.floor(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
      race: this.race(),
      skills: this.skills(),
    };
    this.newCharacter.emit(newCharacter);
    this.cleanInputs();
  }

  cleanInputs() {
    this.name.set('');
    this.power.set(0);
    this.race.set('');
    this.skills.set([]);
  }
}
