import { Component, Input, OnInit } from '@angular/core';
import { Iimg } from '../../shared/sharedModel/ishared';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent implements OnInit {
@Input() logo!: Iimg;
  constructor() { }

  ngOnInit(): void {
  }

}
