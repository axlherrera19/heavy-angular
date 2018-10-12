import { Component, OnInit } from '@angular/core';
import { AlbumsService } from '../../services/albums.service';

import { Album } from '../../models/album.model';

import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-albums-page',
  templateUrl: './albums-page.component.html',
  styleUrls: ['./albums-page.component.css']
})
export class AlbumsPageComponent implements OnInit {

  private ownerBandId:string;
  private albumsOfBand:Album[];
  private notAlbumsFoundMessage:string;

  constructor(private activatedRoute:ActivatedRoute, private albumsService:AlbumsService) {
    console.log("En el constructor de AlbumsPageComponent");
    var me = this;
    this.activatedRoute.params.subscribe(params => (
      me.ownerBandId = params['band_id']
    ));
    console.log("bandid " + this.ownerBandId);
    this.albumsOfBand = albumsService.getAlbumsByBand(this.ownerBandId);
    if(this.albumsOfBand.length <= 0){
      console.log("No hay albumes para esta banda");
      this.notAlbumsFoundMessage = "Not albums found for this band";
    }
  }

  ngOnInit() {
  }

}
