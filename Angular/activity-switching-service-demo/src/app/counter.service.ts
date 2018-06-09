import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  toActiveCounter: number = 0;
  toInactiveCounter: number = 0;

  onToActive() {
    console.log('To Active: ' + ++this.toActiveCounter);
  }

  onToInactive() {
    console.log('To Inactive: ' + ++this.toInactiveCounter);
  }
}