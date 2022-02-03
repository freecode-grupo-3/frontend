import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserService } from '../services/user.service';
import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';


@Injectable()
export class UserInterceptor implements HttpInterceptor {

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // add auth header with jwt if user is logged in and request is to the api url
    const currentUser = this.userService.currentUserValue;
    const isLoggedIn = currentUser && currentUser.access;
    const isApiUrl = request.url.startsWith(environment.API);
    if (isLoggedIn && isApiUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${currentUser.access}`
        }
      });
    }
    return next.handle(request).pipe(
      catchError(err => {
        if (err.status === 401) {
          // auto logout if 401 response returned from api
          this.userService.logout();
          if (!this.activatedRoute.snapshot['_routerState'].url.includes('/login')) {
            location.reload();
          }
        }

        const error = err.error.message || err.statusText;
        return throwError(error);
      }))
  }

}
