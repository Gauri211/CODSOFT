import React from 'react';
import { Checkbox, Heading, Stack, VStack } from '@chakra-ui/react'
// import { GiHamburgerMenu } from 'react-icons/gi';

const Sidebar = ({ children }) => {

  return (
    <VStack>
          <Stack>
            <Heading size={'lg'}>Job Board</Heading>
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
        </VStack>
  );
};

export default Sidebar;
