import React, { useState, useEffect } from 'react';
import ScoreBar from '../components/scorebar/ScoreBar';
import { Flex, Box } from '@chakra-ui/react';
import DashboardCards from '../components/DashboardCards';
import ProfileExplanationText from '../components/ProfileExplanationText';

function Dashboard() {
const [mainScore, setMainScore] = useState(0);

useEffect(() => {
    setMainScore(760);
},[]);

  return (
    <>
        <Flex justify={'center'} w="100vw">
            <Box>
                <ScoreBar mainScore={mainScore} />
            </Box>
        </Flex>
        <Flex justify={'center'} w="100vw" pt={36}>
            <Box maxW={'400px'}>
                <ProfileExplanationText mainScore={mainScore} />
            </Box>
        </Flex>
        <Flex justify={'center'} w="100vw" pt={36}>
            <Box>
                <DashboardCards/>
            </Box>
        </Flex>
    </>
  )
}

export default Dashboard
