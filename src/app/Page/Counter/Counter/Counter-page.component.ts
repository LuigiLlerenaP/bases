import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './Counter-page.component.html',
  styleUrl: './Counter-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  public counter: number = 10;

  counterSignal = signal<number>(10);

  public IncreaseByOne = () => {
    this.counter += 1;
    this.counterSignal.update((current) => current + 1);
  };

  public Decrease = () => {
    if (this.counter === 0) {
      return;
    }
    this.counter -= 1;
    this.counterSignal.update((current) => current - 1);
  };

  public Reset = () => {
    this.counter = 10;
    this.counterSignal.set(10);
  };
}
