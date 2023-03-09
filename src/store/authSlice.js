import { createSlice } from '@reduxjs/toolkit';


const authSlice = createSlice({
    name: 'auth',
    initialState: { isLoggedIn: {} },
    reducers: {
        login(state , action) {
            state.isLoggedIn = action.payload
        },
        logout(state) {
            state.isLoggedIn = false
        }
    }
})

export const authActions = authSlice.actions;

export default authSlice