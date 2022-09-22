import React from 'react'
import {VStack, Flex, Heading} from "@chakra-ui/layout"

import './GraphPage.css'
import {Button} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";

function GraphPage() {
    const navigate = useNavigate();
  return (
    <VStack >
        <Flex>
            <Heading>
            Recommendations for your credit Score
            </Heading>
        </Flex>
        
        <div className='alignGraph'>
        What affects your credit score the most?
        </div>
        <div>
            
        </div>
        <Button bgColor='#3DE6B9' size='md' className='buttonColor' onClick={() => navigate(-1)}>
   Return
  </Button>
    </VStack>
  )
}

export default GraphPage