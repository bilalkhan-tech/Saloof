import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type ShippingSlice = {
  filterText: string;
};

const initialState: ShippingSlice = {
  filterText: '',
};

const slice = createSlice({
  name: 'shipping',
  initialState,
  reducers: {
    setFilterShipping: (
      state: ShippingSlice,
      action: PayloadAction<string>,
    ) => {
      state.filterText = action.payload;
    },
  },
});

export const { setFilterShipping } = slice.actions;

export default slice.reducer;
