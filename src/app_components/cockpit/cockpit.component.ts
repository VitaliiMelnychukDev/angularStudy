import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{
    serverName: string,
    serverContent: string
  }>();
  @Output() blueprintCreated = new EventEmitter<{
    blueprintName: string,
    blueprintContent: string
  }>();
  //newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(serverNameElement) {
    this.serverCreated.emit({
      serverName: serverNameElement.value,
      serverContent: this.newServerContent
    });
  }

  onAddBlueprint(serverNameElement) {
    this.blueprintCreated.emit({
      blueprintName: serverNameElement.value,
      blueprintContent: this.newServerContent
    });
  }

}
