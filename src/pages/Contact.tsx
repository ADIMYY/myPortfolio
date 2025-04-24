import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  Paper,
  Grid,
  IconButton,
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
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
          }}
        >
          I'm currently open to new opportunities and would love to hear from you.
          Whether you have a question or just want to say hi, feel free to reach
          out!
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper
            component={motion.form}
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            sx={{
              p: 4,
              backgroundColor: 'background.paper',
            }}
          >
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: 'secondary.main',
                },
                '& .MuiInputLabel-root': {
                  color: 'secondary.main',
                },
              }}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: 'secondary.main',
                },
                '& .MuiInputLabel-root': {
                  color: 'secondary.main',
                },
              }}
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              margin="normal"
              required
              sx={{
                '& .MuiOutlinedInput-root': {
                  color: 'secondary.main',
                },
                '& .MuiInputLabel-root': {
                  color: 'secondary.main',
                },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 2,
                backgroundColor: 'primary.main',
                color: 'background.default',
                '&:hover': {
                  backgroundColor: 'primary.dark',
                },
              }}
            >
              Send Message
            </Button>
          </Paper>
        </Grid>

        <Grid item xs={12} md={6}>
          <Paper
            component={motion.div}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            sx={{
              p: 4,
              height: '100%',
              backgroundColor: 'background.paper',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: 'primary.main',
                mb: 4,
                fontSize: '1.8rem',
              }}
            >
              Connect With Me
            </Typography>
            <Box sx={{ display: 'flex', gap: 3 }}>
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
                <GitHubIcon sx={{ fontSize: 40 }} />
              </IconButton>
              <IconButton
                href="mailto:your.email@example.com"
                sx={{
                  color: 'primary.main',
                  '&:hover': {
                    color: 'secondary.main',
                  },
                }}
              >
                <EmailIcon sx={{ fontSize: 40 }} />
              </IconButton>
              <IconButton
                href="https://linkedin.com/in/your-profile"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  color: 'primary.main',
                  '&:hover': {
                    color: 'secondary.main',
                  },
                }}
              >
                <LinkedInIcon sx={{ fontSize: 40 }} />
              </IconButton>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact; 