import { Component, OnInit } from '@angular/core';
import { PingService } from './ping.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MNAT';
  ping$: Observable<any>;

  constructor(private pingService: PingService) {}

  ngOnInit() {
    this.ping$ = this.pingService.pingService();
  }
}
