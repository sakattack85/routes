import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagementService } from '../management.service';
import { Product } from '../product';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
productid:any;
myproduct:any;
  constructor(private activatedroute:ActivatedRoute, private management:ManagementService) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((param)=>{
this.productid=param.get('id')
for(let product of this.management.products){
  if(this.productid==product.id){
this.myproduct=new Product(product.id,product.name)
  }
}

    })
  }

}
