import { StyleSheet, Text, View, Image } from 'react-native';
import Colors from '@/src/constants/Colors';


const ProductListItem = ({ product }) => {
  return (
    <View>
      <Image source={{ uri: product.image }} style={styles.image} />
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
