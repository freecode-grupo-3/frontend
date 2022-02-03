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

  public setupPreferences(diseases: string[], needs: string[]) {
    return this.http.put<void>(`${environment.API}/users/setup-feed/`, {
      diseases_of_interest: diseases,
      reference_types_of_interest: needs,
    })
  }
}
