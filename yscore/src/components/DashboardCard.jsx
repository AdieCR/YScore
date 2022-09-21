import React from 'react';
import { Box, Heading, Text, HStack } from '@chakra-ui/react';

function Feature({ title, desc, ...rest }) {
    return (
      <Box p={5} shadow='md' borderWidth='1px' {...rest}>
        <Heading fontSize='m'>{title}</Heading>
        <Text mt={4}>{desc}</Text>
      </Box>
    )
  }

function DashboardCard({title, text}) {
  return (
    <HStack spacing={8} maxW={'400px'}>
      <Feature
        title={title}
        desc={text}
      />
    </HStack>
  )
}

export default DashboardCard