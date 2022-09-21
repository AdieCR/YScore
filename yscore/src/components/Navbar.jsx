import {Button, Flex, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import SignIn from "./SignIn";
import { HamburgerIcon } from "@chakra-ui/icons";
import Menu from "./Menu";
import { useUserContext } from "../contexts/userContext";

function Navbar() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const {isUserLogged} = useUserContext();
  const { isOpen, onOpen, onClose } = useDisclosure();
  

  return (
    <Flex p="1rem" justifyContent="space-between">
      <HamburgerIcon fontSize="2rem" onClick={onOpen} />
      <Menu onClose={onClose} isOpen={isOpen}/>

      {isUserLogged ? <Button>Log out</Button> :<><Button onClick={() => setShowLoginModal(true)}>Sign In/Up</Button>
      <SignIn
        showLoginModal={showLoginModal}
        setShowLoginModal={setShowLoginModal}
      /></>}
      
    </Flex>
  );
}

export default Navbar;
