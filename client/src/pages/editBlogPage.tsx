import { useParams, useNavigate } from 'react-router-dom';
import { useQuery, useMutation } from '@tanstack/react-query';
import { Container, Typography } from '@mui/material';
import BlogForm from '../forms/blogForm';
import type { BlogFormData } from '../forms/blogForm';
import { getBlogById, updateBlog } from '../services/blogApi';

export default function EditBlogPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: blog, isLoading } = useQuery({
    queryKey: ['blog', id],
    queryFn: () => getBlogById(id!),
  });

  const updateMutation = useMutation({
    mutationFn: (data: BlogFormData) =>
      updateBlog({ blogId: id!, ...data }),
    onSuccess: () => {
      navigate(`/blogs/${id}`);
    },
  });

  if (isLoading) return <Typography>Loading...</Typography>;
  if (!blog) return <Typography>Blog not found</Typography>;

  return (
    <Container sx={{ py: 6 }}>
      <BlogForm
        initialValues={blog}
        onSubmit={updateMutation.mutate}
        submitText="Update Blog"
      />
    </Container>
  );
}
