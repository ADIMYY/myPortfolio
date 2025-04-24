import { Container, Typography, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
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
          About Me
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: 'secondary.main',
            mb: 4,
            fontSize: '1.2rem',
            lineHeight: 1.8,
          }}
        >
          I am a passionate backend developer with a strong foundation in computer
          science fundamentals and a keen interest in building scalable,
          efficient, and maintainable systems. My expertise lies in Node.js
          development, database design, and creating robust RESTful APIs.
        </Typography>
      </Box>

      <Box sx={{ mt: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        <Box sx={{ flex: 1 }}>
          <Paper
            component={motion.div}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            sx={{
              p: 4,
              height: '100%',
              backgroundColor: 'background.paper',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: 'primary.main',
                mb: 3,
                fontSize: '1.8rem',
              }}
            >
              Technical Expertise
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', pl: 0 }}>
              <Typography
                component="li"
                sx={{
                  color: 'secondary.main',
                  mb: 2,
                  '&:before': {
                    content: '"▹"',
                    color: 'primary.main',
                    mr: 1,
                  },
                }}
              >
                Backend Development with Node.js and Express
              </Typography>
              <Typography
                component="li"
                sx={{
                  color: 'secondary.main',
                  mb: 2,
                  '&:before': {
                    content: '"▹"',
                    color: 'primary.main',
                    mr: 1,
                  },
                }}
              >
                Database Design and Management (MongoDB)
              </Typography>
              <Typography
                component="li"
                sx={{
                  color: 'secondary.main',
                  mb: 2,
                  '&:before': {
                    content: '"▹"',
                    color: 'primary.main',
                    mr: 1,
                  },
                }}
              >
                RESTful API Development
              </Typography>
              <Typography
                component="li"
                sx={{
                  color: 'secondary.main',
                  mb: 2,
                  '&:before': {
                    content: '"▹"',
                    color: 'primary.main',
                    mr: 1,
                  },
                }}
              >
                TypeScript and Modern JavaScript
              </Typography>
            </Box>
          </Paper>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Paper
            component={motion.div}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            sx={{
              p: 4,
              height: '100%',
              backgroundColor: 'background.paper',
            }}
          >
            <Typography
              variant="h3"
              sx={{
                color: 'primary.main',
                mb: 3,
                fontSize: '1.8rem',
              }}
            >
              Core Competencies
            </Typography>
            <Box component="ul" sx={{ listStyle: 'none', pl: 0 }}>
              <Typography
                component="li"
                sx={{
                  color: 'secondary.main',
                  mb: 2,
                  '&:before': {
                    content: '"▹"',
                    color: 'primary.main',
                    mr: 1,
                  },
                }}
              >
                Strong Problem-Solving Skills
              </Typography>
              <Typography
                component="li"
                sx={{
                  color: 'secondary.main',
                  mb: 2,
                  '&:before': {
                    content: '"▹"',
                    color: 'primary.main',
                    mr: 1,
                  },
                }}
              >
                Data Structures and Algorithms
              </Typography>
              <Typography
                component="li"
                sx={{
                  color: 'secondary.main',
                  mb: 2,
                  '&:before': {
                    content: '"▹"',
                    color: 'primary.main',
                    mr: 1,
                  },
                }}
              >
                System Design and Architecture
              </Typography>
              <Typography
                component="li"
                sx={{
                  color: 'secondary.main',
                  mb: 2,
                  '&:before': {
                    content: '"▹"',
                    color: 'primary.main',
                    mr: 1,
                  },
                }}
              >
                Code Optimization and Performance
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Box>
    </Container>
  );
};

export default About; 