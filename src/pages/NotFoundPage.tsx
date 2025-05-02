import { Heading, Text } from "@chakra-ui/react";
import { Link } from "../components";

const NotFoundPage = () => {
  return (
    <main>
      <Heading size="6xl">404</Heading>
      <div>
        <Text>Page not found.</Text>
        <Link to="/">Go home</Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
