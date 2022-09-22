import React from "react";
import {
  Modal, ModalOverlay, ModalContent, ModalHeader,
  ModalBody, ModalCloseButton, Container,
  Input, Text, Button, Box, Flex,
} from "@chakra-ui/react";
// import styles from "./LoginModal.module.css";
import { useUserContext } from '../contexts/userContext';
import { loginAxios, signupAxios } from "../lib/apiFuncrtionality";
import { useNavigate } from "react-router-dom";

const SignUp = ({ setShowLoginModal, showSignupModal, setShowSignupModal }) => {
  const { userDetails, setUserDetails, setIsUserLogged } = useUserContext();
  const navigate = useNavigate();
  
  const handleSignup = async (e) => {
    e.preventDefault();
    const user = await signupAxios(userDetails);
    console.log("user signed up", user);
    if (user) {
      setIsUserLogged(true);
      setShowSignupModal(false);
      navigate("/form");
    }
  };

  const handleLoginFromSignup = (e) => {
  e.preventDefault();
  setShowSignupModal(false);
  setShowLoginModal(true);
  }
  
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
                name= "firstName"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
                }
              />
              <Input
                mb={5}
                autoFocus
                type="text"
                placeholder="Last Name"
                name= "lastName"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
                }
              />
              <Input
                mb={5}
                autoFocus
                type="text"
                placeholder="Date of Birth"
                name = "dateOfBirth"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
                }
              />
              <Input
                mb={5}
                autoFocus
                type="email"
                placeholder="email"
                name = "email"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
                }
              />
              <Input
                type="password"
                placeholder="Password"
                name = "password"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
                }
              />
               <Input
                type="password"
                placeholder="Confirm Password"
                name = "repassword"
                onChange={(e) =>
                  setUserDetails({ ...userDetails, [e.target.name]: e.target.value })
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
                  colorScheme="blue"
                  type="submit"
                  onClick={(e) => handleSignup(e)}
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