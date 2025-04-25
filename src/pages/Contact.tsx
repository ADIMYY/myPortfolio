import { Container, Typography, Box, Paper, Grid, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const Contact = () => {
  return (
    <Container 
      maxWidth={false} 
      sx={{ 
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        p: 0,
      }}
    >
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{ textAlign: 'center', mb: 4 }}
      >
        <Typography
          variant="h2"
          sx={{
            color: 'primary.main',
            mb: 4,
            fontSize: { xs: '2rem', md: '3rem' },
          }}
        >
          Get In Touch
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'secondary.main',
            mb: 6,
            fontSize: '1.2rem',
            maxWidth: '600px',
            mx: 'auto',
          }}
        >
          I'm currently open to new opportunities and would love to hear from you.
          Feel free to connect with me through any of these platforms!
        </Typography>
      </Box>

      <Grid 
        container 
        justifyContent="center" 
        alignItems="center" 
        sx={{ 
          flex: 1,
          width: '100%',
          m: 0,
        }}
      >
        <Grid item xs={12}>
          <Paper
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            elevation={0}
            sx={{
              p: 6,
              backgroundColor: 'background.paper',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 0,
              minHeight: '50vh',
              width: '100%',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: 'primary.main',
                mb: 6,
                fontSize: '2.2rem',
              }}
            >
              Connect With Me
            </Typography>
            <Box sx={{ display: 'flex', gap: 4 }}>
              <IconButton
                href="https://github.com/ADIMYY"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'primary.main',
                  '&:hover': {
                    color: 'secondary.main',
                  },
                }}
              >
                <GitHubIcon sx={{ fontSize: 50 }} />
              </IconButton>
              <IconButton
                href="https://linkedin.com/in/abdelrahman-ali-a63464246/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'primary.main',
                  '&:hover': {
                    color: 'secondary.main',
                  },
                }}
              >
                <LinkedInIcon sx={{ fontSize: 50 }} />
              </IconButton>
              <IconButton
                href="https://wa.me/+201099858459"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'primary.main',
                  '&:hover': {
                    color: 'secondary.main',
                  },
                }}
              >
                <WhatsAppIcon sx={{ fontSize: 50 }} />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact; 