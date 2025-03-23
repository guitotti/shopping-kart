import { Grid } from "@radix-ui/themes";
import Product from "../Product";

const Gallery = () => {
  return (
    <Grid columns="4" gap="8" minWidth="72rem">
      {Array.from({ length: 11 }).map((_, i) => (
        <Product key={i} />
      ))}
    </Grid>
  );
};

export default Gallery;
