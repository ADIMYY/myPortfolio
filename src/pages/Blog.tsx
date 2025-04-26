import { Container, Typography, Card, CardContent, Grid } from '@mui/material';
import usePageTitle from '../hooks/usePageTitle';

const Blog = () => {
  usePageTitle('Blog');

  const blogPosts = [
    {
      title: 'Kaapa visitor assistant (Tawaf)',
      description: 'A comprehensive Islamic application providing prayer times, adhan notifications, and mosque-related services. Built with Express.js and MongoDB, featuring user authentication, file uploads, and email notifications.',
      date: 'April 2024',
      technologies: ['NodeJs', 'MongoDB', 'Express']
    },
    {
      title: 'Google Script (Naqqas)',
      description: 'A Node.js API that integrates with Google Sheets and Google Drive to manage medication data and orders.',
      date: 'April 2024',
      technologies: ['Google Apps Script', 'JavaScript']
    }
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Latest Developments
      </Typography>
      <Typography variant="body1" color="secondary" paragraph>
        Stay updated with my latest projects and developments
      </Typography>
      
      <Grid container spacing={4} sx={{ mt: 4 }}>
        {blogPosts.map((post, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" component="h2" gutterBottom>
                  {post.title}
                </Typography>
                <Typography variant="body2" color="secondary" gutterBottom>
                  {post.date}
                </Typography>
                <Typography variant="body1" paragraph>
                  {post.description}
                </Typography>
                <Typography variant="body2" color="secondary">
                  Technologies: {post.technologies.join(', ')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Blog; 