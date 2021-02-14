import React from "react";
import Layout from "../components/layout";
import { Box, Flex, Heading, Text, Link, Image } from "rebass";
import Searchbar from "../components/searchbar";

const Landing = () => {
  return (
    <Layout>
      <Flex flexDirection={["column", "row"]} mt={[ 4, 3]}>
        <Flex width={[1, 1 / 2]} justifyContent="center">
          <Image width="16em" src="/undraw_Web_search_re_efla.svg" />
        </Flex>
        <Flex width={[1, 1 / 2]} alignSelf="center" pt={[1, 2, 3]}>
          <Box>
            <Heading fontSize={[3, 4, 5]}>
              EconEngine is a search engine for financial assistance resources
              during the COVID-19 pandemic.
            </Heading>
          </Box>
        </Flex>
      </Flex>

      <Flex my={[2, 3, 4]}>
        <Searchbar />
      </Flex>

      <Flex justifyContent="center" flexDirection={["column", "row"]}>
        <Flex width={[1, 1 / 2]} alignSelf="center" mt={[4, 3, 1]}>
          <Box>
            <Heading fontSize={[2, 3, 4]}>
              Finding financial information on Google is confusing and
              overwhelming.
            </Heading>
          </Box>
        </Flex>
        <Flex width={[1, 1 / 2]} justifyContent="center">
          <Image
            mt={[2, 1, 0]}
            height="12em"
            width="12em"
            src="/undraw_File_searching_re_3evy.svg"
          />
        </Flex>
      </Flex>
      <Flex justifyContent="center">
        <Image
          mt={[2, 1, 0]}
          height={["100%", "75%"]}
          width={["100%", "75%"]}
          src="ex.png"
        />
      </Flex>
      <Flex width={[1, 4 / 5]} mx="auto" my={[3, 4, 5]}>
        <Heading fontSize={[3, 4, 5]} textAlign="center">
          EconEngine gives you accurate, relevant, and straight up answers to
          your financial questions.
        </Heading>
      </Flex>
      <Flex my={[2, 3, 4]}>
        <Searchbar />
      </Flex>
    </Layout>
  );
};

export default Landing;
