import { Container, Typography, Box } from "@mui/material";
import UserInfoForm from "../forms/profileInfoForm";

export default function ProfileInfoFormPage() {
  return (
    <Container
      sx={{
        py: 6,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{ color: "var(--dark-blue)", fontSize: "2rem" }}
      >
        Update Your Information
      </Typography>
      <Box sx={{ maxWidth: 800, mt: 3 }}>
        <UserInfoForm />
      </Box>
    </Container>
  );
}
