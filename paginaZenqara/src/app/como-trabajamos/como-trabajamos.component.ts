import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteHeaderComponent } from '../secciones/site-header/site-header';
import { SiteFooterComponent } from '../secciones/site-footer/site-footer';
import { RevealDirective } from '../shared/reveal/reveal';
@Component({
  selector: 'app-como-trabajamos',
  imports: [
    RouterLink,
    SiteHeaderComponent,
    SiteFooterComponent,
    RevealDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './como-trabajamos.component.html',
  styleUrl: './como-trabajamos.component.scss',
})
export class ComoTrabajamosComponent {
  readonly active = signal(0);
  readonly steps = [
    {
      name: 'Entender',
      title: 'El punto de partida es tu negocio.',
      text: 'Antes de hablar de pantallas, ponemos en común qué ofreces, quién va a usar la web y qué debería poder hacer. Las referencias sirven para explicar una intención, no para sustituir tu identidad.',
      input: 'Tu idea, tus prioridades y los materiales disponibles.',
      result:
        'Una dirección compartida y las necesidades que debemos estudiar.',
      question: '¿Qué debería entender o hacer alguien al entrar en tu web?',
    },
    {
      name: 'Definir',
      title: 'Convertimos la idea en decisiones concretas.',
      text: 'Ordenamos páginas, contenidos y funciones. El alcance permite saber qué entra en el proyecto y qué necesita una valoración adicional. También concretamos el calendario en función del trabajo y los materiales.',
      input: 'Las necesidades detectadas y el contenido que puedes aportar.',
      result: 'Una propuesta con alcance, coste y planificación para valorar.',
      question: '¿Qué es imprescindible para esta primera versión?',
    },
    {
      name: 'Dar forma',
      title: 'La estructura se convierte en una experiencia.',
      text: 'Diseño y desarrollo conectan el mensaje con las acciones. Revisas la organización y la dirección visual; tus comentarios nos ayudan a ajustar el conjunto. Una nueva función se valora antes de incorporarse.',
      input: 'Contenido, referencias y comentarios sobre los avances.',
      result: 'Páginas y funciones construidas según lo acordado.',
      question:
        '¿La web representa tu negocio y guía al visitante con claridad?',
    },
    {
      name: 'Comprobar',
      title: 'Revisamos el recorrido antes de abrirlo al público.',
      text: 'Comprobamos textos, enlaces y las funciones acordadas. Revisamos contigo lo que se entrega y coordinamos la publicación con tu aprobación. Si ya tienes dominio, estudiamos los ajustes para conectarlo.',
      input: 'Tu revisión final y la información necesaria para publicar.',
      result: 'Una entrega revisada y una publicación coordinada.',
      question:
        '¿Están correctos los mensajes y funciona el recorrido previsto?',
    },
    {
      name: 'Continuar',
      title: 'Lo que viene después también se acuerda.',
      text: 'Para las webs que desarrollamos, podemos definir el mantenimiento del alojamiento. Concretamos tareas y atención a incidencias. Las ampliaciones del proyecto se estudian con su propio alcance.',
      input: 'Las necesidades del entorno y las nuevas ideas que aparezcan.',
      result: 'Condiciones de mantenimiento claras y cambios valorados.',
      question: '¿Qué necesita cuidado técnico y qué es una mejora nueva?',
    },
  ];
}
