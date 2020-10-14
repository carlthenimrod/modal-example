import { AfterViewInit, ChangeDetectorRef, Component,
  ComponentFactoryResolver, EventEmitter, HostListener,
  Type, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-modal',
  styles: [`
    :host {
      background: rgba(0, 0, 0, 0.75);
      display: flex;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }
  `],
  template: `
    <ng-container #vc></ng-container>
  `
})
export class ModalComponent implements AfterViewInit {
  @ViewChild('vc', { read: ViewContainerRef })
  vc: ViewContainerRef;

  componentType: Type<any>;

  clicked = new EventEmitter<void>();

  constructor(
    private ref: ChangeDetectorRef,
    private resolver: ComponentFactoryResolver
  ) { }

  @HostListener('click') onClick(): void {
    this.clicked.emit();
  }

  ngAfterViewInit(): void {
    const factory = this.resolver.resolveComponentFactory(this.componentType);

    this.vc.createComponent(factory);

    this.ref.detectChanges();
  }
}
