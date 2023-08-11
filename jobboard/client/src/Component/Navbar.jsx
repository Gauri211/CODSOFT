import React from 'react';
import { Box, Flex, Spacer, Heading, Button, IconButton, Collapse, useDisclosure } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box p={4} bg="#9370db">
      <Flex alignItems="center">
        <Heading size="md" color="white">
          YourJobBoard
        </Heading>
        <Spacer />
        <IconButton
          display={{ base: 'block', md: 'none' }}
          variant="ghost"
          icon={<GiHamburgerMenu />}
          onClick={onToggle}
        />
      </Flex>
      <Collapse in={isOpen} animateOpacity>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          alignItems={{ base: 'center', md: 'flex-end' }}
          mt={{ base: 2, md: 0 }}
          pt={{ base: 2, md: 0 }}
        >
          <Button colorScheme="white" variant="link" mb={{ base: 2, md: 0 }} mr={{ base: 0, md: 4 }}>
            Home
          </Button>
          <Button colorScheme="white" variant="link" mb={{ base: 2, md: 0 }} mr={{ base: 0, md: 4 }}>
            Job Listings
          </Button>
          <Button colorScheme="white" variant="link" mb={{ base: 2, md: 0 }} mr={{ base: 0, md: 4 }}>
            Candidate Dashboard
          </Button>
          <Button colorScheme="white" variant="link">
            Employer Dashboard
          </Button>
        </Flex>
      </Collapse>
    </Box>
  );
};

export default Navbar;
