import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  private currentUserInfoSubject: BehaviorSubject<any>;
  public currentUserInfo: Observable<any>;
  USER_KEY = 'user-jwt';
  USER_INFO_KEY = 'user';

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem(this.USER_KEY)));
    this.currentUser = this.currentUserSubject.asObservable();

    this.currentUserInfoSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem(this.USER_INFO_KEY)));
    this.currentUserInfo = this.currentUserInfoSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  public get userInfo(): any {
    return JSON.parse(localStorage.getItem(this.USER_INFO_KEY))
  }

  /**
   * login
   */
  public login(form) {
    return this.http.post<any>(`${environment.API}/users/login/`, form)
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        localStorage.setItem(this.USER_KEY, JSON.stringify(user));
        this.currentUserSubject.next(user);
        return user;
      }));
  }

  /**
   * logout
   * 
   * Remove token from storage
   */
   logout() {
    // remove user from local storage to log user out
    localStorage.removeItem(this.USER_KEY);
    this.currentUserSubject.next(null);
    // remove user id from localstorage
    localStorage.removeItem(this.USER_INFO_KEY);
  }

  /**
   * getCurrentUser
   */
   public getCurrentUser() {
    return this.http.get<Array<any>>(`${environment.API}/users/me/`).pipe(
      tap(user => {
        localStorage.setItem(this.USER_INFO_KEY, JSON.stringify(user));
        this.currentUserInfoSubject.next(user);
      })
    )
  }

  /**
   * register
   */
  public register(form) {
    return this.http.post<any>(`${environment.API}/users/register/`, form);
    
  }
}
