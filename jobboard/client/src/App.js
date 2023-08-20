import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import AuthForms from './Pages/AuthForms';
import HomePage from './Pages/Home/HomePage';
// import Navbar from './Component/Navbar';
import { Route, Routes } from 'react-router-dom';
import './App.css'
import CompanyProfile from './Pages/Company/CompanyProfile';
import Applicants from './Pages/Company/Applicants';
import Dashboard from './Pages/Company/Dashboard';
import ApplicantDetails from './Pages/Company/ApplicantDetails';

const App = () => {
  return (
    <ChakraProvider>
        <Routes>
          <Route path='auth' element={<AuthForms />} />
          <Route path='/' element={<HomePage/>} />
          <Route path='/companyprofile' element={<CompanyProfile/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/applicants' element={<Applicants/>} />
          <Route path='/applicant-details' element={<ApplicantDetails/>} />
        </Routes>
    </ChakraProvider>
  );
};

export default App;
