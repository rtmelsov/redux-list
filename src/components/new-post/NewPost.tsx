import styles from './NewPost.module.scss'
import {useSelector} from 'react-redux'
import type {NewPostInfoType} from '@/types/newPostTypes'
import {onChangePostText, addNewPost} from '@/redux/slices/newPost'
import {useDispatch} from 'react-redux'
import { Textarea, Button, Box } from '@chakra-ui/react'

export const NewPost = () => {
  const dispatch = useDispatch()
  const onChange = (e: {
    target: {
      value: string
    }
  }) => dispatch(onChangePostText({value: e.target.value}))
  const add = () => dispatch(addNewPost())
  const newPost: NewPostInfoType = useSelector((
    state: {newPost: NewPostInfoType}
  ) => state.newPost)

  return (
    <Box className={styles.content}>
      <Textarea value={newPost.postText} onChange={onChange} />
      <Button onClick={add}>enter</Button>
    </Box>
  )
}

