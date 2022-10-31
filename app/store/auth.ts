import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from ".";
import { string } from "yup";

interface AuthState {
    phoneVerifyToken?: string;
}

const initialState = {
    phoneVerifyToken: undefined
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        updatePhoneVerifyToken: (state, action: PayloadAction<string | undefined>) => {
            state.phoneVerifyToken = action.payload;
        }
    }
})

export const { updatePhoneVerifyToken } = authSlice.actions

export const selecetPhoneVerifyToken = (state: RootState) => state.auth.phoneVerifyToken

export default authSlice.reducer