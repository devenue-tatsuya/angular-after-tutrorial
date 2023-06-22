import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from '../user';

@Component({
  selector: 'app-user-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list-item.component.html',
  styleUrls: ['./user-list-item.component.scss']
})
export class UserListItemComponent {
  @Input()
  user!: User;
}
