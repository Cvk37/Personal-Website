import { Container, Typography, Box } from "@mui/material";
import Chat from "@/app/components/chat"; // Make sure the path is correct

export default function Home() {
  return (
    <Container sx={{ textAlign: "center", py: 8 }}>
      {/* Hero Section */}
      <Typography variant="h2" sx={{ mb: 4 }}>Welcome to My Website</Typography>
      <Typography variant="h5" sx={{ mb: 6 }}>Showcasing my projects and interactive features</Typography>

      {/* About Me Section */}
      <Box id="about" sx={{ py: 6, textAlign: "left", maxWidth: 800, mx: "auto" }}>
        <Typography variant="h3" sx={{ mb: 2 }}>About Me</Typography>
        <Typography variant="body1">
          I'm a passionate developer working with Next.js, React, and backend technologies like Spring Boot.
          I enjoy building interactive web applications and experimenting with new technologies.
        </Typography>
      </Box>

      {/* Chatbot Section */}
      <Box id="chatbot" sx={{ py: 6 }}>
        <Typography variant="h3" sx={{ mb: 2 }}>Chat with Me</Typography>
        <Chat />
      </Box>
    </Container>
  );
}
