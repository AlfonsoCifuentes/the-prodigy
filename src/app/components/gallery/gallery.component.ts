import { Component, OnInit } from '@angular/core';
import { Igallery } from './model/igallery';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  public gallery: Igallery[];
  constructor() {
    this.gallery = [
      {
        img: {
          src: 'https://beatburguer.com/wp-content/uploads/2020/07/Milton-Keynes-Crowd.jpg',
          alt: 'The prodigy picture',
        }
      },
      {
        img: {
          src: 'https://live.staticflickr.com/7408/9077148618_c1a531be75_b.jpg',
          alt: 'The prodigy picture',
        }
      },
      {
        img: {
          src: 'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/6/0/7/1/6071b64a477abd57f4702583c7c8d0a9.jpg',
          alt: 'The prodigy picture',
        }
      },
      {
        img: {
          src: 'https://i0.wp.com/revistadiners.com.co/wp-content/uploads/2019/03/portada_prodigy_800x669.jpg?fit=800%2C669&ssl=1',
          alt: 'The prodigy picture',
        }
      },
      {
        img: {
          src: 'https://www.beatmashmagazine.com/wp-content/uploads/2014/01/the-prodigy.jpg',
          alt: 'The prodigy picture',
        }
      },
      {
        img: {
          src: 'https://static3.abc.es/media/cultura/2019/03/04/flint-kHqE--1200x630@abc.jpg',
          alt: 'The prodigy picture',
        }
      },
      {
        img: {
          src: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2019/08/22/15664855057166.jpg',
          alt: 'The prodigy picture',
        }
      },
      {
        img: {
          src: 'https://img.redbull.com/images/c_limit,w_1500,h_1000,f_auto,q_auto/redbullcom/2019/03/05/37219699-0452-4870-a621-19cc0be5771e/the-prodigy',
          alt: 'The prodigy picture',
        }
      },
      {
        img: {
          src: 'https://www.lavanguardia.com/files/image_449_220/uploads/2014/03/19/5f9c0bf2823c5.jpeg',
          alt: 'The prodigy picture',
        }
      },
      {
        img: {
          src: 'https://m.media-amazon.com/images/I/81AGKid82EL._SY355_.jpg',
          alt: 'The prodigy picture',
        }
      }
    ];
  }

  ngOnInit(): void {}
}
