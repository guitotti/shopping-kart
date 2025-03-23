import { Button, Card, Flex } from "@radix-ui/themes";

const Product = () => {
  return (
    <Card>
      <Flex justify="center">
        <img
          style={{ maxWidth: 180 }}
          src="https://www.minimundi.com.br/cdn/imagens/produtos/det/miniatura-carro-mario-kart-baby-luigi-die-cast-hot-wheels-hdb28-4b13-a.jpg"
          alt=""
        />
      </Flex>
      <h3>Item name</h3>
      <p style={{ fontSize: 12 }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam commodi
        illo a porro esse aliquid, ducimus aut inventore consectetur quae ipsa
        eaque ea recusandae quidem. Culpa aperiam voluptates dicta vitae.
      </p>
      <Flex justify="end">
        <Button style={{ cursor: "pointer" }}>Add to kart</Button>
      </Flex>
    </Card>
  );
};

export default Product;
