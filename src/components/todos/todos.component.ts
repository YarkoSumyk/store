import { Component, OnInit } from '@angular/core';
import { TodosService } from 'src/services/todos.service';

import { increment, decrement, reset } from 'src/store/actions/counter.actions';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
  count$: Observable<number>;

  todos: any;
  error: string;
  constructor(
    private store: Store<{ count: number }>,
    private todosService: TodosService
  ) {
    this.count$ = store.pipe(select('count'));
  }

  ngOnInit() {
    this.todosService.getTodos().subscribe(
      (res) => {
        this.todos = res;
        console.log(this.todos);
      }
      // (err) => {
      //   this.error = err.message;
      //   console.log(err);
      // }
    );
  }

  increment() {
    this.store.dispatch(increment({ value: 4 }));
  }
  decrement() {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  }
}
