import { Injectable } from "@angular/core";

import { CounterService } from './counter.service';

@Injectable()
export class UsersService {
  activeUsers: string[] = ['Max', 'Anna'];
  inactiveUsers: string[] = ['Chris', 'Manu'];

  constructor(private counterService: CounterService) { }

  onSetToActive(id: number, user: string) {
    this.inactiveUsers.splice(id, 1);
    this.activeUsers.push(user);
    this.counterService.onToActive();
  }

  onSetToInactive(id: number, user: string) {
    this.activeUsers.splice(id, 1);
    this.inactiveUsers.push(user);
    this.counterService.onToInactive();
  }
}