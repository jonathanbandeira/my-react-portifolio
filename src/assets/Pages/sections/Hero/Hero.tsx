import { Container, Grid, styled, Typography, Button } from "@mui/material";
import Avatar from "../../../images/avatar.jpeg";
import DownloadIcon from "@mui/icons-material/Download";
import EmailIcon from "@mui/icons-material/Email";

const Hero = () => {
  const StyledHero = styled("div")(({ theme }) => ({
    background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(4),
    transition: "background-color 0.3s ease-in-out",
    "&:hover": {
      background: `linear-gradient(135deg, ${theme.palette.primary.dark}, ${theme.palette.secondary.dark})`,
    },
  }));

  const StyledImg = styled("img")(() => ({
    width: "100%",
    maxWidth: "250px",
    borderRadius: "50%",
    margin: "0 auto",
    display: "block",
    transition: "transform 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.1)",
    },
  }));

  const StyledButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(1),
    color: "white",
    border: "2px solid white",
    textTransform: "none",
    padding: theme.spacing(1, 4),
    fontSize: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
      boxShadow: `0px 4px 15px ${theme.palette.secondary.main}`,
    },
    "& svg": {
      marginRight: theme.spacing(1),
    },
  }));

  return (
    <StyledHero>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center" justifyContent="center">
          <Grid item xs={12} md={5}>
            <StyledImg src={Avatar} alt="Jonathan Bandeira" />
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography color="primary.contrastText" textAlign="center" variant="h4" gutterBottom>
              Jonathan Bandeira
            </Typography>
            <Typography color="primary.contrastText" textAlign="center" variant="h6" gutterBottom>
              I'm a Software Engineer
            </Typography>
            <Grid container justifyContent="center" spacing={3}>
              <Grid item xs={12} sm={6} md={4} textAlign="center">
                <StyledButton>
                  <DownloadIcon />
                  <Typography>Download CV</Typography>
                </StyledButton>
              </Grid>
              <Grid item xs={12} sm={6} md={4} textAlign="center">
                <StyledButton startIcon={<EmailIcon />}>
                  <Typography>Contact Me</Typography>
                </StyledButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledHero>
  );
};

export default Hero;
