import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-sellerinfo',
  templateUrl: './sellerinfo.component.html',
  styleUrls: ['./sellerinfo.component.css']
})
export class SellerinfoComponent implements OnInit {
  private  sellerId:number;
  constructor(private routeInfo:ActivatedRoute) { }

  ngOnInit() {
    this.sellerId=this.routeInfo.snapshot.params["id"];
  }

}
