import { Reducer } from 'redux';
import { CounterAction, CounterActionType } from './actions/counter';

export interface CounterState {
  count: number;
}

export const initialState: CounterState = { count: 0 };

const counterReducer: Reducer<CounterState, CounterAction> = (
  state = initialState,
  action,
) => {
  switch (action.type) {
    case CounterActionType.ADD:
      return { ...state, count: state.count + (action.amount || 0) };
    case CounterActionType.DECREMENT:
      return { ...state, count: state.count - 1 };
    case CounterActionType.INCREMENT:
      return { ...state, count: state.count + 1 };
    default:
      return state;
  }
};

export default counterReducer;
