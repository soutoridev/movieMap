import { Injectable } from '@angular/core';

import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable()
export class ApiKeyInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // Verifica se a solicitação é uma solicitação HTTP GET
    if (request.method === 'GET' && request.url.startsWith(environment.tmdbApiUrl)) {
      // Adicione a chave da API como um parâmetro na URL
      request = request.clone({
        params: request.params.set('api_key', environment.tmdbkey),
      });

      // Adicione o token Bearer se estiver disponível
      if (environment.tmdbToken) {
        request = request.clone({
          setHeaders: {
            Authorization: `Bearer ${environment.tmdbToken}`,
          },
        });
      }
    }

    // Prossiga com a solicitação modificada ou não modificada
    return next.handle(request);
  }
}
