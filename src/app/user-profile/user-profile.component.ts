import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  panelOpenState = false;
  

  constructor() { }

  ngOnInit(): void {
  }

  toggleNav(nav:any) {
    if (nav.opened) {
      nav.close()
    } else {
      nav.open();
    }
  }

}
