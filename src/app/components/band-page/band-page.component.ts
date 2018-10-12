import { Component, OnInit } from '@angular/core';

import {ActivatedRoute} from '@angular/router';

import {BandsService} from '../../services/bands.service';

@Component({
  selector: 'app-band-page',
  templateUrl: './band-page.component.html',
  styleUrls: ['./band-page.component.css']
})
export class BandPageComponent implements OnInit {


  private bandId:string;

  private band:any;

  constructor(private activatedRoute:ActivatedRoute, private bandsService:BandsService) {
    var me = this;
    this.activatedRoute.params.subscribe(params => (
      me.bandId = params['band_id']
    ));
    console.log("bandid " + this.bandId);
    this.band = bandsService.getBandById(this.bandId);
    console.log(this.band);

  }


  ngOnInit() {
  }


  getBandId(){
    return this.bandId;
  }


}
