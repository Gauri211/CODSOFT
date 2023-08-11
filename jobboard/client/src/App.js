import React from 'react';
import { ChakraProvider, CSSReset, Container, Flex, Spacer } from '@chakra-ui/react';
import AuthForms from './Pages/AuthForms';
import HomePage from './Pages/HomePage';
import Navbar from './Component/Navbar';

const App = () => {
  return (
    <ChakraProvider>
      {/* <CSSReset /> */}
      <Navbar />
        <Flex direction="column" alignItems="center">
          <AuthForms type="signup" />
        </Flex>
        <HomePage />
    </ChakraProvider>
  );
};

export default App;
