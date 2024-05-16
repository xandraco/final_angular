import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservablesservicesService {
  private session$ = new BehaviorSubject<boolean>(false);
  public sessionObs = this.session$.asObservable();

  updateSessionValue(value: boolean) {
    this.session$.next(value);
  }

  constructor() { }
}
