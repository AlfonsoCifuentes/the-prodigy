import { Component, OnInit } from '@angular/core';
import { Inavbar } from './model/inavbar';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
public navbar: Inavbar;
  constructor() { 
    this.navbar ={
      logo:{
        src:"https://marcas-logos.net/wp-content/uploads/2020/03/The-Prodigy-Logo-2001.png",
        alt:"The Prodigy Logo"
      },
      links: [
        {
          path: "/home",
          name: "HOME"
        },
        {
          path: "/contact",
          name: "CONTACT"
        },
        {
          path: "/about",
          name: "ABOUT"
        }
      ]
    }
  }

  ngOnInit(): void {
  }

}
