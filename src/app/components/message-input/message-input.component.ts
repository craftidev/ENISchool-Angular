import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html',
    styleUrls: ['./message-input.component.css'],
})
export class MessageInputComponent {
    @Output() messageSent = new EventEmitter<string>();

    sendMessage(inputElement: HTMLInputElement): void {
        const message: string = inputElement.value;

        if (!message || message.trim().length === 0) {
            throw new Error('Message cannot be empty');
        }

        this.messageSent.emit(message);
        inputElement.value = '';
    }
}
