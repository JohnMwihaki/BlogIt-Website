import { useState } from "react";
import { Button, TextField, Stack, Typography, Paper } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import { updatePassword } from "../services/userApi";
import useAuthStore from "../store/authStore";

export default function ChangePasswordForm() {
  const { user } = useAuthStore();

  const [formData, setFormData] = useState({
    currentPassword: "",
    newPassword: "",
  });

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const mutation = useMutation({
    mutationFn: () => updatePassword({ ...formData, userId: user!.id }),
    onSuccess: () => {
      setSuccess("Password updated successfully");
      setError("");
      setFormData({ currentPassword: "", newPassword: "" });
    },
    onError: () => {
      setError("Failed to update password");
      setSuccess("");
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.currentPassword || !formData.newPassword) {
      setError("Both fields are required");
      return;
    }
    mutation.mutate();
  };

  return (
    <Paper
      elevation={3}
      component="form"
      onSubmit={handleSubmit}
      sx={{
        backgroundColor: "var(--light-grey)",
        maxWidth: 400,
        p: 3,
        borderRadius: 3,
        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
      }}
    >
      <Stack spacing={2}>
        <TextField
          name="currentPassword"
          label="Current Password"
          type="password"
          value={formData.currentPassword}
          onChange={handleChange}
          fullWidth
          variant="outlined"
        />
        <TextField
          name="newPassword"
          label="New Password"
          type="password"
          value={formData.newPassword}
          onChange={handleChange}
          fullWidth
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "var(--dark-blue)",
            color: "var(--smoke-white)",
            textTransform: "none",
            fontWeight: 500,
            borderRadius: 2,
            py: 1.2,
            "&:hover": {
              backgroundColor: "rgba(22, 7, 43, 0.9)",
            },
          }}
        >
          Change Password
        </Button>
        {success && (
          <Typography
            color="success.main"
            sx={{ fontFamily: "var(--secondary-font)" }}
          >
            {success}
          </Typography>
        )}
        {error && (
          <Typography
            color="error.main"
            sx={{ fontFamily: "var(--secondary-font)" }}
          >
            {error}
          </Typography>
        )}
      </Stack>
    </Paper>
  );
}
