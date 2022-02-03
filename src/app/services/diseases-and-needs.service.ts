import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DiseasesAndNeedsService {

  constructor(private http: HttpClient) { }

  public diseases() {
    return this.http.get<Array<{id: number, name: string, description: string}>>(`${environment.API}/diseases/`);
  }

  public needs() {
    return this.http.get<Array<{id: number, name: string, description: string}>>(`${environment.API}/reference-types/`);
  }
}
