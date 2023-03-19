import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment-directive',
  templateUrl: './assignment-directive.component.html',
  styles: [`
    .moreThan5 {
      color: white;
    }
  `]
})
export class AssignmentDirectiveComponent {
  isDisplay: boolean = false;
  timestampsArray: Array<object> = [];
  
  log(): void {
    this.isDisplay = !this.isDisplay;
    this.timestampsArray.push(new Date());
    console.log(this.timestampsArray)
  }
}
