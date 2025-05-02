import { Heading, Highlight, Text } from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to="/">
          <Heading size="xl">
            <Highlight
              query="-"
              matchAll
              styles={{ color: "teal", fontWeight: "bold" }}
            >
              mock-auth-react
            </Highlight>
          </Heading>
        </NavLink>
        <Text>GitHub icon</Text>
        <Text>NPM icon</Text>
      </header>
      <Outlet />
      <footer>
        <Text fontSize="small" color="gray">
          Developed by Zach Coursey
        </Text>
      </footer>
    </>
  );
};

export default Layout;
