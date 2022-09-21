import React, { useState } from "react";
import SignUp from "./SignUp";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Container,
  Input,
  Text,
  Button,
  Box,
  Flex,
} from "@chakra-ui/react";
// import styles from "./LoginModal.module.css";
import { useUserContext } from "../contexts/userContext";

const SignIn = ({ showLoginModal, setShowLoginModal }) => {
  const { userDetails, setUserDetails, loginUser, setIsUserLogged } =
    useUserContext();
  const [showSignupModal, setShowSignupModal] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    loginUser();
    setIsUserLogged(true);
  };
  const handleSignupFromLogin = (e) => {
    e.preventDefault();
    setShowLoginModal(false);
    setShowSignupModal(true);
  };


  return (
    <>
      {showSignupModal && (
        <SignUp
          setShowLoginModal={setShowLoginModal}
          showSignupModal={showSignupModal}
          setShowSignupModal={setShowSignupModal}
        />
      )}
      {showLoginModal && (
        <Modal
          border={"1px"}
          isOpen={showLoginModal}
          onClose={() => setShowLoginModal(false)}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <Container>
              <ModalHeader>Login</ModalHeader>
              <ModalBody mb={5}>
                <Input
                  mb={5}
                  autoFocus
                  type="email"
                  placeholder="Email"
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
                    Login
                  </Button>
                </Box>
                <Box>
                  <Text>
                    Need A New Account?
                    <span
                      //   className={styles["sign-up-from-login"]}
                      style={{ color: "blue", cursor: "pointer" }}
                      onClick={(e) => handleSignupFromLogin(e)}
                    >
                      Sign up now!
                    </span>
                  </Text>
                </Box>
              </Flex>
            </Container>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default SignIn;
