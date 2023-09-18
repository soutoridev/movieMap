import { Injectable } from '@angular/core';

import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    if (request.method === 'GET' && request.url.startsWith(environment.tmdbApiUrl)) {
      request = request.clone({
        params: request.params.set('api_key', environment.tmdbkey),
      });

      if (environment.tmdbToken) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${environment.tmdbToken}`,
          },
        });
      }
    }

    return next.handle(request);
  }
}
