import React from 'react'
import {VStack, Flex, Heading} from "@chakra-ui/layout"

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
    </VStack>
  )
}

export default GraphPage