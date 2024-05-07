import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        incrementByValue: (state, action) => {
            state.value += action.payload;
        },
        decrementByValue: (state, action) => {
            state.value -= action.payload;
        },
        resetValue: state => {
            state.value = 0;
        }
    }
});

export const { incrementByValue, decrementByValue, resetValue } = counterSlice.actions;
export default counterSlice.reducer;
