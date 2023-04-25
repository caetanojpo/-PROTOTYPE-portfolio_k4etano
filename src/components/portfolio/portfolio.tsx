import { Flex, Image } from "@chakra-ui/react";
import { useState } from "react";
export default function Portfolio() {
  const [portfolioImage, setPortfolioImage] = useState("/portfolio.png");

  setTimeout(() => {
    if (portfolioImage === "/portfolio.png") {
      setPortfolioImage("/portfolio2.png");
    } else if (portfolioImage === "/portfolio2.png") {
      setPortfolioImage("/portfolio3.png");
    } else {
      setPortfolioImage("/portfolio.png");
    }
  }, 2800);

  return (
    <>
      <Flex h="100vh" w="100vw" justifyContent="center" alignItems="center">
        <Image h="100%" w="100%" src={portfolioImage}></Image>
      </Flex>
    </>
  );
}
