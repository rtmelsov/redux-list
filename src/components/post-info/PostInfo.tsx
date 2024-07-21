import styles from './PostInfo.module.scss'
import { Likes } from '@/components';
import { useSelector } from 'react-redux'
import type { PostInfoType } from '@/types/postInfoTypes'
import { Formatter } from '@/utils/Formatter';
import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Box,
  Stack,
  StackDivider,
  Text
} from '@chakra-ui/react'

export const PostInfo = () => {
  const postInfo: PostInfoType = useSelector((
    state: { postInfo: PostInfoType }
  ) => state.postInfo)

  return (
    <Card className={styles.content}>
      <CardHeader>
        <Likes><Heading size='md'>{postInfo.likes}</Heading></Likes>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing='4'>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Summary
            </Heading>
            <Text pt='2' fontSize='sm'>
              View a summary of all your clients over the last month. {Formatter(100000.32)}
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Overview
            </Heading>
            <Text pt='2' fontSize='sm'>
              Check out the overview of your clients.
            </Text>
          </Box>
          <Box>
            <Heading size='xs' textTransform='uppercase'>
              Analysis
            </Heading>
            <Text pt='2' fontSize='sm'>
              See a detailed analysis of all your business clients.
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  )
}

