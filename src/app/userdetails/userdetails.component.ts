import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ManagementService } from '../management.service';
import { User } from '../user';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
userid:any;
myuser:any;
  constructor(private activatedroute:ActivatedRoute, private management:ManagementService) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(
      (param)=>{
this.userid=param.get('id')
this.myuser=this.management.users.filter(
  (user)=>{
    return user.id==this.userid
  }
)[0]

      }
    )
  }

}
