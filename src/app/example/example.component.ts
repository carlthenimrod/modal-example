import { Component, Inject, OnInit } from '@angular/core';

import { MODAL_DATA } from '../modal/modal';

@Component({
  selector: 'app-example',
  styles: [`
    :host {
      background-color: #ddd;
      border-radius: 0.5rem;
      margin: auto;
      padding: 5rem 10rem;
    }

    p {
      color: #333;
      font-size: 2rem;
      font-weight: 700;
    }
  `],
  template: `
    <p>This is example...</p>
  `
})
export class ExampleComponent implements OnInit {
  constructor(
    @Inject(MODAL_DATA) private data: any
  ) { }

  ngOnInit(): void {
    console.log(this.data);
  }
}
