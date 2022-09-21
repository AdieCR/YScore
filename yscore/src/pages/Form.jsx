import { Box, FormLabel, Heading, Select } from "@chakra-ui/react";
import React from "react";
import { Flex } from "@chakra-ui/react";

export default function Form() {
  return (
    <>
      <Heading align="center">
        Fill this questionnaire for more information
      </Heading>
      <Box mx="25%">
        <Flex
          width="100%"
          alignItems="center"
          flexDirection="column"
          gap="5"
          my="2rem"
          boxShadow="base"
          p="6"
          rounded="md"
          bg="white"
        >
          <Box width="100%">
            <FormLabel>Application type?</FormLabel>
            <Select placeholder="Select option">
              <option value="0">Individual</option>
              <option value="1">Joint application</option>
            </Select>
          </Box>
          <Box width="100%">
            <FormLabel>What is your living situation?</FormLabel>
            <Select placeholder="Select option">
              <option value="0">Renting</option>
              <option value="1">Owner</option>
              <option value="2">Mortgage</option>
              <option value="3">Other</option>
            </Select>
          </Box>
          <Box width="100%">
            <FormLabel>When did you open your last bank account?</FormLabel>
            <Select placeholder="Select option">
              <option value="0">Less than 6 month</option>
              <option value="1">6 month - 1 year</option>
              <option value="2">1 - 2 year</option>
              <option value="3">2 - 3 year</option>
              <option value="4">More than 3 years</option>
            </Select>
          </Box>
          <Box width="100%">
            <FormLabel>When did you open your first bank account?</FormLabel>
            <Select placeholder="Select option">
              <option value="0">Less than 6 month</option>
              <option value="1">6 month - 1 year</option>
              <option value="2">1 - 2 years</option>
              <option value="3">2 - 3 years</option>
              <option value="4">3 - 5 years</option>
              <option value="5">5 - 7 years</option>
              <option value="6">7 - 10 years</option>
              <option value="7">10 - 15 years</option>
              <option value="8">15 - 20 years</option>
              <option value="9">More than 20 years</option>
            </Select>
          </Box>
          <Box width="100%">
            <FormLabel>How many active bank accounts do you have?</FormLabel>
            <Select placeholder="Select option">
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4-5</option>
              <option value="5">6 - 8</option>
              <option value="6">9 - 12</option>
              <option value="7">More than 12</option>
            </Select>
          </Box>
          <Box width="100%">
            <FormLabel>What is your annual income?</FormLabel>
            <Select placeholder="Select option">
              <option value="0">Less than $20.000</option>
              <option value="1">$20.000 - 40.000</option>
              <option value="2">$40.000 - 60.000</option>
              <option value="3">$60.000 - 80.000</option>
              <option value="4">$80.000 - 100.000</option>
              <option value="5">$100.000 - 150.000</option>
              <option value="6">More than $150.000</option>
            </Select>
          </Box>
          <Box width="100%">
            <FormLabel>
              What is your current total bank balance? (Add up the balances on
              all your accounts.)
            </FormLabel>
            <Select placeholder="Select option">
              <option value="0">Less than $10.000</option>
              <option value="1">$10.000 - 20.000</option>
              <option value="2">$20.000 - 30.000</option>
              <option value="3">$30.000 - 50.000</option>
              <option value="4">$50.000 - 70.000</option>
              <option value="5">$70.000 - 100.000</option>
              <option value="6">$100.000 - 200.000</option>
              <option value="7">$200.000 - 300.000</option>
              <option value="8">$300.000 - 500.000</option>
              <option value="9">More than $500.000</option>
            </Select>
          </Box>
          <Box width="100%">
            <FormLabel>
             How long have you been employed?
            </FormLabel>
            <Select placeholder="Select option">
              <option value="0">Less than a year</option>
              <option value="1">1 year</option>
              <option value="2">2 years</option>
              <option value="3">3 years</option>
              <option value="4">4 years</option>
              <option value="5">5 years</option>
              <option value="6">6 years</option>
              <option value="7">7 years</option>
              <option value="8">8 years</option>
              <option value="9">9 years</option>
              <option value="10">More than 10 years</option>
            </Select>
          </Box>
          <Box width="100%">
            <FormLabel>how many times in the last two years did you miss a payment on any of your credit accounts?</FormLabel>
            <Select placeholder="Select option">
              <option value="0">None</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">More than 5 times</option>
            </Select>
          </Box>
          <Box width="100%">
            <FormLabel>How long ago was your last delinquency?</FormLabel>
            <Select placeholder="Select option">
              <option value="0">Never</option>
              <option value="1">Less than 6 months</option>
              <option value="2">6 months - 1 year</option>
              <option value="3">1 - 2 year</option>
              <option value="4">More than 3 years</option>
            </Select>
          </Box>
          <Box width="100%">
            <FormLabel>how many times in the last two years did you miss a payment on any of your credit accounts?</FormLabel>
            <Select placeholder="Select option">
              <option value="0">None</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">More than 5 times</option>
            </Select>
          </Box>
        </Flex>
      </Box>

    </>
  );
}
