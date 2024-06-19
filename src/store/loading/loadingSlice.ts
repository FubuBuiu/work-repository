import { createSlice } from '@reduxjs/toolkit';

export interface SessionState {
    loading: boolean;
}
const initialState: SessionState = {
    loading: false
};

const mySlice = createSlice({
    name: 'loading',
    initialState,
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        }
    }
});

export const { setLoading } = mySlice.actions;
export default mySlice.reducer;
