import { Box, Select } from "@chakra-ui/react";
import React from "react";
import { Flex} from '@chakra-ui/react'

export default function Form() {
  return (
    <Box mx="25%">
    <Flex width="100%" alignItems='center' flexDirection="column" gap="5" mt="5rem" boxShadow='base' p='6' rounded='md' bg='white'>
        
    <Select placeholder="Select option" width="50%">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
    <Select placeholder="Select option" width="50%">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
    <Select placeholder="Select option" width="50%">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>
    <Select placeholder="Select option" width="50%">
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
      <option value="option3">Option 3</option>
    </Select>

 
    </Flex>
       </Box>
  );
}
