import { Heading, Text, Button, ButtonGroup } from "@chakra-ui/react";
import { Link } from "../components";
import { useAuth } from "../../lib/main";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  let message = (
    <Text>
      If you want to see <Link to="/private">more</Link> you'll need to log in.
    </Text>
  );

  let buttons = [
    <Button variant="subtle" rounded="full" onClick={() => navigate("/login")}>
      Log in
    </Button>,
    <Button variant="solid" rounded="full" onClick={() => navigate("/signup")}>
      Sign up
    </Button>,
  ];

  if (user) {
    message = (
      <Text>
        You're authenticated! See <Link to="/private">more</Link>?
      </Text>
    );
    buttons = [
      <Button variant="outline" rounded="full" onClick={() => {}}>
        Log out
      </Button>,
    ];
  }

  return (
    <main>
      <Heading size="6xl">Home</Heading>
      <div>
        {message}
        <ButtonGroup colorPalette="teal">{buttons}</ButtonGroup>
      </div>
    </main>
  );
};

export default HomePage;
