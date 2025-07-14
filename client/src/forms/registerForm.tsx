import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Stack,
  InputAdornment,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import { registerUser } from "../services/authApi";

export default function RegisterForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    emailAddress: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const { confirmPassword, ...submitData } = formData;
      const { user, token } = await registerUser(submitData);
      login(user, token);
      navigate("/blogs");
      navigate(0);
    } catch (err: any) {
      setError(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 500,
        mx: "auto",
        p: 4,
        backgroundColor: "var(--light-grey)",
        borderRadius: 3,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
      }}
    >
      <Stack spacing={2}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "var(--primary-font)",
            fontWeight: 600,
            color: "var(--dark)",
            textAlign: "center",
          }}
        >
          Join Us Today
        </Typography>

        <TextField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          sx={{ fontFamily: "var(--secondary-font)" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          sx={{ fontFamily: "var(--secondary-font)" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Username"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          required
          sx={{ fontFamily: "var(--secondary-font)" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Email"
          name="emailAddress"
          type="email"
          value={formData.emailAddress}
          onChange={handleChange}
          required
          sx={{ fontFamily: "var(--secondary-font)" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <EmailIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          required
          sx={{ fontFamily: "var(--secondary-font)" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />

        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
          sx={{ fontFamily: "var(--secondary-font)" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />

        {error && (
          <Typography
            color="error"
            sx={{ textAlign: "center", fontFamily: "var(--secondary-font)" }}
          >
            {error}
          </Typography>
        )}

        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "var(--dark-blue)",
            color: "var(--smoke-white)",
            textTransform: "none",
            fontFamily: "var(--primary-font)",
            fontWeight: 600,
            py: 1.2,
            borderRadius: 2,
            "&:hover": {
              backgroundColor: "var(--dark-blue)",
            },
          }}
        >
          Register
        </Button>
      </Stack>
    </Box>
  );
}
