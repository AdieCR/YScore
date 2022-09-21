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
                Establishing a good credit score can sometimes be a complex, and
                not always clear process, but it shouldn't be. We in YScore
                believe it is vital for your overall financial picture to
                understand and know how to improve your credit score. Thanks to
                YScore, you can easily get your score and important insight on
                your credit score and on how to improve it.
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
