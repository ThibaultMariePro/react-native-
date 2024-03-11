import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "@/constants/Colors";
import { forwardRef } from "react";

type ButtonProps = {
  text: string;
} & React.ComponentPropsWithoutRef<typeof Pressable>;

const Button = forwardRef<View | null, ButtonProps>(
  ({ text, ...pressableProps }, ref) => {
    return (
      <Pressable ref={ref} {...pressableProps} style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    );
  }
);

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.light.tint,
    padding: 10,
    borderRadius: 100,
    margin: 10,
  },
  text: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
  },
});
