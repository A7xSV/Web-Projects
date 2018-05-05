import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  // To make it listenable from outside
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{blueprintName: string, blueprintContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput') serverContentInput: ElementRef; // ElementRef is an Angular type, thus imported
  // @ViewChild(CockpitComponent) to get access to the first occurance of the component

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    // Local reference (#serverNameInput) used in the template provides the element with all its properties
    // console.log(nameInput.value);
    // console.log(this.serverContentInput);
    // console.log(this.serverContentInput.nativeElement);
    this.serverCreated.emit({
      serverName: nameInput.value, 
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    // this.blueprintCreated.emit({blueprintName: this.newServerName, blueprintContent: this.newServerContent});
    this.blueprintCreated.emit({
      blueprintName: nameInput.value, 
      blueprintContent: this.serverContentInput.nativeElement.value
    });
  }
}
