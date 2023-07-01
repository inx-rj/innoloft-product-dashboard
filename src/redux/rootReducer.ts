import { combineReducers } from '@reduxjs/toolkit';
import { appConfigSlice } from './reducers/config/app/app.slice';

export const rootReducer = combineReducers({
  appConfig: appConfigSlice.reducer
});

export type RootState = ReturnType<typeof rootReducer>;
