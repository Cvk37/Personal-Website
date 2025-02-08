import { useState } from "react";
import { Box, TextField, Button, Typography, Paper } from "@mui/material";

export default function Chatbot() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([]);
  const [input, setInput] = useState("");

  const botResponses: { [key: string]: string } = {
    "hello": "Hi there! How can I help?",
    "hey":"Hi there! How can I help?",
    "how are you": "I'm just a bot, but I'm doing great!",
    "what is your name": "I'm a simple chatbot!",
    "bye": "Goodbye! Have a great day!",
  };

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMessage = input.toLowerCase();
    const botReply = botResponses[userMessage] || "I'm not sure how to respond to that.";

    setMessages([...messages, { sender: "user", text: input }, { sender: "bot", text: botReply }]);
    setInput("");
  };

  return (
    <Box sx={{ maxWidth: 400, mx: "auto", textAlign: "center", p: 2 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>Chatbot</Typography>
      <Paper sx={{ minHeight: 300, p: 2, overflowY: "auto", mb: 2 }}>
        {messages.map((msg, index) => (
          <Typography key={index} sx={{ textAlign: msg.sender === "user" ? "right" : "left", my: 1 }}>
            <strong>{msg.sender === "user" ? "You" : "Bot"}:</strong> {msg.text}
          </Typography>
        ))}
      </Paper>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Type a message..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button variant="contained" sx={{ mt: 1 }} onClick={handleSend}>Send</Button>
    </Box>
  );
}
