import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { SiteHeaderComponent } from '../secciones/site-header/site-header';
import { SiteFooterComponent } from '../secciones/site-footer/site-footer';
import { RevealDirective } from '../shared/reveal/reveal';
@Component({
  selector: 'app-hablemos',
  imports: [
    RouterLink,
    SiteHeaderComponent,
    SiteFooterComponent,
    RevealDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './hablemos.component.html',
  styleUrl: './hablemos.component.scss',
})
export class HablemosComponent {
  readonly options = [
    'Creación de páginas web',
    'Desarrollo web',
    'Mantenimiento de servidores web',
    'Necesito orientación',
  ];
  readonly selected = signal(this.initialService());
  readonly business = signal('');
  readonly idea = signal('');
  private initialService(): string {
    const service =
      inject(ActivatedRoute).snapshot.queryParamMap.get('servicio');
    return service && this.options.includes(service)
      ? service
      : 'Necesito orientación';
  }
  composeUrl(): string {
    const body = `Hola, Zenqara:\n\nMe interesa: ${this.selected()}.\n\nMi negocio: ${this.business().trim() || 'Por concretar'}.\n\nLo que quiero conseguir:\n${this.idea().trim() || 'Me gustaría hablar de mi proyecto y definir las necesidades.'}\n\nGracias.`;
    return `https://mail.google.com/mail/?${new URLSearchParams({ view: 'cm', fs: '1', to: 'zenqara.digital@gmail.com', su: 'Consulta sobre mi proyecto web', body })}`;
  }
}
