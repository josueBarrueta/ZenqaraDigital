import {
  ChangeDetectionStrategy,
  Component,
  inject,
  signal,
} from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

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
    const service = inject(ActivatedRoute)
      .snapshot.queryParamMap.get('servicio');

    return service && this.options.includes(service)
      ? service
      : 'Necesito orientación';
  }

  composeUrl(): string {
    const servicio = this.selected();
    const negocio = this.business().trim();
    const idea = this.idea().trim();

    const body = [
      'Hola, equipo de Zenqara Digital:',
      '',
      'Me gustaría hablar con vosotros sobre mi proyecto.',
      '',
      '────────────────────────',
      'MI PROYECTO WEB',
      '────────────────────────',
      '',
      'Servicio que me interesa',
      servicio,
      '',
      'Sobre mi negocio',
      negocio ||
        'Me gustaría contaros más en una primera conversación.',
      '',
      'Lo que quiero conseguir',
      idea ||
        'Necesito orientación para definir mi próxima web.',
      '',
      '────────────────────────',
      '',
      '¿Podéis orientarme sobre las posibilidades y los siguientes pasos?',
      '',
      'Muchas gracias por vuestro tiempo.',
      'Un saludo.',
    ].join('\n');

    const params = new URLSearchParams({
      view: 'cm',
      fs: '1',
      to: 'zenqara.digital@gmail.com',
      su: `Nuevo proyecto · ${servicio}`,
      body,
    });

    return `https://mail.google.com/mail/?${params}`;
  }
}