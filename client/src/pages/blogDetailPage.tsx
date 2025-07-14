import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  Container,
  Typography,
  Box,
  Avatar,
  Stack,
  Paper,
} from "@mui/material";
import { getBlogById } from "../services/blogApi";
import ReactMarkdown from "react-markdown";

export default function BlogDetailPage() {
  const { id } = useParams();

  const {
    data: blog,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["blog", id],
    queryFn: () => getBlogById(id!),
  });

  if (isLoading) return <Typography>Loading...</Typography>;
  if (error || !blog) return <Typography>Blog not found</Typography>;

  const initials = `${blog.user.firstName[0] || ""}${
    blog.user.lastName[0] || ""
  }`.toUpperCase();
  const formattedDate = new Date(blog.createdAt).toLocaleDateString();

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 3,
          backgroundColor: "var(--smoke-white)",
          boxShadow: "0 6px 24px rgba(0,0,0,0.06)",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontFamily: "var(--primary-font)",
            fontWeight: 700,
            mb: 2,
            color: "var(--earth-brown)",
          }}
        >
          {blog.title}
        </Typography>

        <Box
          component="img"
          src={blog.image}
          alt={blog.title}
          sx={{
            width: "100%",
            height: 350,
            objectFit: "cover",
            borderRadius: 2,
            mb: 3,
          }}
        />

        <Stack direction="row" spacing={2} alignItems="center" sx={{ mb: 3 }}>
          <Avatar sx={{ bgcolor: "var(--deep-green)", fontWeight: 600 }}>
            {initials}
          </Avatar>
          <Box>
            <Typography
              sx={{
                fontFamily: "var(--secondary-font)",
                fontWeight: 600,
                color: "var(--dark)",
              }}
            >
              {blog.user.firstName} {blog.user.lastName}
            </Typography>
            <Typography
              variant="caption"
              sx={{ color: "var(--stone-grey)", fontSize: ".85rem" }}
            >
              {formattedDate}
            </Typography>
          </Box>
        </Stack>

        <Box
          sx={{
            fontFamily: "var(--secondary-font)",
            color: "var(--dark)",
            lineHeight: 1.9,
            fontSize: "1.05rem",
          }}
        >
          <ReactMarkdown>{blog.content}</ReactMarkdown>
        </Box>
      </Paper>
    </Container>
  );
}
