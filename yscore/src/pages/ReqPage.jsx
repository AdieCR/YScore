import React, {useEffect, useState} from 'react'
import {VStack, Flex, Heading} from "@chakra-ui/layout";
import './GraphPage.css'
import {Button, Box} from '@chakra-ui/react'
import { useNavigate } from "react-router-dom";
import { useUserContext } from '../contexts/userContext';

function ReqPage() {
  const [userData, setUserData] = useState({});

const { userDetails, setUserDetails, isUserLogged, setIsUserLogged } = useUserContext();  

  useEffect(() => {
    console.log(userDetails);
    setUserData(userDetails?.data)
  },[userDetails]);

    const navigate = useNavigate();
  return (
    <VStack>
      <Flex>
        <Heading>Recommendations for your credit Score</Heading>
      </Flex>

      <Box className="alignGraph">What affects your credit score the most?</Box>

      
      <Flex direction="row" width="50%">
        <Flex direction="column"  width="100%" mt="5rem">
          <Box ml="auto" p="1rem" border="1px solid black" width="60%" bgColor="green" color="white">Income</Box>
          <Box p="1rem" border="1px solid black" bgColor="green" color="white">Total account balance</Box>
        </Flex>
        <Flex direction="column"  width="100%" mt="8.6rem" mb="3rem">
          <Box p="1rem" border="1px solid black" bgColor="red" color="white">Missing payements</Box>
          <Box p="1rem"border="1px solid black" bgColor="red" color="white" width="60%">Application type</Box>
        </Flex>
      </Flex>

      <Box boxShadow="base" p="6" rounded="md" bg="white" mb="2rem"> If your annual income is in range $20 000 - 40 000 and you apply for loan as a couple, your score will be 740.</Box>

      <Button
        bgColor="#3DE6B9"
        size="md"
        className="buttonColor"
        onClick={() => navigate(-1)}
      >
        Return
      </Button>
    </VStack>
  );
}

export default ReqPage;
