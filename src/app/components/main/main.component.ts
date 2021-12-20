import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  inputText: string ="";

  sonMessage: string = "";

  keyUp(letra : string){
    this.inputText = letra;
  }

  setMessage(message: string): void{
    this.sonMessage = message;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
