// app.component.ts
import { Component } from '@angular/core';

interface Message {
  username: string;
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = 'username';
  message = "";
  messages: Message[] = []; // Initialize messages array as an array of Message interface objects

  submit(): void {
    
  }
}
