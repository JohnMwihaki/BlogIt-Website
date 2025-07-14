import { useState } from "react";
import { Box, Button, TextField, Stack, Typography } from "@mui/material";

interface BlogFormProps {
  initialValues?: BlogFormData;
  onSubmit: (data: BlogFormData) => void;
  submitText?: string;
}

export interface BlogFormData {
  title: string;
  synopsis: string;
  content: string;
  image: string;
}

export default function BlogForm({
  initialValues,
  onSubmit,
  submitText = "Submit",
}: BlogFormProps) {
  const [formData, setFormData] = useState<BlogFormData>(
    initialValues || {
      title: "",
      synopsis: "",
      content: "",
      image: "",
    }
  );

  const [uploading, setUploading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);

    const formDataImage = new FormData();
    formDataImage.append("image", file);

    const res = await fetch("http://localhost:5500/upload", {
      method: "POST",
      body: formDataImage,
    });

    const data = await res.json();
    setFormData((prev) => ({ ...prev, image: data.url }));
    setUploading(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        maxWidth: 700,
        mx: "auto",
        p: 4,
        backgroundColor: "var(--light-grey)",
        borderRadius: 3,
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
      }}
    >
      <Stack spacing={2}>
        <Typography
          variant="h5"
          sx={{
            fontFamily: "var(--primary-font)",
            fontWeight: 600,
            color: "var(--dark)",
            textAlign: "center",
            mb: 2,
          }}
        >
          Blog Details
        </Typography>

        <TextField
          label="Title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          sx={{ fontFamily: "var(--secondary-font)" }}
        />

        <TextField
          label="Synopsis"
          name="synopsis"
          value={formData.synopsis}
          onChange={handleChange}
          required
          sx={{ fontFamily: "var(--secondary-font)" }}
        />

        <input
          type="file"
          accept="image/*"
          name="image"
          onChange={handleImageUpload}
        />

        {uploading && <Typography>Uploading image...</Typography>}
        {formData.image && (
          <img
            src={formData.image}
            alt="Uploaded preview"
            style={{ maxWidth: "100%", maxHeight: 200, borderRadius: 8 }}
          />
        )}

        <TextField
          label="Markdown Content"
          name="content"
          multiline
          minRows={6}
          value={formData.content}
          onChange={handleChange}
          required
          sx={{ fontFamily: "var(--secondary-font)" }}
        />

        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "var(--dark-blue)",
            color: "var(--smoke-white)",
            textTransform: "none",
            fontFamily: "var(--primary-font)",
            fontWeight: 600,
            py: 1.2,
            borderRadius: 2,
            "&:hover": {
              backgroundColor: "var(--dark-blue)",
            },
          }}
        >
          {submitText}
        </Button>
      </Stack>
    </Box>
  );
}
