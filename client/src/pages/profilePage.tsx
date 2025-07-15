import { Container, Typography, Divider, Box } from '@mui/material';
import useAuthStore from '../store/authStore';
import { useQuery } from '@tanstack/react-query';
import BlogCard from '../components/BlogCard';
import { getUserBlogs } from '../services/userApi';

export interface Blog {
  id: string;
  title: string;
  synopsis: string;
  content: string;
  image: string;
  createdAt: string;
  userId: string;
  user?: {
    firstName: string;
    lastName: string;
  };
}

export default function ProfilePage() {
  const { user } = useAuthStore();

  const { data: blogs, isLoading } = useQuery<Blog[]>({
    queryKey: ['userBlogs'],
    queryFn: getUserBlogs,
  });

  if (isLoading) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Container sx={{ py: 6 }}>
      <Typography variant="h4" gutterBottom>
        Hello, {user?.firstName}
      </Typography>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h5" gutterBottom sx={{ textAlign: 'center', fontFamily: 'var(--primary-font)', fontWeight: 700, fontSize: '2rem', m: 2, p: 1 }}>
        My Blogs
      </Typography>

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
        {blogs?.map((blog) => (
          <Box key={blog.id} sx={{ maxWidth: '100%' }}>
            <BlogCard blog={blog} editable />
          </Box>
        ))}
      </Box>
    </Container>
  );
}
