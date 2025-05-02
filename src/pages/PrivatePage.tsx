import { Button, ButtonGroup, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const PrivatePage = () => {
  const navigate = useNavigate();

  return (
    <main>
      <Heading size="6xl">Private</Heading>
      <div>
        <Text>You can only see this page because you're authenticated!</Text>
        <ButtonGroup colorPalette="teal">
          <Button
            variant="outline"
            rounded="full"
            onClick={() => navigate("/")}
          >
            Log out
          </Button>
        </ButtonGroup>
      </div>
    </main>
  );
};

export default PrivatePage;
