import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TodosService } from 'src/services/todos.service';
import { mergeMap, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';

@Injectable()
export class CounterEffects {
  // loadTodos$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType('[Counter] Reset'),
  //     mergeMap(() =>
  //       this.todosService.getTodos().pipe(
  //         map((data) => console.log(data)
  //         return
  //         ),
  //         catchError(() => EMPTY)
  //       )
  //     )
  //   )
  // );
  // constructor(private actions$: Actions, private todosService: TodosService) {}
}
