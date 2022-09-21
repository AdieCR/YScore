import React from 'react'
import {VStack, Flex, Heading} from "@chakra-ui/layout"
import Graph from '../components/Graph'
import './GraphPage.css'

function GraphPage() {
  return (
    <VStack >
        <Flex>
            <Heading>
            Your <b>Score History</b>
            </Heading>
        </Flex>
        <Flex>
            View and monitor your credit history 
        </Flex>
        <div className='alignGraph'>
        <Graph/>
        </div>
    </VStack>
  )
}

export default GraphPage