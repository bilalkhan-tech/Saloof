import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type PaymentInvoices = {
  buttonStatus: string;
};

const initialState: PaymentInvoices = {
  buttonStatus: 'billed',
};

const slice = createSlice({
  name: 'paymentinvoices',
  initialState,
  reducers: {
    settoggleButtonStatus: (
      state: PaymentInvoices,
      action: PayloadAction<string>,
    ) => {
      state.buttonStatus = action.payload;
    },
  },
});

export const { settoggleButtonStatus } = slice.actions;

export default slice.reducer;
