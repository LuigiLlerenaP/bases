import { UpperCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  signal,
} from '@angular/core';

@Component({
  selector: 'app-hero-page',
  imports: [UpperCasePipe],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroPageComponent {
  name = signal<string>('Iron-Man');
  age = signal<number>(45);

  heroDescription = computed(() => {
    const description = `${this.name()} - ${this.age()}`;
    return description;
  });

  changeHeroName = () => {
    this.name.set('Spider-Man');
  };
  changeHeroAge = () => {
    this.age.set(60);
  };

  resetForm = () => {
    this.name.set('Iron-Man');
    this.age.set(45);
  };
}
