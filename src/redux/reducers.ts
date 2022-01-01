import { combineReducers } from 'redux';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import app from '@screens/App/reducer';
import { reducer as appState } from '@modules/appState';
import { reducer as networkStatus } from '@modules/network';

const reducers = combineReducers({
  app,
  appState,
  networkStatus,
});

export type RootState = ReturnType<typeof reducers>;

export const selectState: TypedUseSelectorHook<RootState> = useSelector;

export default reducers;
