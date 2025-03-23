import { Box } from "@radix-ui/themes";
import Header from "./components/Header";
import Gallery from "./components/Gallery";

function App() {
  return (
    <Box maxWidth="80rem" mx="auto">
      <Header />
      <Gallery />
    </Box>
  );
}

export default App;
