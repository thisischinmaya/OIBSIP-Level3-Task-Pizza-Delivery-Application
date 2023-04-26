import { Box, Img } from "@chakra-ui/react";
import React from "react";
import logo from "../Assets/pizza.webp";
const Header = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"} p={5}>
      <Img objectFit={"cover"} w={200} src={logo} />
    </Box>
  );
};

export default Header;
