import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo-band',
  templateUrl: './logo-band.component.html',
  styleUrls: ['./logo-band.component.scss']
})
export class LogoBandComponent implements OnInit {
@Input() title!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
