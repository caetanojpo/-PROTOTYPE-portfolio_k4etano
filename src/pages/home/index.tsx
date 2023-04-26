import { Center, Flex, Image, Link } from "@chakra-ui/react";
import Portfolio from "../../components/portfolio/portfolio";
import "./style.scss";

export default function Home() {
  return (
    <>
      <Flex h="100%" w="100%" maxW="100vw" flexDirection="column">
        <Portfolio />
        <Flex h="100vh" bg="#242627">
          <Flex w="50%">oi</Flex>
          <Center w="50%">
            <Flex className="avatar" position="relative">
              <Link
                href="https://www.linkedin.com/in/caetanojpo/"
                target="_blank"
              >
                <Image
                  h="100%"
                  w="100%"
                  src={"avatar.png"}
                  position="absolute"
                  className="avatar-main"
                ></Image>
                <Image
                  className="avatar-animation"
                  h="100%"
                  w="100%"
                  src={"avatarbg.png"}
                ></Image>
              </Link>
            </Flex>
          </Center>
        </Flex>
      </Flex>
    </>
  );
}
