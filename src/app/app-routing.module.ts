import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'src/pages/auth/login/login.component';
import { RegisterComponent } from 'src/pages/auth/register/register.component';
import { DashboardComponent } from 'src/pages/dashboard/dashboard.component';
import { TodosComponent } from 'src/components/todos/todos.component';
import { AuthGuardService as AuthGuard } from 'src/services/authguard.service';
import { PostsComponent } from 'src/components/posts/posts.component';
const routes: Routes = [
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'todos',
    component: TodosComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'login/:id',
    component: LoginComponent,
    data: { animation: 'login' },
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  // {
  //   path: 'admin',
  //   // component: AdminComponent,
  //   // canActivate: [RoleGuard],
  // },
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'products',
        loadChildren: () =>
          import('src/modules/products/products.module').then(
            (m) => m.ProductsModule
          ),
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('src/modules/cart/cart.module').then((m) => m.CartModule),
      },
      {
        path: 'users',
        loadChildren: () =>
          import('src/modules/users/users.module').then((m) => m.UsersModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
