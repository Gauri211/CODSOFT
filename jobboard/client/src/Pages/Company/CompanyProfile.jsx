import { Box, Button, Divider, Flex, GridItem, HStack, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import CompanyHeader from './CompanyHeader'
import axios from 'axios';
import html from '../../Assets/html.png'
import CompanyNav from './CompanyNav';

const CompanyProfile = () => {
    const [allJobs, setAllJobs] = useState([]);

    useEffect(() => {
        axios.get('https://dummyjson.com/posts?limit=6')
        .then(res => setAllJobs(res.data.posts))
      },[])

  return (
    <Flex>
    <Box flex='20%' bgColor={'lavender'} height={'90vh'} borderRight={'1px solid grey'} display={['none', null, 'inline']}>
        <Sidebar/>
    </Box>
    <Box flex='80%'>
        <CompanyNav />
        <Box m='2% 6%'>
        <CompanyHeader />
        <Divider />
        <Flex>
            <Box flex='2'>
                <Flex justify={'space-between'}>
                    <Heading size={'lg'} m='1% 3% 1%'>Company Profile</Heading>
                    <Button border={'none'} color={'#5e50c4'} bgColor={'white'} m='1% 3% 1%'>Edit</Button>
                </Flex>
                <Text m='0 5% 3% 3%'>
                    Nomad is a software platform for starting and running internet businesses. 
                    Millions of businesses rely on Stripe's software tools to accept payments, 
                    expand globally, and manage their businesses orgne. Stripe has been at the 
                    forefront of expanding internet commerce, powering new business models, and
                    supporting the latest platforms, from marketplaces to mobile commerce sites. 
                    We believe that growing the GDP of the internet is a problem rooted in code 
                    and design, not finance. Stripe is built for developers, makers, and creators. 
                    We work on solving the hard technical problems necessary to build global economic 
                    infrastructure-from designing highly reliable systems to developing advanced machine 
                    learning algorithms to prevent fraud.
                </Text>
            <Divider />
            <Flex justifyContent={'space-between'}>
            <Heading size={'lg'} m='1% 3% 1%'>Contact</Heading>
            <Button border={'none'} color={'#5e50c4'} bgColor={'white'} m='1% 3% 1%'>Edit</Button>
            </Flex>
            <Stack ml='3%' mb='3%'>
            <HStack spacing={6}>
            <Button variant={'outline'} borderRadius={10} color={'#5e50c4'} border={'1px solid #5e50c4'}>www.companyname.com</Button>
            <Button variant={'outline'} borderRadius={10} color={'#5e50c4'} border={'1px solid #5e50c4'}>www.companyname.com</Button>
            </HStack>
            <HStack spacing={6}>
            <Button variant={'outline'} borderRadius={10} color={'#5e50c4'} border={'1px solid #5e50c4'}>www.companyname.com</Button>
            <Button variant={'outline'} borderRadius={10} color={'#5e50c4'} border={'1px solid #5e50c4'}>www.companyname.com</Button>
            </HStack>
            </Stack>
            <Divider />
            <Heading size={'lg'} m='1% 3% 1%'>Working at Nomad</Heading>
            
            </Box>
            <Box flex='1'>
                <Flex justifyContent={'space-between'}>
                <Heading size={'lg'} m='1% 3% 1%'>Tech Stacks</Heading>
                <Button border={'none'} color={'#5e50c4'} bgColor={'white'} m='1% 3% 1%'>Edit</Button>
                </Flex>
                <SimpleGrid columns={3}>
                {allJobs.map((index) => (
                    <GridItem key={index} align='center'>
                        <Image src={html}
                            objectFit='cover'
                            maxW={'80px'}
                            h='80px'
                        />
                        <Text>Html</Text>
                    </GridItem>
                ))}
                </SimpleGrid>
                <Divider />
                <Heading size={'lg'} m='3% 3% 1%'>Office Locations</Heading>
                <Heading size={'sm'} m='3% 3% 1%'>Office Locations</Heading>
                <Heading size={'sm'} m='3% 3% 1%'>Office Locations</Heading>
                <Heading size={'sm'} m='3% 3% 1%'>Office Locations</Heading>

            </Box>
        </Flex>
            
        </Box>
    </Box>
    </Flex>
  )
}

export default CompanyProfile