import { Container } from '@mui/material';
import LoginForm from '../forms/LoginForm';

export default function LoginPage() {
  return (
    <Container sx={{ py: 6 }}>
      <LoginForm />
    </Container>
  );
}
