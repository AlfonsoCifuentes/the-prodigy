import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-description-band',
  templateUrl: './description-band.component.html',
  styleUrls: ['./description-band.component.scss']
})
export class DescriptionBandComponent implements OnInit {
@Input() public description!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
