import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from '../services/http.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  entries: Array<any>;
  constructor(
    private httpService: HttpService,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.httpService.getFeed().subscribe(
      entries => {
        this.entries = entries;
      }
    )
  }

  /**
   * logout
   */
  public logout() {
    this.userService.logout()
    this.router.navigateByUrl('login')
  }

  /**
   * buscar
   */
  public buscar(event) {
    let text = event.target.parentElement.lastElementChild.value;
    console.log(`Buscando ${text}`);
    
  }
}
