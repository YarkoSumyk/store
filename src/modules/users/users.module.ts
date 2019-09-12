import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from 'src/pages/users/users.component';
import { Route, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UsersService } from 'src/services/users.service';

const routes: Route[] = [
  {
    path: '',
    component: UsersComponent,
  },
];

@NgModule({
  declarations: [UsersComponent],
  imports: [CommonModule, RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [],
  providers: [UsersService],
})
export class UsersModule {}
