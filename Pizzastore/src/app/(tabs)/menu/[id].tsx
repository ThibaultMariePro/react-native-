import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

const ProductDetailItem = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Stack.Screen options={{ title: `Details of product ${id}` }} />
      <Text style={styles.text}>{id}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ProductDetailItem;
