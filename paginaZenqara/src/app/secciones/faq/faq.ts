import {
  ChangeDetectionStrategy,
  Component,
  output,
} from '@angular/core';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './faq.html',
  styleUrl: './faq.css',
})
export class Faq {
  readonly layoutChange = output<void>();

  onTransition(event: TransitionEvent): void {
    if (
      event.target === event.currentTarget &&
      event.propertyName === 'height'
    ) {
      this.layoutChange.emit();
    }
  }
}