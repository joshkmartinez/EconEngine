import React, { useState } from "react";
import { Flex, Box, Heading, Link, Text, Button, Image } from "rebass";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Search", href: "/search" },
];

const Header = ({}) => {
  return (
    <Box py={[3, 2]} sx={{ borderBottom: "3px solid #23272A" }}>
      <Flex
        mx="auto"
        width={1}
        mb={[1, 0]}
        px={[1, 3, 6]}
        flexDirection={["column", "row"]}
        overflow
      >
        <Flex
          width={[1, 1 / 4]}
          ml={[0, 1, 2, 3]}
          justifyContent={["center", "flex-start"]}
        >
          <Link href="/" sx={{ textDecoration: "none" }} color="text">
            <Flex>
              <Image
                sx={{ borderRadius: 9999 }}
                mx={1}
                height="3em"
                width="3em"
                src="/logo.svg"
              />

              <Heading fontSize={3} alignSelf="center">
                EconEngine
              </Heading>
            </Flex>
          </Link>
        </Flex>
        <Flex width={[1, 1 / 2]} justifyContent={"center"} my={[2, 1, 0]}>
          {navLinks.map((i) => (
            <Link
              alignSelf="center"
              href={i.href}
              color="text"
              sx={{
                textDecoration: "none",
                ":hover": {
                  color: "background",
                  bg: "primary",
                  borderRadius: 10,
                },
              }}
              px={3}
              key={i.href}
            >
              <Text fontSize={3}>{i.name}</Text>
            </Link>
          ))}
        </Flex>

        <Flex
          width={[1, 1 / 4]}
          mr={[0, 1, 2, 3]}
          justifyContent={["center", "flex-end"]}
        ></Flex>
      </Flex>
    </Box>
  );
};

export default Header;
