import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private routerService:Router,private activedRouter: ActivatedRoute) { }
  subscription !: Subscription
  ngOnInit(): void {
   let abc = localStorage.getItem("account")
  }
  onClickProfile(){
    this.routerService.navigate(['/profile']),{
      relativeTo: this.activedRouter.parent
    }
  }
}
