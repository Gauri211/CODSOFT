import { Box, Button, Flex, HStack, Heading } from '@chakra-ui/react';
import React from 'react';
import Sidebar from './Sidebar';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import ApplicantStage from './ApplicantStage';
import ApplicantProfile from './ApplicantProfile';
import CompanyNav from './CompanyNav';

const ApplicantDetails = () => {

  return (
    <Flex>
      <Box flex='20%' bgColor='lavender' height='90vh' borderRight='1px solid grey' display={['none', null, 'inline']}>
        <Sidebar />
      </Box>
      <Box flex='80%'>
            <CompanyNav />
        <Flex align='center' justify='space-between' m='1% 3%'>
          <HStack>
          <Heading size='lg'><AiOutlineArrowLeft/></Heading>
          <Heading size='lg'>Applicant Details</Heading>
          </HStack>
          <Button border={'none'} color={'#5e50c4'} bgColor={'white'}>Download Resume</Button>
        </Flex>
        <Flex p={'2%'}>
            <Box flex='25%' border='1px solid lightgrey' p='2%' mr='1%'>
                <ApplicantProfile />
            </Box>
            <Box flex='65%' border='1px solid lightgrey' ml='1%'>
                <ApplicantStage />
            </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

export default ApplicantDetails;
