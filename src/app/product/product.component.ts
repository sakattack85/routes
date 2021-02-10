import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagementService } from '../management.service';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
myproducts:Product[]=[]
  constructor(private route:Router, private management:ManagementService) { }

  ngOnInit(): void {
    this.myproducts=this.management.products
  }

  navigate(){
this.route.navigate(['user'])
  }
}
