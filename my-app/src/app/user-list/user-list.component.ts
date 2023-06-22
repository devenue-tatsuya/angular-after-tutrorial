import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListItemComponent } from '../user-list-item/user-list-item.component';
import { User } from '../user';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, UserListItemComponent],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  @Input()
  users!: User[];
}
