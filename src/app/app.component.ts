import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'medicrumbs';
  user: any;
  userInfo: any;
  userGroup: any;

  constructor(
    private userService: UserService,
    private router: Router,
  ) { 
    this.userService.currentUser.subscribe(x => this.user = x);
    // this.userService.currentUserInfo.subscribe(x => {this.userInfo = x; this.userGroup = x.groups[0].name});
  }

  ngOnInit() {}

  /**
   * logout
   */
   logout() {
    this.userService.logout();
    this.router.navigate(['/login']);
  }
}
