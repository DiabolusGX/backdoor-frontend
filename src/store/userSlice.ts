import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        isAuthenticated: false,
        username: undefined,
        permission_level: 0
    },
    reducers: {
        authenticate: state => {
            state.isAuthenticated = true;
        },
        deauthenticate: state => {
            state.isAuthenticated = false;
        },
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        setPermissionLevel: (state, action) => {
            state.permission_level = action.payload;
        }
    }
});

export const {
    authenticate,
    deauthenticate,
    setUsername,
    setPermissionLevel
} = userSlice.actions;

export default userSlice.reducer;