import { Component, EventEmitter, HostListener } from '@angular/core';

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

  `
})
export class ModalComponent {
  clicked = new EventEmitter<void>();

  @HostListener('click') onClick(): void {
    this.clicked.emit();
  }
}
