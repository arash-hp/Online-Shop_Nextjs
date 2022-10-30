import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from ".";

interface AuthState {
    phoneVerifyToken? : string
}

const initialState = {
    phoneVerifyToken: undefined
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updatePhoneVerifyToken: (state, action: PayloadAction<string>) => {
            state.phoneVerifyToken = action.payload;
        }
    }
})

export const { updatePhoneVerifyToken } = authSlice.actions

export const selecetPhoneVerifyToken = (state: RootState) => state.auth.phoneVerifyToken

export default authSlice.reducer