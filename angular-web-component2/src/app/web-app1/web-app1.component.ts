import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-web-app1',
  templateUrl: './web-app1.component.html',
  styleUrls: ['./web-app1.component.scss']
})
export class WebApp1Component implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
  }
  navigateToW2(){
    this.router.navigate(['w2'])
  }
}
