import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Sistema de rutas

import { APP_ROUTING  } from './app.routes';


//HttpClient
import { HttpModule } from '@angular/http'
import { HttpClient, HttpClientModule } from '@angular/common/http';

//Components
import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { BandPageComponent } from './components/band-page/band-page.component';
import { VideosPageComponent } from './components/videos-page/videos-page.component';
import { AlbumsPageComponent } from './components/albums-page/albums-page.component';

//services
import { BandsService } from './services/bands.service';
import { AlbumsService } from './services/albums.service';



@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    MainComponentComponent,
    BandPageComponent,
    VideosPageComponent,
    AlbumsPageComponent,

  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpModule,
    HttpClientModule
  ],
  providers: [
    BandsService,
    AlbumsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
