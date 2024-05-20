import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loaderSubject = new BehaviorSubject<any>({result: false});
  isOpen = this.loaderSubject.asObservable();

  show(pText: string = null) {
    this.loaderSubject.next({ result: true, text: pText });
  }

  hide() {
    this.loaderSubject.next({ result: false });
  }
}
