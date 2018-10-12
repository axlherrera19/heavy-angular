import { RouterModule, Routes } from '@angular/router';
import { BandPageComponent } from './components/band-page/band-page.component';
import { MainComponentComponent } from './components/main-component/main-component.component';
import { VideosPageComponent } from './components/videos-page/videos-page.component';
import { AlbumsPageComponent } from './components/albums-page/albums-page.component';

const APP_ROUTES: Routes = [
  //{ path: 'band/:id', component: BandPageComponent }
  { path: 'home', component: MainComponentComponent },
  { path: 'band/:band_id', component: BandPageComponent },
  { path: 'albums/:band_id', component: AlbumsPageComponent },
  { path: 'videos', component: VideosPageComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, {useHash : true});
