import { createReducer, on } from '@ngrx/store';
import { increment, decrement, reset } from '../actions/counter.actions';

interface IAction {
    type: any;
}

export const initialState = 0;

const _countReducer = createReducer(
    initialState,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(reset, (state) => state = 0),
);

export function counterReducer(state: number | undefined, action: IAction) {
    return _countReducer(state, action);
}