import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  QueryList,
  ViewChild,
  ViewChildren,
  inject,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { SiteHeaderComponent } from '../secciones/site-header/site-header';
import { SiteFooterComponent } from '../secciones/site-footer/site-footer';
import { RevealDirective } from '../shared/reveal/reveal';
@Component({
  selector: 'app-servicios',
  imports: [
    RouterLink,
    SiteHeaderComponent,
    SiteFooterComponent,
    RevealDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.scss',
})
export class ServiciosComponent implements AfterViewInit, OnDestroy {
  readonly selected = signal(0);
  readonly services = [
    {
      label: 'Presentar tu negocio',
      title: 'Que se entienda quién eres. Y por qué contactarte.',
      name: 'Creación de páginas web',
      description:
        'Una visita debería encontrar pronto qué ofreces, a quién te diriges y cómo dar el siguiente paso. Organizamos la información y diseñamos una presencia coherente con tu marca.',
      points: [
        'Jerarquía de mensajes: lo esencial primero, el detalle después.',
        'Navegación con una función clara para cada página.',
        'Diseño adaptable para consultar y contactar desde el móvil.',
      ],
      scope:
        'Acordamos las páginas, los materiales y las revisiones de diseño antes de construir.',
      visual: 'Tu marca',
      tags: ['Mensaje', 'Diseño', 'Contacto'],
    },
    {
      label: 'Resolver una necesidad',
      title: 'Una función útil empieza por una pregunta concreta.',
      name: 'Desarrollo web',
      description:
        '¿Qué necesita hacer una persona en tu web? Partimos de ese recorrido para definir las funciones y los datos necesarios, sin añadir complejidad que no aporte al proyecto.',
      points: [
        'Consultas: qué información pedir y cómo recibirla.',
        'Gestión: qué datos necesita consultar o actualizar tu equipo.',
        'Conexiones: qué herramientas deben intercambiar información.',
      ],
      scope:
        'Cada función y cada integración se valoran dentro del alcance; no todas las webs necesitan las mismas.',
      visual: 'Tu herramienta',
      tags: ['Acción', 'Datos', 'Resultado'],
    },
    {
      label: 'Cuidar lo publicado',
      title: 'El alojamiento también forma parte de la experiencia.',
      name: 'Mantenimiento de servidores web',
      description:
        'La página depende de un entorno técnico. Para las webs que desarrollamos, definimos un servicio de mantenimiento del alojamiento con tareas y condiciones concretas.',
      points: [
        'Revisión de las necesidades técnicas del servidor.',
        'Planificación de actualizaciones del entorno acordadas.',
        'Atención a incidencias y seguimiento dentro del servicio definido.',
      ],
      scope:
        'Concretamos qué se mantiene y cómo se atienden las incidencias. Las nuevas funciones se valoran aparte.',
      visual: 'Tu entorno',
      tags: ['Revisión', 'Cambios', 'Continuidad'],
    },
  ];
  @ViewChild('explorer') private explorer!: ElementRef<HTMLElement>;
  @ViewChildren('serviceProgress') private progressBars!: QueryList<
    ElementRef<HTMLElement>
  >;
  readonly durations = [8, 14, 8];
  readonly paused = signal(false);
  private readonly zone = inject(NgZone);
  private media?: MediaQueryList;
  private observer?: IntersectionObserver;
  private frame?: number;
  private elapsed = 0;
  private lastTime = 0;
  private visible = false;

  selectService(index: number): void {
    this.selected.set(index);
    this.elapsed = 0;
    this.paintProgress();
    this.syncPlayback();
  }
  togglePlayback(): void {
    this.paused.update((value) => !value);
    this.syncPlayback();
  }
  private paintProgress(): void {
    this.progressBars?.forEach((bar, index) => {
      const progress =
        index === this.selected() ? this.elapsed / this.durations[index] : 0;
      bar.nativeElement.style.transform = `scaleX(${progress})`;
    });
  }
  private readonly tick = (now: number): void => {
    this.elapsed += (now - this.lastTime) / 1000;
    this.lastTime = now;
    if (this.elapsed >= this.durations[this.selected()]) {
      this.elapsed -= this.durations[this.selected()];
      this.zone.run(() =>
        this.selected.update((index) => (index + 1) % this.services.length),
      );
    }
    this.paintProgress();
    this.frame = requestAnimationFrame(this.tick);
  };
  private syncPlayback(): void {
    if (this.frame !== undefined) cancelAnimationFrame(this.frame);
    this.frame = undefined;
    if (
      !this.visible ||
      document.hidden ||
      this.paused() ||
      this.media?.matches
    )
      return;
    this.zone.runOutsideAngular(() => {
      this.lastTime = performance.now();
      this.frame = requestAnimationFrame(this.tick);
    });
  }
  private readonly visibilityChange = (): void => this.syncPlayback();
  private readonly motionChange = (): void => this.syncPlayback();
  ngAfterViewInit(): void {
    this.media = window.matchMedia('(prefers-reduced-motion: reduce)');
    this.media.addEventListener('change', this.motionChange);
    document.addEventListener('visibilitychange', this.visibilityChange);
    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          this.visible = entries.some((entry) => entry.isIntersecting);
          this.syncPlayback();
        },
        { threshold: 0.15 },
      );
      this.observer.observe(this.explorer.nativeElement);
    });
    this.paintProgress();
  }
  ngOnDestroy(): void {
    if (this.frame !== undefined) cancelAnimationFrame(this.frame);
    this.observer?.disconnect();
    this.media?.removeEventListener('change', this.motionChange);
    document.removeEventListener('visibilitychange', this.visibilityChange);
  }
}
