import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export type AuthState = {
    token: string|null;
    user: { [key: string]: number | string | boolean };
    user_type: string
  };

const initialState :AuthState={
    token: null,
    user: {},
    user_type: '',
}

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser: (state: AuthState, action: PayloadAction<any>) => {
        state.user = action.payload;
    },
    setToken: (state: AuthState, action: PayloadAction<string>) => {
        state.token = action.payload;
    },
    setUserType: (state: AuthState, action: PayloadAction<string>) => {
        state.user_type = action.payload;
    },
    logout: (state: AuthState) => ({
      ...initialState
  })
  },
});

export const { setUser, setToken, setUserType, logout } = slice.actions;

export default slice.reducer;


