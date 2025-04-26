import { Box, Container, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import usePageTitle from '../hooks/usePageTitle';

const skills = [
  {
    category: 'Backend Development',
    items: ['Node.js', 'MongoDB', 'NestJS', 'TypeScript', 'RESTful APIs'],
  },
  {
    category: 'Programming Languages',
    items: ['C', 'C++', 'TypeScript', 'JavaScript'],
  },
  {
    category: 'Core Competencies',
    items: ['Data Structures', 'Algorithms', 'Problem Solving', 'System Design'],
  },
];

const Home = () => {
  usePageTitle('Home');

  return (
    <Container maxWidth="lg">
      {/* Hero Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        sx={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 4,
          py: 4,
        }}
      >
        {/* Text Content */}
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h1"
            sx={{
              color: 'primary.main',
              fontSize: { xs: '2.5rem', md: '4rem' },
            }}
          >
            Hi, I'm Abdelrahman Ali
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: 'secondary.main',
              fontSize: { xs: '1.5rem', md: '2.5rem' },
              mt: 2,
            }}
          >
            Backend Developer & Problem Solver
          </Typography>
          <Typography
            variant="body1"
            sx={{
              maxWidth: '600px',
              color: 'secondary.main',
              fontSize: '1.2rem',
              mt: 3,
            }}
          >
            I specialize in building robust backend systems and solving complex
            programming challenges. With expertise in Node.js, MongoDB, and
            TypeScript, I create scalable and efficient solutions.
          </Typography>
        </Box>

        {/* Photo */}
        <Box
          component={motion.div}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          sx={{
            flex: 1,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            component="img"
            src="https://res.cloudinary.com/dyd5lvwhc/image/upload/v1745571012/photo_2025-04-17_15-57-21_vbjuii.jpg"
            alt="ADIMYY"
            sx={{
              width: { xs: '100%', md: '400px' },
              height: { xs: '300px', md: '400px' },
              objectFit: 'cover',
              borderRadius: '20px',
              boxShadow: 3,
              border: '2px solid',
              borderColor: 'primary.main',
            }}
          />
        </Box>
      </Box>

      {/* Skills Section */}
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        sx={{ py: 8 }}
      >
        <Typography
          variant="h2"
          sx={{
            color: 'primary.main',
            mb: 4,
            fontSize: { xs: '2rem', md: '3rem' },
          }}
        >
          Skills & Expertise
        </Typography>
        <Grid container spacing={3}>
          {skills.map((skillGroup) => (
            <Grid item xs={12} md={4} key={skillGroup.category}>
              <Paper
                sx={{
                  p: 3,
                  height: '100%',
                  backgroundColor: 'background.paper',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    color: 'primary.main',
                    mb: 2,
                    fontSize: '1.5rem',
                  }}
                >
                  {skillGroup.category}
                </Typography>
                <Box component="ul" sx={{ listStyle: 'none', pl: 0 }}>
                  {skillGroup.items.map((skill) => (
                    <Typography
                      component="li"
                      key={skill}
                      sx={{
                        color: 'secondary.main',
                        mb: 1,
                        '&:before': {
                          content: '"▹"',
                          color: 'primary.main',
                          mr: 1,
                        },
                      }}
                    >
                      {skill}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
};

export default Home; 