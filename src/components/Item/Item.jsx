import {
  Box,
  Button,
  Heading,
  Image,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const placeholderImage = 'https://via.placeholder.com/100';

const Item = ({ item }) => {
  if (typeof item?.price !== 'number') {
    return <div>Error: Invalid stock value</div>;
  }

  if (!item || typeof item?.stock !== 'number') {
    toast.error('Error: Invalid item data');
  }

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="1rem"
      border="1px solid #e2e8f0"
      borderRadius="md"
      boxShadow="md"
    >
      <Image src={placeholderImage} alt="Placeholder" maxW="100px" />
      <Box ml="1rem">
        <Heading as="h2" size="md" marginBottom="0.5rem">
          {item?.name}
        </Heading>
        <Text fontSize="lg" color="teal.500" fontWeight="bold">
          $
          {item?.price.toFixed(2)}
        </Text>
        <Text fontSize="sm" color="gray.500">
          Category:
          {' '}
          {item?.category}
        </Text>
        <Text fontSize="sm" color="gray.500">
          Description:
          {' '}
          {item?.description}
        </Text>
        <Text fontSize="sm" color="gray.500">
          Stock:
          {' '}
          {item?.stock}
        </Text>
        <Link to={`/item/${item?.id}`} textDecoration="none">
          <Button mt="0.5rem" colorScheme="teal" size="sm">
            Ver detalles
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Item;
