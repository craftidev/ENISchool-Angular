import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'ChatRoom';

    messages: string[] = [];

    addMessage(newMessage: string): void {
        this.messages.push(newMessage);
    }
}
