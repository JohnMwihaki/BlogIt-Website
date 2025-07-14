import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  TextField,
  Stack,
  IconButton,
  InputAdornment,
  ToggleButton,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import useAuthStore from "../store/authStore";
import { useState } from "react";
import type { MouseEvent } from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import SearchIcon from "@mui/icons-material/Search";
import PhoneIcon from "@mui/icons-material/Phone";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export default function Header() {
  const { isLoggedIn, user, logout } = useAuthStore();
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleLogout = () => {
    logout();
    handleMenuClose();
    navigate("/");
  };

  const handleMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "var(--dark-blue)" }}>
      <Toolbar
        sx={{
          justifyContent: "space-between",
          px: 4,
          py: 1,
          flexWrap: "wrap",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <PhoneIcon />
          <Box>
            <Typography variant="body2">For Further Inquires :</Typography>
            <Typography variant="body2">+01 (123) 4567 90</Typography>
          </Box>
        </Box>

        <Typography
          variant="h5"
          component={Link}
          to="/"
          sx={{
            textDecoration: "none",
            color: "var(--orange)",
            fontWeight: "bold",
            letterSpacing: 1,
          }}
        >
          BlogIt
        </Typography>

        <Stack direction="row" spacing={1}>
          <IconButton
            component="a"
            href="https://github.com/johnmwihaki"
            target="_blank"
            sx={{ color: "white" }}
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            component="a"
            href="#"
            target="_blank"
            sx={{ color: "white" }}
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            component="a"
            href="#"
            target="_blank"
            sx={{ color: "white" }}
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            component="a"
            href="#"
            target="_blank"
            sx={{ color: "white" }}
          >
            <FacebookIcon />
          </IconButton>
        </Stack>
      </Toolbar>

      <Toolbar
        sx={{
          justifyContent: "space-between",
          px: 4,
          flexWrap: "wrap",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
            flexWrap: "wrap",
          }}
        >
          <Button component={Link} to="/" sx={{ color: "white" }}>
            Home
          </Button>
          <Button component={Link} to="/blogs" sx={{ color: "white" }}>
            Trending
          </Button>
          <Button component={Link} to="/news" sx={{ color: "white" }}>
            News
          </Button>
          <Button component={Link} to="/design" sx={{ color: "white" }}>
            Design
          </Button>
        </Box>

        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <TextField
            size="small"
            placeholder="Search blogs"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="outlined"
            sx={{ bgcolor: "white", borderRadius: 1, minWidth: 200 }}
          />

          <ToggleButton value="dark" sx={{ color: "white" }}>
            <DarkModeIcon />
          </ToggleButton>

          {!isLoggedIn ? (
            <>
              <Button component={Link} to="/register" sx={{ color: "white" }}>
                Sign Up
              </Button>
              <Button
                component={Link}
                to="/login"
                sx={{
                  backgroundColor: "#2f70f3",
                  color: "white",
                  borderRadius: 100,
                  px: 3,
                  py: 1,
                  "&:hover": {
                    backgroundColor: "#1e5be0",
                  },
                }}
              >
                Sign In
              </Button>
            </>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Button component={Link} to="/blogs" sx={{ color: "white" }}>
                All Posts
              </Button>
              <Button component={Link} to="/new-blog" sx={{ color: "white" }}>
                New Blog
              </Button>
              <Typography sx={{ color: "white" }}>
                Welcome back, {user?.firstName}
              </Typography>
              <IconButton onClick={handleMenuOpen} sx={{ color: "white" }}>
                <Avatar>{user?.firstName?.[0]}</Avatar>
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                <MenuItem
                  onClick={() => {
                    navigate("/profile");
                    handleMenuClose();
                  }}
                >
                  Profile
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("/profile-info");
                    handleMenuClose();
                  }}
                >
                  Update Info
                </MenuItem>
                <MenuItem
                  onClick={() => {
                    navigate("/change-password");
                    handleMenuClose();
                  }}
                >
                  Change Password
                </MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </Box>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
