import React from "react";
import { Box, VStack, Image } from "@chakra-ui/react";
import Logo from "../images/Logo.svg";
import styles from "../css/Home.module.css";

function HomePage() {
  return (
    <>
      <VStack className="div-container">
        <Box bgColor={"#e0dedea1"}>
          <Box className={styles["top-div"]}>
            <Box className={styles["top-div-content"]}>
              <Box>
                <Image className={styles["logo"]} src={Logo} alt="logo" />
              </Box>
                <Box className={styles["text-div"]} m={'auto'}>
                Your credit score can have a big impact on your financial future. Sign up for YScore to get your credit score for free! Join us and get the tools you need to help understand, manage, and master your credit - in under 3 minutes. Checking your credit score with YScore won't hurt your score.
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className={styles["bottom-div"]}></Box>
      </VStack>
    </>
  );
}

export default HomePage;
