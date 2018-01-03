import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {


  private productId: number;
  private newid: number;

  private test: boolean;

  private isProd: boolean;

  constructor(private routeInfo: ActivatedRoute) {
    this.routeInfo.queryParams.subscribe((params: Params) => this.productId = params["id"])
    this.newid=1;

  }

  ngOnInit() {

  }

}

export class Product {

  constructor(public id: number,
    public name: string
  ) { }
}
