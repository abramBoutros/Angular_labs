import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderServceService {
  // private loaderUp: any = new BehaviorSubject(true);

  isLoading: any = new BehaviorSubject(true);
  show() {
    this.isLoading.next(false);
  }
  hide() {
    this.isLoading.next(true);
  }
  getLoadingStatus() {
    return this.isLoading;
  }

  constructor() {}
}
