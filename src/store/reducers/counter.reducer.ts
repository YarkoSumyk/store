import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from 'src/store/actions/counter.actions';
import { state } from '@angular/animations';

export const initialState = 0;

const counterReducer = createReducer(
  initialState,
  on(increment, (state, { value }) => state + value),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
  // on(fetch_success, (state,{todos})=> {...state,todos})
);

export function reducer(state, action) {
  return counterReducer(state, action);
}
