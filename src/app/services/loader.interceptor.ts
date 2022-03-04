import { Injectable } from '@angular/core';

import { finalize } from 'rxjs/operators';
import { LoaderServceService } from './loader-servce.service';

import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
  constructor(private loaderServceService: LoaderServceService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loaderServceService.show();
    return next.handle(req).pipe(
      finalize(() => {
        this.loaderServceService.hide();
        console.log('ok');
      })
    );
  }
}
