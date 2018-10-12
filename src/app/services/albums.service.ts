import { Injectable } from '@angular/core';

//Models
import { Album } from '../models/album.model';

@Injectable()
export class AlbumsService {

  private albums:Album[] = [];

  constructor() {
    this.albums = [{
      id: "master",
      name: "Master of Puppets",
      style: "Thrash Metal",
      cover:"",
      bandId: "metallica",
      year: 1986,
      songs:[]
    },
    {
      id: "kill",
      name: "Kill em All",
      style: "Thrash Metal",
      cover:"",
      bandId: "metallica",
      year: 1983,
      songs:[]
    },
    {
      id: "back",
      name: "Back in Black",
      style: "Hard Rock",
      cover:"",
      bandId: "acdc",
      year: 1980,
      songs:[]
    },{
      id: "hardwired",
      name: "Hardwired to Self Destruct",
      style: "Thrash Metal",
      cover:"",
      bandId: "metallica",
      year: 2016,
      songs:[]
    },{
      id: "number_of_the_beast",
      name: "The Number Of the Beast",
      style: "NWOBHM",
      cover:"",
      bandId: "iron_maiden",
      year: 1982,
      songs:[]
    },{
      id: "highway_to_hell",
      name: "Highway to Hell",
      style: "Hard Rock",
      cover:"",
      bandId: "acdc",
      year: 1978,
      songs:[]
    },]
  }

  getAll(){
    return this.albums;
  }

  getAlbumsByBand(bandId:string):Album[]{
    var result:Album[] = [];
    for(var i=0; i<this.albums.length;i++){
      if(this.albums[i].bandId === bandId){
        result.push(this.albums[i]);
      }
    }
    return result;
  }

  getAlbumById(albumId:string){

  }

}
