import { Component, OnInit } from '@angular/core';
import { ManagementService } from '../management.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
myusers:User[]=[]
  constructor(private management:ManagementService) { }

  ngOnInit(): void {
    this.myusers=this.management.users
  }

}
