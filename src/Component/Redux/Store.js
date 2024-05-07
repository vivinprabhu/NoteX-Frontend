import { configureStore , createSlice } from "@reduxjs/toolkit";

const initialState = { 
    value : { 
        username: localStorage.getItem("username") || "" 
    } 
};

const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        login:(state,action)=>{
            const username = action.payload.value.username;
            state.value.username = username;
            localStorage.setItem("username", username);
        },
        logout:(state)=>{
            state.value.username = "";
            localStorage.removeItem("username");
        },
    }
});

export const { login , logout } = userSlice.actions;

export const store = configureStore({
    reducer:{
        user : userSlice.reducer
    }
});