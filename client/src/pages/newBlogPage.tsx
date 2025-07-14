import { Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import BlogForm from '../forms/blogForm';
import type { BlogFormData } from '../forms/blogForm';
import { createBlog } from '../services/blogApi';

export default function NewBlogPage() {
  const navigate = useNavigate();

  const createBlogMutation = useMutation({
    mutationFn: createBlog,
    onSuccess: () => {
      navigate('/blogs');
    },
  });

  return (
    <Container sx={{ py: 6 }}>
      <BlogForm
        onSubmit={(data: BlogFormData) => createBlogMutation.mutate(data)}
        submitText="Create Blog"
      />
    </Container>
  );
}
