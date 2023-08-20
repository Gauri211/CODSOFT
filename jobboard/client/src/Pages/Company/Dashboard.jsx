import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Sidebar from './Sidebar'

const Dashboard = () => {
  return (
    <Flex>
    <Box flex='15%' bgColor={'lavender'} height={'90vh'}>
        <Sidebar/>
    </Box>
    <Box flex='80%'>
        hello
    </Box>
    </Flex>
  )
}

export default Dashboard