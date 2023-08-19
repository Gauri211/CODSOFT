import { useState, useEffect } from 'react'
import { 
    Text, 
    SimpleGrid, 
    Card, CardBody, Stack, Heading, GridItem, Button, Flex, HStack, Box, Divider, Image, useDisclosure,
    AlertDialog,
  AlertDialogOverlay,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
     } from '@chakra-ui/react';
import axios from 'axios';
import Filters from './Filters';
import { AiOutlineClose } from 'react-icons/ai'

const AllJobs = () => {
    const [allJobs, setAllJobs] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure();

    useEffect(() => {
        axios.get('https://dummyjson.com/posts?limit=6')
        .then(res => setAllJobs(res.data.posts))
      },[])
      
  return (
      <Flex p='2% 10%' flexDir={['column', null, 'row']}>
        <Box flex='5%' p='0% 2% 0 5%' className='filter'>
          <Filters />
        </Box>
        <Button className='filter-btn' onClick={onOpen} variant={'outline'} color={'#5e50c4'} border={'1px solid #5e50c4'}>Filter</Button>
        <AlertDialog isOpen={isOpen}>
        <AlertDialogOverlay>
          <AlertDialogContent
            maxW="1300px"
            boxShadow={
              "-4px -4px 6px rgba(0, 0, 0, 0.25), 4px 4px 10px rgba(0, 0, 0, 0.25)"
            }
          >
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Filters
              <Button float="right" bgColor={"#fff"} onClick={onClose}>
                <AiOutlineClose w="4" h="4" />
              </Button>
            </AlertDialogHeader>
            <AlertDialogBody>
              <Filters />
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button 
                bgColor={"#7268bc"} 
                _hover={{ bgColor: "#5e50c4" }}
                width={"120px"}>
                Apply
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
        <Divider orientation='vertical' />
        <Box flex='55%'>
      <SimpleGrid columns={1} justifyContent='space-between' rowGap={3} columnGap={3}>
        {allJobs.map((index) => {
          return(
            <GridItem key={index} padding={'10px'}>
              <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
                padding={'10px'}
                justifyContent={'space-between'}
              >
                <Flex>
                <Image
                  objectFit='cover'
                  maxW={'100px'}
                  h='100px'
                  src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                  alt='Caffe Latte'
                  alignSelf={'center'}
                />
                <Stack>
                  <CardBody>
                    <Heading size='md'>The perfect latte</Heading>
                    <Text color={'grey'} fontWeight={'medium'}>
                      Caffè latte is a 
                    </Text>
                    <Text color={'grey'}>
                      Caffè latte is a 
                    </Text>
                    <HStack>
                      <Text border={'1px solid green'} p='1% 4%' borderRadius={'20px'}>Hello</Text>
                      <Text border={'1px solid green'} p='1% 4%' borderRadius={'20px'}>Hello</Text>
                    </HStack>
                  </CardBody>
                </Stack>
                </Flex>
                    <Button 
                      variant='solid' 
                      bgColor='#7268bc' 
                      _hover={{ bgColor: "#5e50c4" }}
                      alignSelf='center' 
                      mr='3%' 
                      borderRadius={0} 
                      color={'white'}
                      padding={'1% 3%'}
                    >
                      Apply
                    </Button>
              </Card> 
            </GridItem>
        )})}
      </SimpleGrid>
      </Box>
      </Flex>
  )
}

export default AllJobs;