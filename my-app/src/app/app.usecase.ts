import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './services/user.service';
import { User } from './user';

export type State = {
  users: User[];
};

@Injectable()
export class AppUsecase {
  private readonly userService = inject(UserService);

  private readonly store = new BehaviorSubject<State>({
    users: [],
  });

  get state$() {
    return this.store.asObservable();
  }

  initialize() {
    this.userService.getUsers().subscribe((users) => {
      const state = this.store.getValue();
      this.store.next({
        ...state,
        users,
      });
    });
  }
}
