import Navbar from "@/app/components/Navbar";

import { Container, Typography, Box, Avatar } from "@mui/material";

export default function About() {
  return (
    <>
      <Navbar />
      <Container sx={{ textAlign: "center", py: 8, maxWidth: "800px" }}>
        <Avatar
          src="/profile.jpg"
          alt="Profile Picture"
          sx={{ width: 120, height: 120, mx: "auto", mb: 2 }}
        />
        <Typography variant="h3" sx={{ fontWeight: "bold", color: "#2a2d3e" }}>
          About Me
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, color: "#555" }}>
          I'm a passionate **full-stack developer** specializing in **Next.js, React, and Spring Boot**.  
          I love creating efficient and scalable web applications, focusing on performance and user experience.
        </Typography>
        <Typography variant="body1" sx={{ mt: 2, color: "#555" }}>
          My journey started with **Java and backend development**, but I soon expanded into frontend technologies  
          to build **modern, interactive, and user-friendly web applications**.
        </Typography>
        <Typography variant="h5" sx={{ mt: 4, fontWeight: "bold", color: "#2a2d3e" }}>
          Skills & Technologies:
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 2, mt: 2 }}>
          <Typography variant="body2" sx={{ background: "#ddd", p: 1, borderRadius: "5px" }}>
            JavaScript
          </Typography>
          <Typography variant="body2" sx={{ background: "#ddd", p: 1, borderRadius: "5px" }}>
            TypeScript
          </Typography>
          <Typography variant="body2" sx={{ background: "#ddd", p: 1, borderRadius: "5px" }}>
            React.js
          </Typography>
          <Typography variant="body2" sx={{ background: "#ddd", p: 1, borderRadius: "5px" }}>
            Next.js
          </Typography>
          <Typography variant="body2" sx={{ background: "#ddd", p: 1, borderRadius: "5px" }}>
            Spring Boot
          </Typography>
          <Typography variant="body2" sx={{ background: "#ddd", p: 1, borderRadius: "5px" }}>
            PostgreSQL
          </Typography>
        </Box>
      </Container>
     
    </>
  );
}
