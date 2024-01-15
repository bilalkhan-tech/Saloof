import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type commonState = {
    loading: boolean;
  };

const initialState :commonState={
    loading: false
}

const slice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setLoading: (state: commonState, action: PayloadAction<any>) => {
        state.loading = action.payload;
    },
  },
});

export const { setLoading } = slice.actions;

export default slice.reducer;