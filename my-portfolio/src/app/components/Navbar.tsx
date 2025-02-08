import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import Link from "next/link";

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          My Portfolio
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}> {/* Adds gap between links */}
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
