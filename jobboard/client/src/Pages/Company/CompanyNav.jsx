import React from 'react'
import { Box, Button, Divider, Flex, HStack, Image, Text } from '@chakra-ui/react';

const CompanyNav = () => {
  return (
    <Box>
          <Flex justifyContent='space-between' p='2% 3% 1%'>
            <HStack>
              <Image
                objectFit='cover'
                maxW={{ base: '100%', sm: '60px' }}
                src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                alt='Caffe Latte'
                h='60px'
                alignSelf='center'
              />
              <Box>
                <Text>Company</Text>
                <Text>Name</Text>
              </Box>
            </HStack>
            <Button py='2' px='3%' bgColor='#7268bc' color='white' borderRadius={0} alignSelf='center'>
              Post a Job
            </Button>
          </Flex>
          <Divider />
        </Box>
  )
}

export default CompanyNav