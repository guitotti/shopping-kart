import { Flex, Text } from "@radix-ui/themes";
import { FaCartShopping } from "react-icons/fa6";

const Header = () => {
  return (
    <Flex align="center" justify="between">
      <h1>Shopping Kart</h1>
      <Flex direction="column" align="end">
        <FaCartShopping size={28} cursor="pointer" />
        <Flex direction="row" align="center" gap="2">
          <Text size="3" weight="bold">
            3
          </Text>
          <span>items</span>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
