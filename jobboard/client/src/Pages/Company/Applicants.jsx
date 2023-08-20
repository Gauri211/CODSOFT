import { Box, Button, Flex, Heading, Input, Text, Table, Thead, Tbody, Tr, Th, Td, Checkbox, Avatar, TableContainer } from '@chakra-ui/react';
import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';
import axios from 'axios';
import CompanyNav from './CompanyNav';


const Applicants = () => {
  const [allJobs, setAllJobs] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/posts?limit=6')
      .then(res => setAllJobs(res.data.posts))
  }, []);

  return (
    <Flex>
      <Box flex='20%' bgColor='lavender' height='90vh' borderRight='1px solid grey' display={['none', null, 'inline']}>
        <Sidebar />
      </Box>
      <Box flex='80%'>
        <CompanyNav />
        <Flex align='center' justify='space-between' m='1% 3%'>
          <Heading size='lg'>Total Applicants: 19</Heading>
          <Input w='300px' />
        </Flex>
        <Box p={'2%'}>
        <TableContainer borderColor='gray.300' borderWidth='1px' borderRadius={'20px'} padding={'1% 2% 2%'}>
        <Table variant='striped' colorScheme='purple'>
          <Thead>
            <Tr>
              <Th>
                <Checkbox colorScheme='purple' />
              </Th>
              <Th>Name</Th>
              <Th>Hiring Stage</Th>
              <Th>Applied Date</Th>
              <Th>Job Role</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {allJobs.map((user, index) => (
              <Tr key={user.id}>
                <Td>
                  <Checkbox colorScheme='purple' />
                </Td>
                <Td>
                  <Flex align='center'>
                    <Avatar name='John Doe' src='' size='sm'/>
                    <Text ml={3}>John Doe</Text>
                  </Flex>
                </Td>
                <Td>
                  <Box display='inline-block' p='1% 4%' borderRadius='20px'>
                    <Text>Hello</Text>
                  </Box>
                </Td>
                <Td>2023-08-15</Td>
                <Td>Software Engineer</Td>
                <Td>
                  <Button colorScheme='purple' variant='outline' size='sm'>
                    See Application
                  </Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
        </TableContainer>
        </Box>
      </Box>
    </Flex>
  );
}

export default Applicants;
