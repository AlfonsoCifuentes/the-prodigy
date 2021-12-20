import { Component, Input, OnInit } from '@angular/core';
import { Ilink } from '../model/inavbar';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent implements OnInit {
  @Input() public links!: Ilink[];
  constructor() { }

  ngOnInit(): void {
  }

}
