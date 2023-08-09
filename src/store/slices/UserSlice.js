import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name : 'user',
    initialState:[],
    reducers:{
        addUser(state, action){
            state.push(action.payload);
            console.log(action.payload)
        },
        deleteUser(state, action){
            state.splice( state.findIndex((user)=> user._id ===  action.payload) ,1 )
        },
        deleteAllUsers(state, action){
            state.splice(0)
        }
    }
});

export default userSlice.reducer ;

export const {addUser, deleteUser, deleteAllUsers} = userSlice.actions