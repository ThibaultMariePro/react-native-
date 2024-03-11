import { Stack, useLocalSearchParams } from "expo-router";
import { View, Image, Text, StyleSheet, Pressable } from "react-native";
import products from "@assets/data/product";
import { useState } from "react";
import Button from "@/components/Button";

const sizes = ["S", "M", "L", "XL"];

const ProductDetailItem = () => {
  const { id } = useLocalSearchParams();

  const [selectedSize, setSelectedSize] = useState("M");

  const product = products.find((p) => p.id.toString() === id);

  const addToCart = () => {
    console.log(`Added ${selectedSize} ${product?.name} to cart`);
  };

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
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable 
            onPress={() => setSelectedSize(size)}
            style={[
              styles.size,
              { backgroundColor: selectedSize == size ? "gainsboro" : "white" },
            ]}
          >
            <Text
              key={size}
              style={[
                styles.sizeText,
                { color: selectedSize == size ? "darkblue" : "grey" },
              ]}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>

      <Text style={styles.price}>{product.price}€</Text>
      <Button onPress={addToCart} text="Add to cart" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  price: {
    color: "blue",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 'auto',
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  sizes: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  size: {
    backgroundColor: "gainsboro",
    padding: 10,
    margin: 5,
    borderRadius: 25,
    aspectRatio: 1,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  sizeText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "darkblue",
  },
});

export default ProductDetailItem;
