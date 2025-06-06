import { DecimalPipe, UpperCasePipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Character } from '../../../interfaces/character.interface';

@Component({
  selector: 'dragonball-characters',
  imports: [UpperCasePipe, DecimalPipe],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharactersComponent {
  characters = input.required<Character[]>(); //El mundo exterior me tiene que mandar este valor
  titleCharacters = input.required<string>();
}
