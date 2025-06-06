import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CharactersComponent } from '../../components/Dragonball01/characters/characters.component';
import { AddCharacterComponent } from '../../components/Dragonball01/add-character/add-character.component';
import { DragonBallServices } from '../../services/dragonball.services';

@Component({
  selector: 'app-dragonball-super',
  imports: [CharactersComponent, AddCharacterComponent],
  templateUrl: './dragonball-super.component.html',
  styleUrl: './dragonball-super.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DragonballSuperComponent {
  //Inyección de dependencias
  public dragonballService = inject(DragonBallServices); // Pasa la referencia
}
