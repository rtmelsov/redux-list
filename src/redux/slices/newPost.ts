import { createSlice } from "@reduxjs/toolkit";
import type { NewPostInfoType } from '@/types/newPostTypes'
const todoSlice = createSlice({
    name: 'newPost',
    initialState: {
        postText: '',
    },
    reducers: {
        onChangePostText(state: NewPostInfoType, action: { payload: { value: string } }) {
            state.postText = action.payload.value
        },
        addNewPost(state: NewPostInfoType) {
            if (state.postText) {
                localStorage.setItem('0', state.postText)
                state.postText = ''
            }
        },
    }
})

export const { onChangePostText, addNewPost } = todoSlice.actions

export default todoSlice.reducer