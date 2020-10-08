import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector } from '@angular/core';

import { ModalComponent } from './modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  constructor(
    private appRef: ApplicationRef,
    private injector: Injector,
    private resolver: ComponentFactoryResolver
  ) { }
  componentRef: ComponentRef<ModalComponent>;

  open(): void {
    const factory = this.resolver.resolveComponentFactory(ModalComponent);

    this.componentRef = factory.create(this.injector);

    this.componentRef.instance.clicked
      .subscribe(_ => this.close());

    const view = this.componentRef.hostView;
    const node = (view as EmbeddedViewRef<any>).rootNodes[0];

    this.appRef.attachView(view);
    document.body.append(node);
  }

  close(): void {
    this.componentRef.destroy();

    const view = this.componentRef.hostView;
    this.appRef.detachView(view);
  }
}
