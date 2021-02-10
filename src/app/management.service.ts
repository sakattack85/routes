import { Injectable } from '@angular/core';
import { Product } from './product';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class ManagementService {
users:User[]=[]
products:Product[]=[]
  constructor() { 
    let user1=new User('1','iosif','iosif@com')
    let user2=new User('2','iosif2','iosif2@com')
this.users.push(user1, user2)
let p1=new Product('1','iosif_p')
let p2=new Product('2','iosif_p second')
this.products.push(p1,p2)

  }
}
