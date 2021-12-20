import { Component, Input, OnInit } from '@angular/core';
import { Igallery } from '../model/igallery';

@Component({
  selector: 'app-gallery-card',
  templateUrl: './gallery-card.component.html',
  styleUrls: ['./gallery-card.component.scss']
})
export class GalleryCardComponent implements OnInit {
@Input() public card!: Igallery;
  constructor() { }

  ngOnInit(): void {
  }

}
