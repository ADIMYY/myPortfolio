import { Container, Typography, Grid, Card, CardContent, CardActions, Button, Box } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';

const projects = [
  {
    title: 'Library Management System',
    description:
      'A comprehensive library management system built with Node.js and MongoDB, featuring book reservations, borrowing, returning, and admin reports.',
    githubUrl: 'https://github.com/ADIMYY/Library-Management-System',
    tech: ['Node.js', 'MongoDB', 'Express', 'JWT'],
  },
  {
    title: 'Google Script',
    description:
      'Automation scripts for Google services using Google Apps Script.',
    githubUrl: 'https://github.com/ADIMYY/Google_Script',
    tech: ['Google Apps Script', 'JavaScript'],
  },
  {
    title: 'E-commerce Platform',
    description:
      'Full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration.',
    githubUrl: 'https://github.com/ADIMYY/Node.js-E-commerce',
    tech: ['Node.js', 'MongoDB', 'Express', 'Stripe'],
  },
  {
    title: 'Natours',
    description:
      'Tour booking application with user authentication, tour management, and booking system.',
    githubUrl: 'https://github.com/ADIMYY/Natours',
    tech: ['Node.js', 'MongoDB', 'Express', 'JWT'],
  },
  {
    title: 'Express To-Do App',
    description:
      'A simple yet powerful todo application built with Express.js, featuring CRUD operations and user authentication.',
    githubUrl: 'https://github.com/ADIMYY/Express-To-Do',
    tech: ['Express.js', 'MongoDB', 'EJS'],
  },
  {
    title: 'Weather API',
    description:
      'Weather application that provides real-time weather information using external APIs.',
    githubUrl: 'https://github.com/ADIMYY/Node.js-Weather-API',
    tech: ['Node.js', 'Express', 'API Integration'],
  },
];

const Projects = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h2"
        sx={{
          color: 'primary.main',
          mb: 6,
          fontSize: { xs: '2rem', md: '3rem' },
        }}
      >
        Featured Projects
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item xs={12} md={6} key={project.title}>
            <Card
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'background.paper',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  transition: 'transform 0.3s ease-in-out',
                },
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                  variant="h5"
                  component="h2"
                  sx={{ color: 'primary.main', mb: 2 }}
                >
                  {project.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ color: 'secondary.main', mb: 2 }}
                >
                  {project.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {project.tech.map((tech) => (
                    <Typography
                      key={tech}
                      variant="caption"
                      sx={{
                        backgroundColor: 'background.default',
                        color: 'primary.main',
                        px: 1,
                        py: 0.5,
                        borderRadius: 1,
                      }}
                    >
                      {tech}
                    </Typography>
                  ))}
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  startIcon={<GitHubIcon />}
                  sx={{
                    color: 'primary.main',
                    '&:hover': {
                      color: 'secondary.main',
                    },
                  }}
                >
                  View on GitHub
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects; 