import { configureStore } from "@reduxjs/toolkit";
import postInfo from "./slices/postInfo";
import newPost from "./slices/newPost";
export default configureStore({
    reducer: {
        postInfo,
        newPost
    }
})