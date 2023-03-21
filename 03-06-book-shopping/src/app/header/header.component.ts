import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})

export class HeaderComponent {
    collapsed = true;
    @Output() navigateToCompo = new EventEmitter<string>();
    
    navigate(name: string): void {
        this.navigateToCompo.emit(name);
    }
}