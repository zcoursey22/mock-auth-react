import { Heading, Text } from "@chakra-ui/react";
import Link from "../components/Link";

const NotFoundPage = () => {
  return (
    <main>
      <Heading size="6xl">404</Heading>
      <div>
        <Text>Page not found.</Text>
        <Link to="" goBack>
          Go back
        </Link>
      </div>
    </main>
  );
};

export default NotFoundPage;
