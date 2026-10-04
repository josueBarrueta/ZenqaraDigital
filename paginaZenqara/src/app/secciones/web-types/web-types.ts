import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-web-types',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { style: "display: contents" },
  imports: [],
  templateUrl: './web-types.html',
  styleUrl: './web-types.css',
})
export class WebTypes {

}
