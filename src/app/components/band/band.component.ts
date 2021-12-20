import { Component, OnInit } from '@angular/core';
import { Iband } from './model/iband';

@Component({
  selector: 'app-band',
  templateUrl: './band.component.html',
  styleUrls: ['./band.component.scss'],
})
export class BandComponent implements OnInit {
  public band: Iband;
  public bioButton: string = 'Bio';
  public infoButton: string = 'Info';
  public discoButton: string = 'Discografía';
  constructor() {
    this.band = {
      img: {
        src: 'https://muzikalia.com/wp-content/uploads/2020/08/The-Prodigy.jpg',
        alt: 'The prodigy band image',
      },
      title: 'THE PRODIGY',
      description:
        'The Prodigy es un grupo británico de música electrónica, formado por Maxim Reality (MC/vocalista) y Liam Howlett (compositor/teclados). Keith Flint (bailarín y posteriormente segundo vocalista) formó parte de la banda desde 1990 hasta el 4 de marzo de 2019, fecha en la que falleció. Leeroy Thornhill (bailarín) también fue miembro de la banda desde 1990 hasta el año 2000. Una vocalista y bailarina llamada Sharky también se asoció brevemente con la banda en sus comienzos, ya que actuó con ellos en varios clubs nocturnos de estilo electrónico. The Prodigy disfrutó de un gran éxito comercial a finales de la década de los 90s y comienzos de los 2000s, y son considerados pioneros en el género de música electrónica conocida como big beat. The Prodigy ha evolucionado y tocado varios estilos a lo largo de su carrera, siempre distinguiéndose por elevar su estandarte musical de corte muy energético, con canciones techno que involucran influencias y actitud punk.La banda fue creada por Liam Howlett en 1990 en Braintree, Essex, Inglaterra. Han vendido más de 25 millones de discos en todo el mundo, y han ganado diversos reconocimientos entre los que destacan los Brit Awards, MTV Video Music Awards, Kerrang! Awards, MTV Europe Music Awards y han sido nominados un par de ocasiones para los Grammys. El sello de la banda es usar y combinar diversos estilos musicales que abarcan estilos como el rave, hardcore techno, industrial, breakbeat, big beat, metal industrial y punk. La banda se define como Electronic Punk.',
    };
  }

  ngOnInit(): void {}
}
