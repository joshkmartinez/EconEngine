import { Box, Flex, Heading, Text, Link, Image } from "rebass";
import { Label, Input } from "@rebass/forms";

const searchbar = () => {
  <Flex>
    <Box>
      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        name="email"
        type="email"
        placeholder="jane@example.com"
      />
    </Box>
    search
  </Flex>;
};

export default searchbar;
