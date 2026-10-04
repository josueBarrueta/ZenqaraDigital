import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-process',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: 'display: contents;' },
  imports: [],
  templateUrl: './process.html',
  styleUrl: './process.css',
})
export class Process {

}
