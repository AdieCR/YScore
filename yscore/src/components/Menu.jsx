import { Drawer, DrawerBody, DrawerContent, DrawerHeader, DrawerOverlay, Flex, Text } from '@chakra-ui/react'
import React from 'react'
import { Icon } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { MdOutlineDashboard } from 'react-icons/md';
import { TiHomeOutline } from 'react-icons/ti';
import { AiOutlineForm } from 'react-icons/ai';
import { BsGraphUp } from 'react-icons/bs';
import { ReactComponent as Logo } from '../images/Logo.svg';


export default function Menu(props) {
  const {onClose, isOpen} = props
  return (
    <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
    <DrawerOverlay />
    <DrawerContent>
      <DrawerHeader borderBottomWidth='1px'><Logo/></DrawerHeader>
      <DrawerBody>
        <Flex direction="column" mt="2rem" gap="7">
        <Link to="/"><Flex alignItems='center' gap="2"> <Icon as={TiHomeOutline} boxSize={6}/> <Text as="span">Home</Text></Flex></Link>
        <Link to="dashbord"><Flex alignItems='center' gap="2"><Icon as={MdOutlineDashboard} boxSize={6}/><Text as="span"> Dashboard</Text></Flex></Link>
        <Link to="form"><Flex alignItems='center' gap="2"><Icon as={AiOutlineForm} boxSize={6}/><Text as="span"> Form</Text></Flex></Link>
        <Link to="graph"><Flex alignItems='center' gap="2"><Icon as={BsGraphUp} boxSize={6}/><Text as="span"> Score history</Text></Flex></Link>
        </Flex>
      </DrawerBody>
    </DrawerContent>
  </Drawer>
  )
}
