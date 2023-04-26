import { Flex, Image } from "@chakra-ui/react";
import { useState } from "react";
export default function Portfolio() {
  const [portfolioImage, setPortfolioImage] = useState("/port1.png");

  setTimeout(() => {
    portfolioImage == "/port1.png"
      ? setPortfolioImage("/port2.png")
      : portfolioImage == "/port2.png"
      ? setPortfolioImage("/port3.png")
      : portfolioImage == "/port3.png"
      ? setPortfolioImage("/port4.png")
      : portfolioImage == "/port4.png"
      ? setPortfolioImage("/port5.png")
      : portfolioImage == "/port5.png"
      ? setPortfolioImage("/port6.png")
      : portfolioImage == "/port6.png"
      ? setPortfolioImage("/port7.png")
      : portfolioImage == "/port7.png"
      ? setPortfolioImage("/port8.png")
      : portfolioImage == "/port8.png"
      ? setPortfolioImage("/port9.png")
      : portfolioImage == "/port9.png"
      ? setPortfolioImage("/port10.png")
      : portfolioImage == "/port10.png"
      ? setPortfolioImage("/port11.png")
      : portfolioImage == "/port11.png"
      ? setPortfolioImage("/port12.png")
      : portfolioImage == "/port12.png"
      ? setPortfolioImage("/port13.png")
      : setPortfolioImage("/port1.png");
  }, 1000);

  return (
    <>
      <Flex
        flexDir="column"
        h="100vh"
        w="100%"
        justifyContent="center"
        alignItems="center"
        bg="#242627"
      >
        <Image h="100%" w="100%" src={portfolioImage}></Image>
      </Flex>
    </>
  );
}
