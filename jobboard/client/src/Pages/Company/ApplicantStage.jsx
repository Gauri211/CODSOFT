import React from 'react'
import { Box, Button, Divider, Flex, HStack, Heading, Text, Avatar, Stack, Tabs, TabList, TabPanels, TabPanel, Tab } from '@chakra-ui/react';

const ApplicantStage = () => {
  return (
    <Tabs>
  <TabList>
    <Tab>Hiring Progress</Tab>
    <Tab>Schedule Interview</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
      <Stack p='2%'>
                    <Heading size='md' m='1% 0 2%'>Current Stage</Heading>
                    <Box height={'60px'} bgColor={'lavender'}></Box>
                    <Heading size='sm'>Stage info</Heading>
                    <Flex>
                        <Box flex='1'>
                            <Text fontWeight={500} color='grey'>Interview Date</Text>
                            <Text fontWeight={500}>10-13 July 2021</Text>
                        </Box>
                        <Box flex='1'>
                            <Text fontWeight={500} color='grey'>Interview Status</Text>
                            <Box display='inline-block' p='1% 4%' borderRadius='20px' bgColor={'yellow.100'}>
                                <Text color={'orange'} fontWeight={500}>On Progress</Text>
                            </Box>
                        </Box>
                    </Flex>
                    <Text fontWeight={500} color='grey'>Interview Date</Text>
                    <Text fontWeight={500}>
                        Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Fugiat nam aperiam adipisci 
                        maxime accusamus provident quod assumenda rem 
                    </Text>
                    <Button colorScheme='purple' variant='outline' size='sm' disabled width={'200px'} mt='2%'>
                        See Application
                    </Button>
                    <Divider />
                    <Flex justify={'space-between'}>
                        <Heading size='sm' mt='2%'>Notes</Heading>
                        <Button border={'none'} color={'#5e50c4'} bgColor={'white'} m='1% 3% 1%'>Add Notes</Button>
                    </Flex>
                    <HStack border={'1px solid lightgrey'} p='2%'>
                        <Avatar />
                        <Box alignSelf='center'>
                            <Heading size='sm'>Notes</Heading>
                            <Text color='gray'>
                                Lorem ipsum dolor sit amet consectetur, 
                                adipisicing elit. Aliquam vitae dolore distinctio! 
                                Nobis quod ipsam earum pariatur laboriosam deserunt 
                            </Text>
                        </Box>
                    </HStack>
                </Stack>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
  )
}

export default ApplicantStage