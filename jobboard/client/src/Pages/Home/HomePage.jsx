import React from 'react';
import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';
import AllJobs from './AllJobs';
import Footer from '../../Component/Footer';

const HomePage = () => {
  return (
    <>
    <Box p={8} bgColor={'lavender'}>
      <Flex direction="column" alignItems="center">
        <Heading as="h1" size="xl" mb={4}>
          Welcome to Job Board
        </Heading>
        <Text fontSize="lg" textAlign="center" mb={6}>
          Bringing Talent and Businesses Together
        </Text>
        <Text fontSize="md" textAlign="center" mb={8}>
          We're here to bridge the gap between talent and businesses.
          Job Board connects job seekers with companies that value innovation and excellence.
        </Text>
        <Button colorScheme="blue" size="lg">
          Browse Job Listings
        </Button>
      </Flex>
    </Box>
    <AllJobs />
    <Footer />
    </>
  );
};

export default HomePage;

