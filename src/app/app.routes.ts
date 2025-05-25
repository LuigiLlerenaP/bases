import { Routes } from '@angular/router';
import { CounterComponent } from './Page/Counter/Counter/Counter-page.component';
import { HeroPageComponent } from './Page/Hero/hero-page/hero-page.component';
import { DragonballComponent } from './Page/Dragonball/dragonball/dragonball.component';

export const routes: Routes = [
  { path: 'counter', component: CounterComponent },
  { path: 'hero', component: HeroPageComponent },
  { path: 'dragonball', component: DragonballComponent },
  { path: '**', redirectTo: '' },
];
