import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PingService {

  constructor(private http: HttpClient) {}

  pingService() {
    return this.http.get('/api');
  }
}
