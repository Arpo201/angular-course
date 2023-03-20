import { 
  Component,
  EventEmitter,
  Output
} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() intervalFired: EventEmitter<number> = new EventEmitter<number>();
  interval;
  lastNumber = 0;

  constructor() {

  }

  onStart(): void {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }

  onStop(): void {
    clearInterval(this.interval);
  }

}
