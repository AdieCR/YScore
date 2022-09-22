import React, { useState, useEffect } from 'react';
import ScoreBar from '../components/scorebar/ScoreBar';
import { Flex, Box } from '@chakra-ui/react';
import DashboardCards from '../components/dashboardCards/DashboardCards';
import ProfileExplanationText from '../components/ProfileExplanationText';
import { useUserContext } from '../contexts/userContext';
// import './dashboardCard.css';

function Dashboard() {
const [mainScore, setMainScore] = useState(0);

const { userDetails, setUserDetails, isUserLogged, setIsUserLogged } = useUserContext();

useEffect(() => {
    console.log(userDetails);
    setMainScore(userDetails?.fico || 700);
},[userDetails]);

  return (
    <Box overflowY={'scroll'}>
        <Flex justify={'center'} w="100vw">
            <Box>
                <ScoreBar mainScore={mainScore} />
            </Box>
        </Flex>
        <Flex justify={'center'} w="100vw" pt={'25px'}>
            <Box maxW={'400px'}>
                <ProfileExplanationText mainScore={mainScore} />
            </Box>
        </Flex>
        <Flex justify={'center'} w="100vw" className='profile-card-container'>
            <Box>
                <DashboardCards/>
            </Box>
        </Flex>
    </Box>
  )
}

export default Dashboard
