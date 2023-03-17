import { Component } from '@angular/core';

@Component({
  selector: 'app-assignment-data-binding',
  templateUrl: './assignment-data-binding.component.html',
  styleUrls: ['./assignment-data-binding.component.css']
})
export class AssignmentDataBindingComponent {
  username: string = "";
  canClear: boolean = false;

  onType(event: Event): void {
    this.username = (<HTMLInputElement>event.target).value;
    !!this.username ? this.canClear = true : this.canClear = false; // is username be null or "" or undefined
  }
}
