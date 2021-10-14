import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import { MovieService } from '../movie.service';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public movieService: MovieService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    request = request.clone({
      setHeaders: {
        Authorization: `Bearer ${this.movieService.getToken()}`
      }
    });
    return next.handle(request);
  }
}
