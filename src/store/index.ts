import { combineReducers, configureStore, Reducer, Slice } from '@reduxjs/toolkit';

import SampleSlice from 'Slices';

interface ISimpleMap {
	[field: string]: Reducer;
}
const reducerMap: ISimpleMap = { [SampleSlice.name]: SampleSlice.reducer };

const store = configureStore({
	reducer: combineReducers(reducerMap),
});

export const registerSlice = (slice: Slice): void => {
	reducerMap[slice.name] = slice.reducer;
	store.replaceReducer(combineReducers(reducerMap));
};

export default store;
