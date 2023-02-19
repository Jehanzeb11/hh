import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState ={
    user:null,
    loading:false,
    error:false
}


export const loginUser = createAsyncThunk("login", async (userData)=>{
try {
    const res = await axios.post("https://scarab-sweater.cyclic.app/api/auth/login",userData)
    console.log(res.data)
} catch (error) {
    console.log(error)
}
})




export const registerUser = createAsyncThunk("register", async (userData,navigation)=>{
    try {
        const res = await axios.post("https://scarab-sweater.cyclic.app/api/auth/register",userData)

        console.log(res.data)
    } catch (error) {
        console.log(error)
    }
    })


const userSlice = createSlice({
    name:"user",
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(registerUser.pending,(state)=>{
            state.loading = true
        
        })
        
        builder.addCase(registerUser.fulfilled,(state,action)=>{
        state.loading = false
        state.user = action.payload
        })
        builder.addCase(registerUser.rejected,(state)=>{
        state.loading = false 
        state.error = true
        })
        
        
        
        // loginUser
        
        
        builder.addCase(loginUser.pending,(state)=>{
            state.loading = true
        
        })
        
        builder.addCase(loginUser.fulfilled,(state,action)=>{
        state.loading = false
        state.user = action.payload
        })
        builder.addCase(loginUser.rejected,(state)=>{
        state.loading = false 
        state.error = true
        })
    }
})



export default userSlice.reducer;