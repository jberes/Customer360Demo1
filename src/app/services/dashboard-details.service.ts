import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardDetailsService {
  constructor(private http: HttpClient) { }

  public getDetails(): Observable<any> {
    return this.http.get(`https://excel2json.io/api/share/9657a1bc8ac74f3b829f6a49f0b69108`);
  }
}
