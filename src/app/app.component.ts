// app.component.ts
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Pusher from 'pusher-js';

interface Message {
	username: string;
	message: string;
}

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	username = 'username';
	message = "";
	messages: Message[] = [];

	constructor(private http: HttpClient) {

	}

	ngOnInit(): void {
		Pusher.logToConsole = true;

		const pusher = new Pusher('1bc4ab922c74a0d8d725', {
			cluster: 'eu'
		});

		const channel = pusher.subscribe('chat');
		channel.bind('message', (data: Message) => {
			this.messages.push(data)
		});
	}
	submit(): void {
		this.http.post("http://locahost:8000/api/messages", {
			username: this.username,
			message: this.message
		}).subscribe(() => this.message = '');
	}
}
