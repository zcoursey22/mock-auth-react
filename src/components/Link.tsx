import { Link as ChakraLink } from "@chakra-ui/react";
import { ReactNode } from "react";
import { NavLink, NavLinkProps, useNavigate } from "react-router-dom";

interface Props {
  children: ReactNode;
  goBack?: boolean;
}

const Link = ({ children, to, goBack }: Props & NavLinkProps) => {
  const navigate = useNavigate();
  return (
    <ChakraLink asChild colorPalette="teal" variant="underline">
      {goBack ? (
        <span onClick={() => navigate(-1)}>{children}</span>
      ) : (
        <NavLink to={to}>{children}</NavLink>
      )}
    </ChakraLink>
  );
};

export default Link;
