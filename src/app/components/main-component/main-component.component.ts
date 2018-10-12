import { Component, OnInit } from '@angular/core';

import { BandsService } from '../../services/bands.service';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {


private bandsForService:any[] = [];

private bandsForServiceAPI:any[] = [];

private responseAPIObject:any;


constructor(private bandsService:BandsService) {
    console.log("en el constructor de MainComponentComponent");
    this.bandsForService = bandsService.getAll();
    console.log("this.bandsForService");
    console.log(this.bandsForService);


    this.bandsService
          .getFromApi<any[]>()
          .subscribe((data: any[]) => this.responseAPIObject = data,
          error => () => {
              console.log("ERROR en el getFromApi")
          },
          () => {
              console.log("exito en el getFromAPi");
              console.log(this.responseAPIObject);
              console.log(this.responseAPIObject.RestResponse.result);
              this.bandsForServiceAPI = this.responseAPIObject.RestResponse.result;
          });

  //  var resultApi = this.txtReaderService.getFromApi();

    //console.log(resultApi);
  }



  ngOnInit() {
    console.log("en el ngInit de MainComponentComponent");
  }

}
