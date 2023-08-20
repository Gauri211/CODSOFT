import React from 'react'
import { Box, Divider, Flex, HStack, Heading, Text, Avatar, Stack, Progress } from '@chakra-ui/react';
import { BsFillCircleFill } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';

const ApplicantProfile = () => {
  return (
    <Stack spacing={5}>
                <HStack>
                    <Avatar size={'lg'} />
                    <Heading size={'lg'}>Jerome Bell</Heading>
                </HStack>
                <Box bgColor={'gray.50'} p='5%'>
                    <Flex justify={'space-between'}>
                        <Heading size={'sm'} color={'grey'}>Applied Jobs</Heading>
                        <Text color='gray'>2 days ago</Text>
                    </Flex>
                    <Divider />
                    <Heading size='sm'>Product Development</Heading>
                    <Text color={'grey'}>Full-time</Text>
                </Box>
                <Stack bgColor={'gray.50'} p='5%'>
                    <Flex justify={'space-between'}>
                        <Heading size={'sm'} color={'grey'}>Stage</Heading>
                        <Flex color='blue' align={'center'}><BsFillCircleFill/>  Interview</Flex>
                    </Flex>
                    <Progress value={80} />
                </Stack>
                <Divider />
                <Heading size='md'>Contact</Heading>
                <HStack spacing={3}>
                    <MdOutlineEmail size={25} color='grey'/>
                    <Stack spacing='-1'>
                        <Text color={'grey'}>Email</Text>
                        <Text>test@test.com</Text>
                    </Stack>
                </HStack>
                <HStack>
                    <MdOutlineEmail size={25} color='grey'/>
                    <Stack spacing='-1'>
                        <Text color={'grey'}>Phone</Text>
                        <Text>test@test.com</Text>
                    </Stack>
                </HStack>
                <HStack>
                    <MdOutlineEmail size={25} color='grey'/>
                    <Stack spacing='-1'>
                        <Text color={'grey'}>LinkedIn</Text>
                        <Text>test@test.com</Text>
                    </Stack>
                </HStack>
        </Stack>
  )
}

export default ApplicantProfile