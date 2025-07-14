import { Container, Typography, Box } from "@mui/material";
import ChangePasswordForm from "../forms/changePasswordForm";

export default function ChangePasswordPage() {
  return (
    <Container
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" gutterBottom sx={{ color: "var(--dark-blue)" }}>
        Change Your Password
      </Typography>
      <Box sx={{ maxWidth: 600, mt: 3 }}>
        <ChangePasswordForm />
      </Box>
    </Container>
  );
}
