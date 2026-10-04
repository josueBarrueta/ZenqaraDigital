import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-maintenance',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: "display: contents" },
  imports: [],
  templateUrl: './maintenance.html',
  styleUrl: './maintenance.css',
})
export class Maintenance {

}
