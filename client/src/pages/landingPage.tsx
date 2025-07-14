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
          backgroundImage: `linear-gradient(rgba(19, 18, 18, 0.65), rgba(19, 18, 18, 0.65)), url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          px: 2,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "var(--golden-yellow)",
            fontFamily: "var(--primary-font)",
            fontWeight: 700,
          }}
        >
          Welcome to the BlogIt
        </Typography>
        <Typography
          variant="h6"
          maxWidth="600px"
          sx={{
            color: "var(--smoke-white)",
            fontFamily: "var(--secondary-font)",
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
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
            textAlign:'center'
          }}
        >
          Latest Articles
        </Typography>

        <Card sx={{ borderBottom: "1px solid var(--stone-grey)", borderRadius: 0 }}>
          <Stack direction="row">
            <CardMedia component="img" image={image} alt="blog" sx={{ width: '50%', objectFit: "cover" }} />
            <Box flex={1}>
              <CardContent>
                <Typography variant="h5" sx={{ fontFamily: "var(--primary-font)", color: "var(--earth-brown)" }}>
                  Design and Development
                </Typography>
                <Typography sx={{ fontFamily: "var(--secondary-font)", color: "var(--dark)" }}>
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

        <Card sx={{ borderBottom: "1px solid var(--stone-grey)", borderRadius: 0 }}>
          <Stack direction="row-reverse">
            <CardMedia component="img" image={image} alt="blog" sx={{ width: '50%', objectFit: "cover" }} />
            <Box flex={1}>
              <CardContent>
                <Typography variant="h5" sx={{ fontFamily: "var(--primary-font)", color: "var(--earth-brown)" }}>
                  UI/UX Principles
                </Typography>
                <Typography sx={{ fontFamily: "var(--secondary-font)", color: "var(--dark)" }}>
                  Discover the best practices for clean and user-friendly design.
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

        <Card sx={{ borderBottom: "1px solid var(--stone-grey)", borderRadius: 0 }}>
          <Stack direction="row">
            <CardMedia component="img" image={image} alt="blog" sx={{ width: '50%', objectFit: "cover" }} />
            <Box flex={1}>
              <CardContent>
                <Typography variant="h5" sx={{ fontFamily: "var(--primary-font)", color: "var(--earth-brown)" }}>
                  Backend APIs
                </Typography>
                <Typography sx={{ fontFamily: "var(--secondary-font)", color: "var(--dark)" }}>
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

        <Card sx={{ borderBottom: "1px solid var(--stone-grey)", borderRadius: 0 }}>
          <Stack direction="row-reverse">
            <CardMedia component="img" image={image} alt="blog" sx={{ width: '50%', objectFit: "cover" }} />
            <Box flex={1}>
              <CardContent>
                <Typography variant="h5" sx={{ fontFamily: "var(--primary-font)", color: "var(--earth-brown)" }}>
                  Authentication and Security
                </Typography>
                <Typography sx={{ fontFamily: "var(--secondary-font)", color: "var(--dark)" }}>
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

        <Card sx={{ borderBottom: "1px solid var(--stone-grey)", borderRadius: 0 }}>
          <Stack direction="row">
            <CardMedia component="img" image={image} alt="blog" sx={{ width: '50%', objectFit: "cover" }} />
            <Box flex={1}>
              <CardContent>
                <Typography variant="h5" sx={{ fontFamily: "var(--primary-font)", color: "var(--earth-brown)" }}>
                  Testing Strategies
                </Typography>
                <Typography sx={{ fontFamily: "var(--secondary-font)", color: "var(--dark)" }}>
                  Why testing matters and how to get started with tools like Jest.
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

        <Card sx={{ borderBottom: "1px solid var(--stone-grey)", borderRadius: 0 }}>
          <Stack direction="row-reverse">
            <CardMedia component="img" image={image} alt="blog" sx={{ width: '50%', objectFit: "cover" }} />
            <Box flex={1}>
              <CardContent>
                <Typography variant="h5" sx={{ fontFamily: "var(--primary-font)", color: "var(--earth-brown)" }}>
                  Deployment Basics
                </Typography>
                <Typography sx={{ fontFamily: "var(--secondary-font)", color: "var(--dark)" }}>
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
