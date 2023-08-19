import React from 'react';
import { ChakraProvider, CSSReset, Container, Flex, Spacer } from '@chakra-ui/react';
import AuthForms from './Pages/AuthForms';
import HomePage from './Pages/HomePage';
import Navbar from './Component/Navbar';
import { Route, Routes } from 'react-router-dom';
import './App.css'

const App = () => {
  return (
    <ChakraProvider>
        <Navbar />
        <Routes>
          <Route path='auth' element={<AuthForms />} />
          <Route path='/' element={<HomePage/>} />
        </Routes>
    </ChakraProvider>
  );
};

export default App;
