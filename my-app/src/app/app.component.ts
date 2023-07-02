import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListComponent } from './user-list/user-list.component';
import { User } from './user';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, UserListComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  private readonly userService = inject(UserService);

  users: User[] = [];

  ngOnInit() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }
}
