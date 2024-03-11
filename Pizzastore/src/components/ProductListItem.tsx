import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '@constants/Colors';
import { Product } from '@/types';

export const notFoundImageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019";

type ProductListItemProps = {
    product: Product;
}

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <View>
      <Image source={{ uri: product.image || notFoundImageUrl }} style={styles.image} />
      <Text>{product.name}</Text>
      <Text style={styles.highlight}>{product.price} €</Text>
    </View>
  );
}

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  highlight: {
    fontSize : 20,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: Colors.light.tint,
  },
  image: { 
    width: '100%',
    aspectRatio: 1,
  }
});
