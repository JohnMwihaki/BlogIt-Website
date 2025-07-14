import {
  Box,
  Button,
  Container,
  Divider,
  IconButton,
  Link,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function Footer() {
  return (
    <Container
      sx={{
        py: 6,
        background:
          "linear-gradient(to right, rgba(4,28,58,0.9), rgba(4,28,58,0.7))",
      }}
      maxWidth="xl"
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 6,
        }}
      >
        <Box sx={{ maxWidth: 400 }}>
          <Typography
            variant="h6"
            sx={{
              mb: 1,
              fontWeight: 700,
              fontSize: "2rem",
              color: "var(--earth-brown)",
            }}
          >
            Blogit
          </Typography>
          <Typography
            sx={{
              color: "var(--stone-grey)",
              lineHeight: 1.7,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure omnis
            alias minima, esse, earum quae expedita, deleniti commodi ipsum
            illum accusamus velit illo atque voluptatibus laborum voluptatum
            molestiae.
          </Typography>
          <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
            <IconButton
              sx={{ color: "var(--orange)" }}
              component="a"
              href="https://github.com/johnmwihaki"
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>
            <IconButton
              sx={{ color: "var(--orange)" }}
              component="a"
              href="https://www.linkedin.com/in/john-mwihaki-b8a11b267/"
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>
            <IconButton
              sx={{ color: "var(--orange)" }}
              component="a"
              href="https://www.linkedin.com/in/john-mwihaki-b8a11b267/"
              target="_blank"
            >
              <TwitterIcon />
            </IconButton>
            <IconButton
              sx={{ color: "var(--orange)" }}
              component="a"
              href="https://github.com/johnmwihaki"
              target="_blank"
            >
              <FacebookIcon />
            </IconButton>
          </Stack>
        </Box>

        <Box>
          <Typography
            variant="subtitle1"
            sx={{
              mb: 1,
              fontWeight: 700,
              fontSize: "2rem",
              color: "var(--earth-brown)",
            }}
          >
            Quick links
          </Typography>
          <Stack spacing={1.5} sx={{ fontWeight: 500 }}>
            <Link
              href="/"
              underline="hover"
              sx={{
                color: "var(--stone-grey)",
                "&:hover": { color: "var(--amber)" },
              }}
            >
              Home
            </Link>
            <Link
              href="#"
              underline="hover"
              sx={{
                color: "var(--stone-grey)",
                "&:hover": { color: "var(--amber)" },
              }}
            >
              About us
            </Link>
            <Link
              href="#"
              underline="hover"
              sx={{
                color: "var(--stone-grey)",
                "&:hover": { color: "var(--amber)" },
              }}
            >
              News
            </Link>
            <Link
              href="/register"
              underline="hover"
              sx={{
                color: "var(--stone-grey)",
                "&:hover": { color: "var(--amber)" },
              }}
            >
              Sign Up
            </Link>
            <Link
              href="/login"
              underline="hover"
              sx={{
                color: "var(--stone-grey)",
                "&:hover": { color: "var(--amber)" },
              }}
            >
              Sign In
            </Link>
          </Stack>
        </Box>

        <Box sx={{ minWidth: 300 }}>
          <Typography sx={{ fontWeight: 600, fontSize: "1.2rem", m: 1 }}>
            Subscribe to our newsletter
          </Typography>
          <Stack direction="row" spacing={0}>
            <TextField
              label="Email address"
              type="email"
              required
              InputLabelProps={{
                sx: {
                  color: "var(--earth-brown)",
                  fontWeight: 500,
                  fontSize: "0.9rem",
                },
              }}
              sx={{
                bgcolor: "white",
                "& fieldset": {
                  border: "none",
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                backgroundColor: "var(--amber)",
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                borderTopRightRadius: 25,
                borderBottomRightRadius: 25,
                px: 3,
                "&:hover": {
                  backgroundColor: "rgb(200, 20, 20)",
                },
              }}
            >
              Subscribe
            </Button>
          </Stack>
        </Box>
      </Box>

      <Divider
        sx={{
          my: 5,
          borderColor: "var(--earth-brown)",
          fontWeight: 600,
          fontSize: "2rem",
          minHeight: "50px",
        }}
      />

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        flexWrap="wrap"
        gap={2}
      >
        <Typography
          variant="body2"
          sx={{ fontSize: "1.3rem", color: "var(--soft-sand)" }}
        >
          &copy; {new Date().getFullYear()} Built with &hearts; by John Mwihaki
        </Typography>
        <Stack direction="row" spacing={2}>
          <Link
            href="#"
            underline="hover"
            sx={{
              color: "var(--soft-sand)",
              "&:hover": { color: "var(--amber)" },
            }}
          >
            Privacy Policy
          </Link>
          <Link
            href="#"
            underline="hover"
            sx={{
              color: "var(--soft-sand)",
              "&:hover": { color: "var(--amber)" },
            }}
          >
            Terms and Conditions
          </Link>
          <Link
            href="#"
            underline="hover"
            sx={{
              color: "var(--soft-sand)",
              "&:hover": { color: "var(--amber)" },
            }}
          >
            FAQ
          </Link>
        </Stack>
        <IconButton
          component="a"
          href="/"
          sx={{
            backgroundColor: "var(--amber)",
            color: "var(--smoke-white)",
            "&:hover": { backgroundColor: "var(--amber)" },
          }}
        >
          <KeyboardArrowUpIcon />
        </IconButton>
      </Stack>
    </Container>
  );
}
