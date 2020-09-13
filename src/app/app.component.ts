import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'junkFiles', content: '*****t6t3467823006f78dshkljj'}];

  onAddServer(eventData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: eventData.serverName,
      content: eventData.serverContent
    });
  }

  onAddBlueprint(eventData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: eventData.serverName,
      content: eventData.serverContent
    });
  }
}
