import { Container } from '@mui/material';
import RegisterForm from '../forms/registerForm';

export default function RegisterPage() {
  return (
    <Container sx={{ py: 6,bgcolor:'var(--smoke-white)'}}>
      <RegisterForm />
    </Container>
  );
}
