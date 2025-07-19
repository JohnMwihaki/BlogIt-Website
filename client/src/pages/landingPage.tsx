import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Stack,
  Typography,
} from "@mui/material";

const image = "./background.jpg";

export default function LandingPage() {
  return (
    <>
      <Box
        sx={{
          position: "relative",
          backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.85)), url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 3,
          color: "var(--smoke-white)",
          overflow: "hidden",
        }}
      >
        
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.04), transparent 50%)",
            zIndex: 1,
          }}
        />

        <Box
          sx={{
            zIndex: 2,
            maxWidth: "850px",
            animation: "fadeInUp 1.6s ease-in-out",
            "@keyframes fadeInUp": {
              "0%": { opacity: 0, transform: "translateY(30px)" },
              "100%": { opacity: 1, transform: "translateY(0)" },
            },
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              fontSize: { xs: "2.5rem", md: "3.8rem" },
              color: "var(--golden-yellow)",
              fontFamily: "var(--primary-font)",
              mb: 2,
              letterSpacing: "0.5px",
            }}
          >
            Share Ideas. Inspire the World.
          </Typography>

          <Typography
            variant="h6"
            sx={{
              fontSize: { xs: "1rem", md: "1.25rem" },
              color: "var(--smoke-white)",
              fontFamily: "var(--secondary-font)",
              mb: 4,
              lineHeight: 1.7,
            }}
          >
            Welcome to <span style={{color:'var(--orange)'}}><strong>BlogIt</strong></span> the platform where your stories
            matter. Publish powerful content, connect with readers, and grow
            your digital voice.
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Button
              variant="contained"
              size="large"
              sx={{
                backgroundColor: "var(--golden-yellow)",
                color: "var(--dark-blue)",
                fontWeight: 600,
                px: 5,
                borderRadius: "50px",
                boxShadow: "0 4px 20px rgba(255,215,0,0.3)",
                "&:hover": {
                  backgroundColor: "var(--orange)",
                  boxShadow: "0 6px 24px rgba(255,215,0,0.4)",
                },
              }}
            >
              Get Started
            </Button>

            <Button
              variant="outlined"
              size="large"
              sx={{
                borderColor: "var(--golden-yellow)",
                color: "var(--golden-yellow)",
                fontWeight: 600,
                px: 5,
                borderRadius: "50px",
                "&:hover": {
                  backgroundColor: "rgba(255,215,0,0.1)",
                },
              }}
            >
              Explore Features
            </Button>
          </Box>
        </Box>
      </Box>

      <Container maxWidth="lg">
        <Typography
          variant="h5"
          sx={{
            px: 2,
            py: 4,
            fontFamily: "var(--primary-font)",
            fontWeight: 600,
            color: "var(--deep-green)",
            textAlign: "center",
          }}
        >
          Latest Articles
        </Typography>

        <Card
          sx={{ borderBottom: "1px solid var(--stone-grey)", borderRadius: 0 }}
        >
          <Stack direction="row">
            <CardMedia
              component="img"
              image="../development.jpg"
              sx={{ width: "50%", objectFit: "cover" }}
            />
            <Box flex={1}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "var(--primary-font)",
                    color: "var(--earth-brown)",
                  }}
                >
                  Design and Development
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "var(--secondary-font)",
                    color: "var(--dark)",
                  }}
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </Typography>
              </CardContent>
              <CardActions sx={{ pl: 2, pb: 2 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "var(--orange)",
                    color: "white",
                    fontFamily: "var(--primary-font)",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "var(--amber)" },
                  }}
                >
                  Read More
                </Button>
              </CardActions>
            </Box>
          </Stack>
        </Card>

        <Card
          sx={{ borderBottom: "1px solid var(--stone-grey)", borderRadius: 0 }}
        >
          <Stack direction="row-reverse">
            <CardMedia
              component="img"
              image="../ui.jpg"
              alt="blog"
              sx={{ width: "50%", objectFit: "cover" }}
            />
            <Box flex={1}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "var(--primary-font)",
                    color: "var(--earth-brown)",
                  }}
                >
                  UI/UX Principles
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "var(--secondary-font)",
                    color: "var(--dark)",
                  }}
                >
                  Discover the best practices for clean and user-friendly
                  design.
                </Typography>
              </CardContent>
              <CardActions sx={{ pl: 2, pb: 2 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "var(--orange)",
                    color: "white",
                    fontFamily: "var(--primary-font)",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "var(--amber)" },
                  }}
                >
                  Read More
                </Button>
              </CardActions>
            </Box>
          </Stack>
        </Card>

        <Card
          sx={{ borderBottom: "1px solid var(--stone-grey)", borderRadius: 0 }}
        >
          <Stack direction="row">
            <CardMedia
              component="img"
              image="../ai-test.jpg"
              alt="blog"
              sx={{ width: "50%", objectFit: "cover" }}
            />
            <Box flex={1}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "var(--primary-font)",
                    color: "var(--earth-brown)",
                  }}
                >
                  Backend APIs
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "var(--secondary-font)",
                    color: "var(--dark)",
                  }}
                >
                  Understand how RESTful APIs are built and consumed.
                </Typography>
              </CardContent>
              <CardActions sx={{ pl: 2, pb: 2 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "var(--orange)",
                    color: "white",
                    fontFamily: "var(--primary-font)",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "var(--amber)" },
                  }}
                >
                  Read More
                </Button>
              </CardActions>
            </Box>
          </Stack>
        </Card>

        <Card
          sx={{ borderBottom: "1px solid var(--stone-grey)", borderRadius: 0 }}
        >
          <Stack direction="row-reverse">
            <CardMedia
              component="img"
              image="../auth.jpg"
              alt="blog"
              sx={{ width: "50%", objectFit: "cover" }}
            />
            <Box flex={1}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "var(--primary-font)",
                    color: "var(--earth-brown)",
                  }}
                >
                  Authentication and Security
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "var(--secondary-font)",
                    color: "var(--dark)",
                  }}
                >
                  A beginner’s guide to securing your web apps.
                </Typography>
              </CardContent>
              <CardActions sx={{ pl: 2, pb: 2 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "var(--orange)",
                    color: "white",
                    fontFamily: "var(--primary-font)",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "var(--amber)" },
                  }}
                >
                  Read More
                </Button>
              </CardActions>
            </Box>
          </Stack>
        </Card>

        <Card
          sx={{ borderBottom: "1px solid var(--stone-grey)", borderRadius: 0 }}
        >
          <Stack direction="row">
            <CardMedia
              component="img"
              image="../testing.jpg"
              alt="blog"
              sx={{ width: "50%", objectFit: "cover" }}
            />
            <Box flex={1}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "var(--primary-font)",
                    color: "var(--earth-brown)",
                  }}
                >
                  Testing Strategies
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "var(--secondary-font)",
                    color: "var(--dark)",
                  }}
                >
                  Why testing matters and how to get started with tools like
                  Jest.
                </Typography>
              </CardContent>
              <CardActions sx={{ pl: 2, pb: 2 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "var(--orange)",
                    color: "white",
                    fontFamily: "var(--primary-font)",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "var(--amber)" },
                  }}
                >
                  Read More
                </Button>
              </CardActions>
            </Box>
          </Stack>
        </Card>

        <Card
          sx={{ borderBottom: "1px solid var(--stone-grey)", borderRadius: 0 }}
        >
          <Stack direction="row-reverse">
            <CardMedia
              component="img"
              image="../deploy.jpg"
              alt="blog"
              sx={{ width: "50%", objectFit: "cover" }}
            />
            <Box flex={1}>
              <CardContent>
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "var(--primary-font)",
                    color: "var(--earth-brown)",
                  }}
                >
                  Deployment Basics
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "var(--secondary-font)",
                    color: "var(--dark)",
                  }}
                >
                  Learn how to deploy your full-stack app step by step.
                </Typography>
              </CardContent>
              <CardActions sx={{ pl: 2, pb: 2 }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "var(--orange)",
                    color: "white",
                    fontFamily: "var(--primary-font)",
                    textTransform: "none",
                    "&:hover": { backgroundColor: "var(--amber)" },
                  }}
                >
                  Read More
                </Button>
              </CardActions>
            </Box>
          </Stack>
        </Card>
      </Container>
    </>
  );
}
