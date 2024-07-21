// import {useDispatch} from 'react-redux'
import { Tabs, TabList, Tab } from '@chakra-ui/react'
import { mainMenuLits } from '@/contstants/MainMenuList'

export const Menu = () => {
  return (
    <Tabs mb={3}>
      <TabList>
        {mainMenuLits.map(tab => <Tab key={tab.path}>{tab.name}</Tab>)}
      </TabList>
    </Tabs>
  )
}
