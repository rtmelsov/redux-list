import {useDispatch} from 'react-redux'
import {liked, disliked} from '@/redux/slices/postInfo'
import { Button, Box, Heading } from '@chakra-ui/react'
import { ReactNode } from 'react';

const Index = ({children}: {children: ReactNode}) => {
  const dispatch = useDispatch()
  const likePost = () => dispatch(liked({value: 1}))
  const dislikePost = () => dispatch(disliked({value: 1}))
  return (
    <Box>
      <Heading><Button onClick={likePost}>like</Button></Heading>
      <Heading>{children}</Heading>
      <Heading><Button onClick={dislikePost}>dislike</Button></Heading>
    </Box>
  );
}

export const Likes = Index;
