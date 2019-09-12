import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from 'src/services/users.service';
import { IUser } from './user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  userForm: FormGroup;
  users: IUser[] = [];
  currentUser: IUser;
  timer = null;
  constructor(private fb: FormBuilder, private usersService: UsersService) {}

  ngOnInit(): void {
    this.userForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      age: [''],
    });

    this.getUsers();
  }
  private getUsers(param = {}) {
    this.usersService.getUsers(param).subscribe(
      (res) => {
        this.users = res;
        console.log(res);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  saveUser = () => {
    if (this.currentUser) {
      const user = {
        ...this.userForm.value,
        id: this.currentUser.id,
      };
      this.usersService.editUser(user).subscribe((res) => {
        this.getUsers();
        this.currentUser = null;
      });
    } else {
      this.usersService.createUser(this.userForm.value).subscribe((res) => {
        this.getUsers();
        console.log(res);
      });
    }
    console.log(this.userForm.value);
  };
  deleteUser = (id: number) => {
    this.usersService.deleteUser(id).subscribe(() => this.getUsers());
  };
  editUser = (user: IUser) => {
    this.currentUser = user;
    this.userForm.patchValue(user);
  };
  onSearch = (str) => {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = null;
      return;
    }
    this.timer = setTimeout(() => {
      this.getUsers({ firstName: str });
    }, 400);
  };
}
