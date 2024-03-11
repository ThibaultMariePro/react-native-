import { Stack, useLocalSearchParams } from "expo-router";
import { View, Image,  Text, StyleSheet } from "react-native";
import products from "@assets/data/product";

const ProductDetailItem = () => {
  const { id } = useLocalSearchParams();
  const product = products.find((p) => p.id.toString() === id);
  if (!product) {
    return <Text>Product not found</Text>;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product?.name }} />
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.price}>{product.price}€</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  price: {
    color: "blue",
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  }
});

export default ProductDetailItem;
