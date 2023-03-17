import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `
    <h1>Success</h1>
  `,
  styles: [`
  h1{
      color:green;
      background-color: #AAFF5F;
      padding: 10px;
      border: 5px solid green;
  }
`]
})
export class SuccessAlertComponent {

}
