import { Box, Checkbox, Heading, Stack } from '@chakra-ui/react'
import React from 'react'

const Filters = () => {
  return (
    <Box>
          <Stack>
            <Heading size={'sm'}>Type of Employement</Heading>
            <Checkbox>Checkbox</Checkbox>
            <Checkbox>Checkbox</Checkbox>
            <Checkbox>Checkbox</Checkbox>
          </Stack>
          <Stack>
            <Heading size={'sm'}>Type of Employement</Heading>
            <Checkbox>Checkbox</Checkbox>
            <Checkbox>Checkbox</Checkbox>
            <Checkbox>Checkbox</Checkbox>
          </Stack>
          <Stack>
            <Heading size={'sm'}>Type of Employement</Heading>
            <Checkbox>Checkbox</Checkbox>
            <Checkbox>Checkbox</Checkbox>
            <Checkbox>Checkbox</Checkbox>
          </Stack>
        </Box>
  )
}

export default Filters