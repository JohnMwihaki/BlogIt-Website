import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Avatar,
  CardActions,
  Button,
  Stack,
  Box,
  IconButton,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { deleteBlog } from "../services/blogApi";

interface BlogCardProps {
  blog: {
    id: string;
    title: string;
    synopsis: string;
    image: string;
    createdAt: string;
    user?: {
      firstName: string;
      lastName: string;
    };
  };
  editable?: boolean;
  onDelete?: () => void;
}

export default function BlogCard({
  blog,
  editable = false,
  onDelete,
}: BlogCardProps) {
  const initials = blog.user
    ? `${blog.user.firstName[0] || ""}${
        blog.user.lastName[0] || ""
      }`.toUpperCase()
    : "??";
  const formattedDate = new Date(blog.createdAt).toLocaleDateString();
  const navigate = useNavigate();

  const deleteMutation = useMutation({
    mutationFn: () => deleteBlog(blog.id),
    onSuccess: () => {
      if (onDelete) onDelete();
    },
    onError: () => {
      alert("Failed to delete blog.");
    },
  });

  return (
    <Card
      sx={{
        width: "350px",
        height: "100%",
        overflow: "hidden",
        borderRadius: 3,
        boxShadow: "0 8px 16px rgba(0,0,0,0.1)",
        position: "relative",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: "0 16px 32px rgba(0,0,0,0.15)",
        },
      }}
    >
      <Box
        sx={{
          overflow: "hidden",
          height: 200,
        }}
      >
        <CardMedia
          component="img"
          height="200"
          image={blog.image}
          alt={blog.title}
          sx={{
            objectFit: "cover",
            transition: "transform 0.5s ease",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        />
      </Box>

      <CardContent>
        <Typography
          variant="h6"
          sx={{
            fontFamily: "var(--primary-font)",
            color: "var(--dark)",
            textTransform: "capitalize",
            fontWeight: 600,
            mb: 1,
          }}
        >
          {blog.title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontFamily: "var(--secondary-font)",
            color: "var(--stone-grey)",
            lineHeight: 1.6,
          }}
        >
          {blog.synopsis}
        </Typography>
      </CardContent>

      <CardActions sx={{ px: 2, justifyContent: "space-between" }}>
        <Stack direction="row" spacing={1} alignItems="center">
          <Avatar
            sx={{
              bgcolor: "var(--earth-brown)",
              color: "white",
              fontWeight: 600,
            }}
          >
            {initials}
          </Avatar>
          <Typography
            variant="caption"
            sx={{ fontFamily: "var(--primary-font)" }}
          >
            {blog.user
              ? `${blog.user.firstName} ${blog.user.lastName}`
              : "Unknown Author"}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            • {formattedDate}
          </Typography>
        </Stack>

        <Button
          size="small"
          component={Link}
          to={`/blogs/${blog.id}`}
          sx={{
            fontSize: ".8rem",
            backgroundColor: "var(--orange)",
            color: "var(--smoke-white)",
            borderRadius: 2,
            textTransform: "none",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "var(--amber)",
              transform: "scale(1.05)",
            },
          }}
        >
          Read More
        </Button>
      </CardActions>

      {editable && (
        <Box sx={{ px: 2, pb: 2, display: "flex", gap: 1 }}>
          <IconButton
            size="small"
            onClick={() => navigate(`/edit/${blog.id}`)}
            sx={{
              textTransform: "none",
              fontSize: "1.3rem",
              borderColor: "var(--earth-brown)",
              color: "var(--deep-green)",
              transition: "all 0.3s ease",
              position: "absolute",
              m: 2,
              top: 0,
              right: "10%",
              "&:hover": {
                backgroundColor: "rgba(93, 64, 55, 0.1)",
                transform: "scale(1.03)",
              },
            }}
          >
            <EditIcon fontSize="small" />
          </IconButton>
          <IconButton
            size="small"
            color="error"
            onClick={() => deleteMutation.mutate()}
            sx={{
              bgcolor: "transparent",
              textTransform: "none",
              fontSize: ".8rem",
              position: "absolute",
              m: 2,
              top: 0,
              right: 0,
              transition: "all 0.3s ease",
              "&:hover": {
                transform: "scale(1.03)",
              },
            }}
          >
            <DeleteIcon fontSize="small" />
          </IconButton>
        </Box>
      )}
    </Card>
  );
}
