import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from 'src/modules/auth/auth.module';
import { DashboardModule } from 'src/modules/dashboard/dashboard.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TodosModule } from 'src/modules/todos/todos.module';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodosService } from 'src/services/todos.service';
import { AuthInterceptor } from 'src/services/auth.interceptor';
import { PostsModule } from 'src/modules/posts/posts.module';
import { PostsService } from 'src/services/posts.service';
import { StoreModule } from '@ngrx/store';
import store from 'src/store/index';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    DashboardModule,
    ReactiveFormsModule,
    HttpClientModule,
    TodosModule,
    SimpleNotificationsModule.forRoot(),
    BrowserAnimationsModule,
    PostsModule,
    StoreModule.forRoot(store),
  ],
  providers: [
    TodosService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    PostsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
