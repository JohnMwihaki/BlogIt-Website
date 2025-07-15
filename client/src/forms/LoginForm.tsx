import { useState } from "react";
import { Box, Button, TextField, Typography, Stack } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import { loginUser } from "../services/authApi";

export default function LoginForm() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { user, token } = await loginUser({ identifier, password });
      login(user, token);
      navigate("/blogs");
    } catch (err: any) {
      setError(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 400,
        mx: "auto",
        p: 4,
        borderRadius: 3,
        backgroundColor: "var(--light-grey)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
      }}
    >
      <Stack spacing={2}>
        <Typography
          variant="h5"
          sx={{
            textAlign: "center",
            color: "var(--earth-brown)",
            fontFamily: "var(--primary-font)",
            fontWeight: 600,
            mb: 1,
          }}
        >
          Welcome Back !!
        </Typography>

        <TextField
          label="Email or Username"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value)}
          required
          fullWidth
        />

        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          fullWidth
        />

        {error && (
          <Typography
            color="error"
            sx={{ fontFamily: "var(--secondary-font)", textAlign: "center" }}
          >
            {error}
          </Typography>
        )}

        <Button
          type="submit"
          variant="contained"
          fullWidth
          sx={{
            backgroundColor: "var(--dark-blue)",
            color: "var(--smoke-white)",
            borderRadius: 2,
            py: 1.2,
            fontWeight: 600,
            fontFamily: "var(--primary-font)",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "var(--dark-blue)",
            },
          }}
        >
          Login
        </Button>
          <Stack direction="row" justifyContent="center" spacing={1}>
          <Typography>Don't have an account?</Typography>
          <Link
            to="/register"
            style={{
              textDecoration: "none",
              color: "var(--dark-blue)",
              fontWeight: 600,
              fontFamily: "var(--primary-font)",
            }}
          >
            Register Now
          </Link>
        </Stack>
      </Stack>
       

    </Box>
  );
}
