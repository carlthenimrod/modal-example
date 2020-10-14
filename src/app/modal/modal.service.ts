import { ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Injectable, Injector, Type } from '@angular/core';

import { ModalComponent } from './modal.component';
import { MODAL_DATA } from './modal';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private closedSubject = new Subject<any>();
  closed$ = this.closedSubject.asObservable();

  constructor(
    private appRef: ApplicationRef,
    private injector: Injector,
    private resolver: ComponentFactoryResolver
  ) { }
  componentRef: ComponentRef<ModalComponent>;

  open(componentType: Type<any>, data?: any): void {
    const factory = this.resolver.resolveComponentFactory(ModalComponent);

    const injector = Injector.create({
      providers: [{ provide: MODAL_DATA, useValue: data }],
      parent: this.injector
    });

    this.componentRef = factory.create(injector);

    this.componentRef.instance.componentType = componentType;
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

  onClose(data: any): void {
    this.closedSubject.next(data);
  }
}
