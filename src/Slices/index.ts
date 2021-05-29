import { useSelector } from 'react-redux';

import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = () => ({
	data: '',
});

const SampleSlice = createSlice({
	name: 'Sample',
	initialState: INITIAL_STATE(),
	reducers: {
		RESET: (state) => Object.assign(state, INITIAL_STATE()),
		SET_DATA: (state, { payload }) => {
			state.data = payload.payload;
		},
	},
});

export const { RESET, SET_DATA } = SampleSlice.actions;

export default SampleSlice;

export interface ISampleStates {
	[SampleSlice.name]: ReturnType<typeof SampleSlice.reducer>;
}

export const dataSelector = (state: ISampleStates): string => {
	return state[SampleSlice.name]?.data;
};

export const useData = (): string => useSelector(dataSelector);
