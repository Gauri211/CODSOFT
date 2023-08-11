import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Heading,
  Divider,
} from '@chakra-ui/react';

const AuthForms = ({ type }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here based on the type (signup or login)
    if (type === 'signup') {
      console.log('First Name:', firstName);
      console.log('Last Name:', lastName);
    }
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Box width="400px" p={4} borderWidth={1} borderRadius="md" boxShadow="md">
      <Heading as="h2" size="lg" mb={4}>
        {type === 'signup' ? 'Sign Up' : 'Log In'}
      </Heading>
      <form onSubmit={handleSubmit}>
        {type === 'signup' && (
          <Stack spacing={4}>
            <FormControl isRequired>
              <FormLabel>First Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter your first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Last Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter your last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormControl>
          </Stack>
        )}
        <Stack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="100%">
            {type === 'signup' ? 'Sign Up' : 'Log In'}
          </Button>
        </Stack>
      </form>
      {type === 'signup' && (
        <>
          <Divider my={4} />
          <p>Already have an account? Log in <a href="#">here</a>.</p>
        </>
      )}
    </Box>
  );
};

export default AuthForms;
