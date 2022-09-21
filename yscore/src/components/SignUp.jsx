import React, { useState } from "react";
import {
  Modal, ModalOverlay, ModalContent, ModalHeader,
  ModalBody, ModalCloseButton, Container,
  Input, Text, Button, Box, Flex,
} from "@chakra-ui/react";
// import styles from "./LoginModal.module.css";
import { useUserContext } from '../contexts/userContext';

const SignUp = ({ setShowLoginModal, showSignupModal, setShowSignupModal }) => {
  const { userDetails, setUserDetails, loginUser } = useUserContext();
  const handleLogin = (e) => {
    e.preventDefault();
    loginUser();
  };

  const handleLoginFromSignup = (e) => {
  e.preventDefault();
  setShowSignupModal(false);
  setShowLoginModal(true);
  }
  console.log("showSignupModal", showSignupModal);
  return (
    <>
      <Modal
        border={"1px"}
        isOpen={showSignupModal}
        onClose={() => setShowSignupModal(false)}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <Container>
            <ModalHeader>Sign Up</ModalHeader>
            <ModalBody mb={5}>
            <Input
                mb={5}
                autoFocus
                type="text"
                placeholder="First Name"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, firstName: e.target.value })
                }
              />
              <Input
                mb={5}
                autoFocus
                type="text"
                placeholder="Last Name"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, lastName: e.target.value })
                }
              />
              <Input
                mb={5}
                autoFocus
                type="text"
                placeholder="Date of Birth"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, dateOfBirth: e.target.value })
                }
              />
              <Input
                mb={5}
                autoFocus
                type="email"
                placeholder="email"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, email: e.target.value })
                }
              />
              <Input
                type="password"
                placeholder="Password"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, password: e.target.value })
                }
              />
               <Input
                type="password"
                placeholder="Confirm Password"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, repassword: e.target.value })
                }
              />
            </ModalBody>
            <Flex
              direction={"column"}
              justify={"center"}
              alignItems={"center"}
              pb={5}
            >
              <Box mb={2}>
                <Button
                //   className={styles["login-btn"]}
                  colorScheme="blue"
                  type="submit"
                  onClick={(e) => handleLogin(e)}
                >
                  Creat New Account
                </Button>
              </Box>
              <Box>
                <Text>
                  Already have an Account?
                  <span 
                //   className={styles["sign-up-from-login"]}
                style={{color: "blue", cursor: "pointer"}}
                  onClick={(e) => handleLoginFromSignup(e)}
                  >
                    Sign In now!
                  </span>
                </Text>
              </Box>
            </Flex>
          </Container>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SignUp;