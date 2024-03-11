import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Colors from "@constants/Colors";
import { Product } from "@/types";
import { Link } from "expo-router";

export const notFoundImageUrl =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/330px-No-Image-Placeholder.svg.png?20200912122019";

type ProductListItemProps = {
  product: Product;
};

const ProductListItem = ({ product }: ProductListItemProps) => {
  return (
    <Link href={`/menu/${product.id}`} asChild>
      <Pressable style={styles.container}>
        <Image
          source={{ uri: product.image || notFoundImageUrl }}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.title}>{product.name}</Text>
        <Text style={styles.highlight}>{product.price} €</Text>
      </Pressable>
    </Link>
  );
};

export default ProductListItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.light.background,
    borderRadius: 12,
    maxWidth: "50%",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  highlight: {
    fontSize: 20,
    fontWeight: "bold",
    fontStyle: "italic",
    color: Colors.light.tint,
  },
});
