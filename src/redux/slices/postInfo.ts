import { createSlice } from "@reduxjs/toolkit";
import type {PostInfoType } from '@/types/postInfoTypes'
const todoSlice = createSlice({
    name: 'postInfo',
    initialState: {
        likes: 0,
    },
    reducers: {
        liked(state: PostInfoType, action: {payload: {value: number}}) {
            state.likes = state.likes + action.payload.value
        },
        disliked(state: PostInfoType, action: {payload: {value: number}}) {
            state.likes = state.likes - action.payload.value
        }
    }
})

export const {liked, disliked} = todoSlice.actions

export default todoSlice.reducer