import { Injectable } from '@angular/core';
//Cliente http para llamar a internet
import { HttpClient, HttpHeaders }from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, tap } from 'rxjs/operators';

import {of} from "rxjs/observable/of";

//Models
import {Band} from "../models/band.model";



const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json',
                                                  'access-control-allow-origin': '*'
                                                })};



@Injectable()
export class BandsService {

  private bands:Band[] = [];

  constructor(private httpClient: HttpClient) {
    console.log("on Service contstructor");
    this.bands = [
      {
        id : "metallica",
        name : "metallica",
        origin: "San Francrisco, CA, USA",
        year: 1982,
        quik_bio: "kdjskfjd",
        bio: "kdjskfjd",
        photo: "assets/img/metallica_main.jpg",
        //miniPhoto: "http://clipground.com/images/metallica-clipart-20.jpg",
        miniPhoto: "assets/img/met_mini.png",
        albums: []
      },
      {
        id : "acdc",
        name : "ac/dc",
        origin: "Brisbane, Australia",
        year: 1973,
        quik_bio: "kdjskfjd",
        bio: "kdjskfjd",
        photo: "assets/img/acdc_main.jpg",
        miniPhoto: "assets/img/acdc_mini.jpg",
        albums: []
      },
      {
        id : "motorhead",
        name : "motorhead",
        origin: "London, UK",
        year: 1977,
        quik_bio: "kdjskfjd",
        bio: "kdjskfjd",
        photo: "assets/img/acdc_main.jpg",
        miniPhoto: "assets/img/wolverine.png",
        albums: []
      },
      {
        id : "iron_maiden",
        name : "Iron Maiden",
        origin: "London, UK",
        year: 1980,
        quik_bio: "kdjskfjd",
        bio: "kdjskfjd",
        photo: "assets/img/acdc_main.jpg",
        miniPhoto: "assets/img/wolverine.png",
        albums: []
      }
    ]
    console.log(this.bands);
  }

getAll(){
  return this.bands;
}

getBandById(bandId:string){
  console.log(bandId);
  var band:Band;
  for (var i=0;i<this.bands.length; i++){
    if(this.bands[i].id === bandId){
      band = this.bands[i];
    }
  }
  return band;
}


public getFromApi<T>(): Observable<T> {
       return this.httpClient.get<T>('http://services.groupkt.com/country/get/all');
  }




private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log("error en la API call");
      console.error(error);
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log('TxtReaderService: ' + message);

  }

}
