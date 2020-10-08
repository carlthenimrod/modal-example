import { Component } from '@angular/core';

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
export class ExampleComponent { }
