import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-son-of-main',
  templateUrl: './son-of-main.component.html',
  styleUrls: ['./son-of-main.component.scss']
})
export class SonOfMainComponent implements OnInit {
  @Input() inputText: string="";
  @Output() emitMessage = new EventEmitter<string>();
  message: string = "";
  sendMessage(){
    this.emitMessage.emit(this.message);

  }
  constructor() { }

  ngOnInit(): void {
  }

}
