import React from 'react';
import { Box, Flex, Heading, Text, Button } from '@chakra-ui/react';

const HomePage = () => {
  return (
    <Box p={8}>
      <Flex direction="column" alignItems="center">
        <Heading as="h1" size="xl" mb={4}>
          Welcome to [Your Job Board Name]
        </Heading>
        <Text fontSize="lg" textAlign="center" mb={6}>
          Bringing Talent and Businesses Together
        </Text>
        <Text fontSize="md" textAlign="center" mb={8}>
          We're here to bridge the gap between talent and businesses.
          [Your Job Board Name] connects job seekers with companies that value innovation and excellence.
        </Text>
        <Button colorScheme="blue" size="lg">
          Browse Job Listings
        </Button>
      </Flex>
    </Box>
  );
};

export default HomePage;
