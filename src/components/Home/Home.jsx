import {
  Box,
  Container,
  Grid,
  Heading, Text,
} from '@chakra-ui/react';
import React from 'react';

const Home = () => {
  return (
    <Box className="home-container">
      <Box as="header" p={8} bg="blue.500" color="white">
        <Container maxW="container.lg">
          <Heading as="h1" size="xl">
            Welcome to KwikApp Store!
          </Heading>
          <Text>Your one-stop shop for all things awesome.</Text>
        </Container>
      </Box>
      <Container maxW="container.lg" py={12}>
        <Box as="section" mb={12}>
          <Heading as="h2" size="lg" mb={4}>
            Featured Products
          </Heading>
          <Grid templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
            {/* Render your featured products here */}
            {/* Example:
            <GridItem>
              <ProductCard
                title="Cool Product"
                imageUrl="https://example.com/cool-product-image.jpg"
                price="$99.99"
              />
            </GridItem>
            */}
          </Grid>
        </Box>
        <Box as="section" mb={12}>
          <Heading as="h2" size="lg" mb={4}>
            About Us
          </Heading>
          <Text>
            We&rsquo;re dedicated to bringing you the latest
            and greatest products that make your life easier
            and more enjoyable. From gadgets to fashion, we have it all.
          </Text>
        </Box>
      </Container>
      <Box as="footer" py={4} bg="gray.100">
        <Container maxW="container.lg">
          <Text>
            &copy;
            {' '}
            {new Date().getFullYear()}
            {' '}
            KwikApp Store. All rights reserved.
          </Text>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
