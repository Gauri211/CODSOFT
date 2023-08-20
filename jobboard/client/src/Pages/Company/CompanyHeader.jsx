import React from 'react'
import { Avatar, Box, Button, Card, CardBody, Divider, Flex, HStack, Heading, Image, Link, Stack, Text } from '@chakra-ui/react'
import { GiFire } from 'react-icons/gi'

const CompanyHeader = () => {
  return (
    <>
    <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
  border='none'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
    alt='Caffe Latte'
    h='100px'
    alignSelf='center'
  />

    <CardBody>
    <Flex justifyContent='space-between'>
    <Stack>
      <Heading size='2xl'>Company Name</Heading>
      <Link color='#7268bc' fontWeight={'semibold'}>www.companyname.com</Link>
      </Stack>
      {/* <Button py='2' px='3%' bgColor={'#7268bc'} color='white'>
        Post a Job
      </Button> */}
      </Flex>
      <HStack mt='2%' spacing={40}>
        <HStack>
            <Box border='1px solid black' borderRadius='50px' padding={'10%'}>
                <GiFire/>
            </Box>
            <Box>
            <Heading size='sm' color='grey'>Founded</Heading>
            <Text fontWeight={500}>Founded</Text>
            </Box>
        </HStack>
        <HStack>
            <Box border='1px solid black' borderRadius='50px' padding={'10%'}>
                <GiFire/>
            </Box>
            <Box>
            <Text>Founded</Text>
            <Text>Founded</Text>
            </Box>
        </HStack>
        <HStack>
            <Box border='1px solid black' borderRadius='50px' padding={'10%'}>
                <GiFire/>
            </Box>
            <Box>
            <Text>Founded</Text>
            <Text>Founded</Text>
            </Box>
        </HStack>
      </HStack>
    </CardBody>
    
</Card>
</>
  )
}

export default CompanyHeader