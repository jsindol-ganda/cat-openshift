import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cat } from '../models/status-code.interface';

@Injectable({
  providedIn: 'root'
})
export class MycatService {

  constructor(private http: HttpClient) { }

  getCats(): Observable<Array<Cat>> {
    return this.http.get<Array<Cat>>(`https://api.thecatapi.com/v1/images/search`);
  }

  getDogs(): Observable<Array<Cat>> {
    return this.http.get<Array<Cat>>(`https://api.thedogapi.com/v1/images/search`);
  }
}

