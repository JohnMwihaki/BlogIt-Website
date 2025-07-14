import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { Box, Button, TextField, Stack, Typography } from "@mui/material";
import useAuthStore from "../store/authStore";
import { useMutation } from "@tanstack/react-query";
import { updateUserInfo } from "../services/userApi";

type UserUpdatePayload = {
  firstName: string;
  lastName: string;
  userName: string;
  emailAddress: string;
};

export default function ProfileInfoForm() {
  const { user, login, token } = useAuthStore();

  const [formData, setFormData] = useState<UserUpdatePayload>({
    firstName: "",
    lastName: "",
    userName: "",
    emailAddress: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    if (user) {
      setFormData({
        firstName: user.firstName || "",
        lastName: user.lastName || "",
        userName: user.userName || "",
        emailAddress: user.emailAddress || "",
      });
    }
  }, [user]);

  const mutation = useMutation({
    mutationFn: (data: UserUpdatePayload) => {
      if (!user?.id) throw new Error("User ID missing");
      return updateUserInfo(user.id, data);
    },
    onSuccess: (updatedUser) => {
      if (token) login(updatedUser, token);
    },
    onError: () => {
      setError("Failed to update profile");
    },
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.userName ||
      !formData.emailAddress
    ) {
      setError("All fields are required");
      return;
    }
    mutation.mutate(formData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 800,
        p: 4,
        borderRadius: 3,
        backgroundColor: "var(--light-grey)",
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
      }}
    >
      <Stack spacing={2}>
        <TextField
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <TextField
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <TextField
          label="Username"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="emailAddress"
          type="email"
          value={formData.emailAddress}
          onChange={handleChange}
        />
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "var(--dark-blue)",
            color: "var(--smoke-white)",
            fontFamily: "var(--primary-font)",
            textTransform: "none",
            fontWeight: 600,
            borderRadius: 2,
            py: 1.2,
            "&:hover": {
              backgroundColor: "rgba(22, 7, 43, 0.9)",
            },
          }}
        >
          Update Info
        </Button>
        {error && (
          <Typography
            color="error"
            sx={{ fontFamily: "var(--secondary-font)", textAlign: "center" }}
          >
            {error}
          </Typography>
        )}
      </Stack>
    </Box>
  );
}
