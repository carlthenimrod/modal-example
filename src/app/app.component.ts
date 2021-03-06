import { Component } from '@angular/core';

import { ModalService } from './modal/modal.service';
import { ExampleComponent } from './example/example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private modalService: ModalService) { }

  title = 'modal';

  onClick(): void {
    this.modalService.open(ExampleComponent, { hello: 'world' });

    this.modalService.closed$
      .subscribe(data => console.log(data));
  }
}
