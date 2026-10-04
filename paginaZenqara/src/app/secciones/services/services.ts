import { RouterLink } from '@angular/router';
import { Component, output } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [RouterLink],
  templateUrl: './services.html',
  styleUrl: './services.css',
})
export class Services {

   readonly layoutChange = output<void>();
  private readonly openServices = new Set<number>();
  isServiceOpen(service: number): boolean {
    return this.openServices.has(service);
  }
  toggleService(service: number): void {
    if (this.openServices.has(service)) this.openServices.delete(service);
    else this.openServices.add(service);
    this.layoutChange.emit();
  }
  onPanelTransition(event: TransitionEvent): void {
    if (
      event.target === event.currentTarget &&
      event.propertyName === "grid-template-rows"
    )
      this.layoutChange.emit();
  }

}
