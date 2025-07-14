import { useQuery } from '@tanstack/react-query';
import { Container, Typography, Box } from '@mui/material';
import { getAllBlogs } from '../services/blogApi';
import BlogCard from '../components/BlogCard';

type Blog = {
  id: string;
  title: string;
  synopsis: string;
  image: string;
  content: string;
  createdAt: string;
  user: {
    firstName: string;
    lastName: string;
  };
};

export default function BlogListPage() {
  const { data: blogs, isLoading } = useQuery<Blog[]>({
    queryKey: ['blogs'],
    queryFn: getAllBlogs,
  });

  if (isLoading) return <Typography>Loading...</Typography>;
  if (!blogs || blogs.length === 0) return <Typography>No blogs found.</Typography>;

  return (
    <Container sx={{ py: 6 }}>
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: 4,
          justifyContent: 'center',
        }}
      >
        {blogs.map((blog) => (
          <Box key={blog.id}>
            <BlogCard blog={blog} />
          </Box>
        ))}
      </Box>
    </Container>
  );
}
