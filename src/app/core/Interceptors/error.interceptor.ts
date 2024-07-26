import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler,HttpEvent, HttpInterceptor} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, delay } from 'rxjs/operators';
import { NavigationExtras, Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {


  constructor(private router: Router) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
    
      catchError(
        (err) => {
          if (err) {
          
          if(err.status==400)
          {
           this.router.navigateByUrl('/not-found');
          }
          if(err.status===500)
          {
            this.router.navigateByUrl('/server-error');
          }
          }
          return throwError(() => err.message || 'Server Not Found!');
        }
      )
    )
  }
}
