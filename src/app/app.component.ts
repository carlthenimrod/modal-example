import { Component } from '@angular/core';

import { ModalService } from './modal/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public modalService: ModalService) { }

  title = 'modal';
}
