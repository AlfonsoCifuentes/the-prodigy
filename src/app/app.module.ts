import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BandComponent } from './components/band/band.component';
import { MainComponent } from './components/main/main.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoComponent } from './components/navbar/logo/logo.component';
import { LinkComponent } from './components/navbar/link/link.component';
import { ImgBandComponent } from './components/band/img-band/img-band.component';
import { LogoBandComponent } from './components/band/logo-band/logo-band.component';
import { DescriptionBandComponent } from './components/band/description-band/description-band.component';
import { GalleryCardComponent } from './components/gallery/gallery-card/gallery-card.component';
import { ButtonComponent } from './components/shared/components/button/button.component';
import { SonOfMainComponent } from './components/main/son-of-main/son-of-main.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BandComponent,
    MainComponent,
    GalleryComponent,
    FooterComponent,
    LogoComponent,
    LinkComponent,
    ImgBandComponent,
    LogoBandComponent,
    DescriptionBandComponent,
    GalleryCardComponent,
    ButtonComponent,
    SonOfMainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
