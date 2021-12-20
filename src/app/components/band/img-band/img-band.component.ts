import { Component, Input, OnInit } from '@angular/core';
import { Iimg } from '../../shared/sharedModel/ishared';

@Component({
  selector: 'app-img-band',
  templateUrl: './img-band.component.html',
  styleUrls: ['./img-band.component.scss']
})
export class ImgBandComponent implements OnInit {
@Input() img!: Iimg;
  constructor() { }

  ngOnInit(): void {
  }

}
