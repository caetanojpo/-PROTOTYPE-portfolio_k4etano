import { Flex } from "@chakra-ui/react";
import Portfolio from "../../components/portfolio/portfolio";

export default function Home() {
  return (
    <>
      {" "}
      <Flex bg={"#242627"} h="100%" w="100%">
        <Portfolio />
      </Flex>
    </>
  );
}
