import { useState } from "react";
import { TextField, Button, Box, Typography, CircularProgress } from "@mui/material";

export default function Chat() {
  const [userInput, setUserInput] = useState<string>("");
  const [response, setResponse] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // POST request to Flask backend
      const res = await fetch("http://127.0.0.1:5000/chat", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: userInput }),  // Send user input to Flask
      });

      // Get response data from Flask
      const data = await res.json();
      setResponse(data.response);  // Set the bot response
    } catch (error) {
      setResponse("Sorry, something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ textAlign: "center", maxWidth: 600, mx: "auto", p: 2 }}>
      <Typography variant="h5" sx={{ mb: 3 }}>Chat with Me</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Ask me something..."
          variant="outlined"
          fullWidth
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          required
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mb: 2 }}>
          Send
        </Button>
      </form>

      {loading && <CircularProgress />}
      {response && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="h6">Bot Response:</Typography>
          <Typography variant="body1">{response}</Typography>
        </Box>
      )}
    </Box>
  );
}
