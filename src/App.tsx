import { Box, Container, Stack } from "@mui/material";
import "./App.css";
import { CoffeeInfoForm } from "./components/CofffeeInfoForm";
import { Preview } from "./components/Preview";
import PreviewCSS from "./components/PreviewCSS";

function App() {
  return (
    <Container>
      <Stack spacing={2} direction="column" alignItems="stretch">
        <Stack
          direction="row"
          spacing={2}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <CoffeeInfoForm />
          <Box
            sx={{
              width: "100%",
              height: "100%",
              border: "1px solid black",
              borderRadius: "5px",
            }}
          >
            <Preview />
            <PreviewCSS />
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
}

export default App;
