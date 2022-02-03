import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  entries: Array<any>;
  constructor(
    private httpService: HttpService,
  ) { }

  ngOnInit(): void {
    this.httpService.getFeed().subscribe(
      entries => {
        this.entries = entries;
      }
    )
  }

}
