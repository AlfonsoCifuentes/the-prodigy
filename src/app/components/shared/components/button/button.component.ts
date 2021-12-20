import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
//import { EventEmitter } from 'stream'; // He tenido que quitar esto que me lo hacía solo y meterlo en el
//import desde angular_core

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
public literal: string = "Open"
@Input() public text?:string;
@Output() emitInfo = new EventEmitter<string>(); //Me daba fallo al importar automáticamente desde "stream"
  constructor() { }

  ngOnInit(): void {
  }

  public click(){
    alert("Aún no está implementada la función de abrir la imagen en grande");
  }

}
