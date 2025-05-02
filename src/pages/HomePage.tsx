import { Heading, Text, Button, ButtonGroup } from "@chakra-ui/react";
import Link from "../components/Link";
import { useAuth } from "../../lib/main";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <main>
      <Heading size="6xl">Home</Heading>
      <div>
        {user ? (
          <>
            <Text>
              You're authenticated! See <Link to="/private">more</Link>?
            </Text>
            <ButtonGroup colorPalette="teal">
              <Button variant="outline" rounded="full" onClick={() => {}}>
                Log out
              </Button>
            </ButtonGroup>
          </>
        ) : (
          <>
            <Text>
              If you want to see <Link to="/private">more</Link> you'll need to
              log in.
            </Text>
            <ButtonGroup colorPalette="teal">
              <Button
                variant="outline"
                rounded="full"
                onClick={() => navigate("/login")}
              >
                Log in
              </Button>
              <Button
                variant="solid"
                rounded="full"
                onClick={() => navigate("/login")}
              >
                Sign up
              </Button>
            </ButtonGroup>
          </>
        )}
      </div>
    </main>
  );
};

export default HomePage;
