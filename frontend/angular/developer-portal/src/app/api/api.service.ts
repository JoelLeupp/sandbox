import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Food } from './api.models';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class APIBaseService {
  constructor(private http: HttpClient) {}

  loadFood(): Observable<Food[]> {
    return this.http
      .get<Food[]>('/assets/data/food.json')
      .pipe(tap(console.log));
  }
}
